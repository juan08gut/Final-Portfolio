// --- HAMBURGER MENU TOGGLE ---
// Toggles the display of the navigation links for the responsive menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// --- SLIDESHOW GALLERY LOGIC ---
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Handles wrapping around from the end to the start
  if (n > slides.length) {slideIndex = 1}
  // Handles wrapping around from the start to the end
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  // Display the current slide and activate the current dot
  if (slides.length > 0) {
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active-dot";
  }
}