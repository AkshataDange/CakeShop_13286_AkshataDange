

var swiper = new Swiper(".product-row", {
  //   Creates a new Swiper instance targeting the HTML element with the class product-row.
  // The options within the curly braces configure the behavior and appearance of the Swiper slider.

  spaceBetween: 30, //Specifies the spacing in pixels between slides.

  loop: true, //Enables infinite looping of slides, meaning the carousel restarts seamlessly when reaching the end.

  centeredSlides: true, //Centers the active slide in the view.

  autoplay: {
    delay: 4500, //Sets a 4.5-second delay between automatic slide transitions.

    disableOnInteraction: false,  //autoplay continues even after user interaction e.g., clicking or swiping

  },
  pagination: {
    el: ".swiper-pagination", 
    //Specifies the HTML element (with class swiper-pagination) where pagination dots will appear.

    clickable: true, //Makes the pagination dots interactive, allowing users to click on them to navigate to the corresponding slide.
  },
  breakpoints: {
    0: {
      slidesPerView: 1, //When the viewport width is 0 pixels or larger, only 1 slide will be visible.
    },
    768: {
      slidesPerView: 2, //When the viewport width is 768 pixels or larger, 2 slides will be visible.
    },
    1024: {
      slidesPerView: 3, //When the viewport width is 1024 pixels or larger, 3 slides will be visible.
    },
  },
});
var swiper = new Swiper(".blogs-row", {
  // Initializes a new Swiper instance targeting the .blogs-row element, where the slider content is placed.

  spaceBetween: 30, //Sets 30px spacing between slides.

  loop: true,  //Enables infinite looping, allowing the slider to restart seamlessly when reaching the end.

  centeredSlides: true, //enters the active slide in the viewport.
  autoplay: {
    delay: 4500, //Sets a 4.5-second delay between automatic slide transitions.

    disableOnInteraction: false, //Ensures autoplay continues even after interacts with the slider (e.g. clicks or swipes).
  },
  pagination: {
    el: ".swiper-pagination", //Targets the HTML element with the class .swiper-pagination for pagination bullets.

    clickable: true, //Makes the pagination bullets interactive, allowing to navigate between slides by clicking on them.
  },
  navigation: {
    nextEl: ".swiper-button-next", //to move to next slide
    prevEl: ".swiper-button-prev", //to move to prev slide
  },
});

var swiper = new Swiper(".review-row", {//Creates a Swiper instance for the review-row slider.

  spaceBetween: 30, //Adds 30px space between slides.
  loop: true, //Enables infinite looping, allowing the slider to restart when reaching the end.
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Jquery for Contact

var InvalidBorder="2px solid red";
var validBorder="2px solid green";
var nameNode=$("#name")
var emailNode=$("#email")
var messageNode=$("#messsage")

nameNode.on("keyup",()=>namevalidation())
emailNode.on("keyup",()=>emailvalidation())
messageNode.on("keyup",()=>messagevalidation())

contactForm.on("submit",()=>allvalidation())


function namevalidation(){
  var name = $("name").val();

  if (nameNode === "" || nameNode === !/^[a-zA-Z\s]+$/.test(name)) {
    // alert("Name is required.");
    nameNode.css("border",InvalidBorder);
    return false;
}

else{ 
nameNode.css("border",validBorder);
return true
}
}

// function emailvalidation(){
//   var email = $("email").val();

// }


// $(document).ready(function () {
//   $('#contactForm').on('submit', function (e) {
//       e.preventDefault();

//       const name = $('#name').val().trim();
//       const email = $('#email').val().trim();
//       const message = $('#message').val().trim();

//       // Name validation
//       if (name === "") {
//           alert("Name is required.");
//           return false;
//       }
//       if (!/^[a-zA-Z\s]+$/.test(name)) {
//           alert("Name must only contain letters and spaces.");
//           return false;
//       }

//       // Email validation
//       if (email === "") {
//           alert("Email is required.");
//           return false;
//       }
//       if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
//           alert("Please enter a valid email address.");
//           return false;
//       }

//       // Message validation
//       if (message === "") {
//           alert("Message is required.");
//           return false;
//       }
//       if (message.length < 10) {
//           alert("Message must be at least 10 characters long.");
//           return false;
//       }

//       // If validation passes
//       alert("Thank you for contacting us! Your message has been submitted.");
//       $('#contactForm')[0].reset(); // Reset the form
//   });
// });
