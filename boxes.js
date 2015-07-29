$(document).ready(function() {
    console.log("hello world");
    // Find the secretBox on the page. Set the background color to white.
    $("#secretBox").css("background", "white");
    // Add an h1 tag that says, "secret box!"
    var $h1 = ('<h1>secret box!</h1>');
    // console.log($h1);
    $("#secretBox").append($h1).css("color", "blue");
    // Find all child divs of the first row

    $('#row1').children().addClass("boxType3");

    // Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
    $('.boxType1').last().hide();
    // 4. Change all red boxes to white.
    // $('.boxType1').css('background-color', 'white');
    // 5. Get the first two divs in the second row.  Take away all styling from the divs.

    var x = $('#row2').children()[0];
    $(x).removeClass();
    var y = $('#row2').children()[1];
    $(y).removeClass();

// 6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

   $("div").not("#container, .row, #secretBox").css("width", "2px");

// 1. Add an on click handler to the container div. Console log the x and y position of the click.
   $('#container').on('click', function (event) {
      console.log(event.pageX,event.pageY);
   });
// 2. Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!

  $(".boxType1").prepend('<a href="http://www.galvanize.com">Galvanize</a>').on("click", function(event) {
    event.preventDefault();
    alert("you can never leave");
  });

  // 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.



  $('.box').one('click', function(event) {
      $(this).prepend("<img src='http://www.ugodog.net/blog/wp-content/uploads/2008/08/golden-retriever-dog.thumbnail.jpg'/>");
       event.stopPropogation();
      });
      $('.box').on('click', function () {
        $(this).find('img').remove();
        event.stopPropogation();
      });


// . Write a click handler __on the conatainer div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You can do it completely with what is given to you in the event callback.

  $('#container').on("click",function(e){

         if ($(e.target).hasClass('box') === true)
         {
           $(e.target).css('background','white');
             $('#container').css('background-color','black');
         } else if ($(this).is('#container') === true){
           $(this).css("background", "limegreen");
         }

   });

});

 // $('#container').on('click', function(){
 //    $('#container').css('background-color', 'black');
 //      if ($('this').closest().css('background-color') !== 'white') {
 //          $(this).css('background-color', 'white');
 //      } else {
 //        $(this).css('background-color', 'green');
 //      }
 //    // $(this).css('background-color', 'white');
 //  });


// working a bit that turns the things green but first and last part isn't working
//   $('#container').on('click', '.box', function(){

//     $('#container').css('background-color', 'black');

//     var boxes = $(this).css('background-color', 'white');
//     var boxColor = $(this).css('background-color');

//     if (boxColor !== "rgb(255, 0, 0)") {
//       $(this).css('background-color', 'green');
//     }
