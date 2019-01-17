/* Allows 1 page HTML ==> 
#nav links and .chat-link buttons in 
game-info section toggle display of hidden divs 
by changing div class to current */
$("#nav a, .chat-link").bind('click', function(e) {  e.preventDefault();  
var nextPage = $(e.target.hash);
if(e.target.tagName == "IMG"){
    nextPage =  $(e.target.parentNode.hash)} 
    else{
   nextPage = $(e.target.hash);}  
$("#pages > .current").removeClass("current");  
nextPage.addClass("current");
$("#nav").attr("className", e.target.hash.slice(1));
 //allows displaying messages according to chat link clicked in game info section
if(e.target.hash == "#chats-page"){
    var id = e.target.id
    $("#chats-page").data("chatLink", id)
    
    onAuthStateChanged() //clean up UI
    loadChat() // reload data from database on event
} 
/*conditional will allow each new post to be associated to the chat button pressed through a 
new attribute added (chatLink)
*/
});

//Code for showing RULES in rule-page

$("#dropdown a").bind('click', function(e) {  e.preventDefault();  
var nextPage = $(e.target.hash); 
$("#rules .current").removeClass("current");  
nextPage.addClass("current");f
$("#dropdown").attr("className", e.target.hash.slice(1));});

// Function to change page container-fluid to container 
//if screen size is bigger than X ==>
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 800) {
      $('#pages').addClass('container-fluid');  
      $('#pages').removeClass('container');
    } else if (ww >= 801) {
      $('#pages').removeClass('container-fluid');
      $('#pages').addClass('container');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});


