console.log("your_index.js file is loaded correctly!");
// $(".contactImage") .on("click", (function() {

// });


$(document).ready(function(){
 
  $("#contactLink").click(function(){
    $(".contactImage").show();
    console.log("display");
  });

  $("#closeModal").click(function(){
    $(".contactImage").hide();
    console.log("hidden");
  })
});