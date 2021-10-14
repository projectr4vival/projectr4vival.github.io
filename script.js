var header = document.getElementById("header");
var footer = document.getElementById("footer");

header.innerHTML = 

`<table width = 100% style = "max-width: 1300px" align="center">
<tr>
  <td id = "logo">
    <a href = "https://projectr4vival.github.io/">
      <img src = "https://projectr4vival.github.io/logo.svg">
    </a>
  </td>
  <td align = right>
    <ul id = "sub_header"> 
      <div id="myNav" class="overlay">

        <!-- Overlay content -->
        <div class="overlay_content">
          <li><a href = "https://projectr4vival.github.io/">Home</a></li> 
          <li><a href = "https://projectr4vival.github.io/kernel">Kernel</a></li> 
          <li><a href = "https://projectr4vival.github.io/dumping">Dumping</a></li>
          <li><a href = "https://projectr4vival.github.io/homebrew">Homebrew</a></li> 
          <li><a href = "https://projectr4vival.github.io/credits">Credits</a></li> 
        </div>

      </div>

      <li><a href = "https://projectr4vival.github.io/discord" target = "_blank"><img src = "https://projectr4vival.github.io/discord.svg"></a></li> 
      <li> 
        <div class="dropdown" onclick="showDropdown()">
          <img src = "https://projectr4vival.github.io/language.svg" class="dropbtn">
          <img src = "https://projectr4vival.github.io/close.svg" class="closebtn">
            <div id="myDropdown" class="dropdown-content">
              <a href="https://projectr4vival.github.io/">English</a>
              <hr>
              <a href="#">Italiano</a>
            </div>
        </div> 
      </li> 
      <li class="menu" onclick="showMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </li>
    </ul> 
  </td>
</tr>
</table>`;


footer.innerHTML = 

`<table width = 100% style = "max-width: 1300px" align="center">
  <tr>
    <td>This site is not affiliated with the Nintendo&reg company in any way.</td>
    <td align = "right">&copy 2021 Project R4vival - <a href = "https://github.com/projectr4vival/projectr4vival.github.io" target="_blank">Source<img src = "https://projectr4vival.github.io/github.svg"></a></td>
  </tr>
</table>`;


/* ScrollButton */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || window.scrollY > 20) {
    document.getElementById("scrollButton").classList.add("scrollAppear");
  }
  else {
    document.getElementById("scrollButton").classList.remove("scrollAppear");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


//Scroll the page up on loading
/*window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}*/ //Purtroppo lo fa prima del caricamento e il browser interviene dopo


function listSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("option");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// When the user clicks on the button, toggle between hiding and showing the dropdown content */
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsByClassName("closebtn")[0].classList.toggle("show"); // Make the close button appear/disappear
  document.getElementsByClassName("dropbtn")[0].classList.toggle("hide"); // Make the lang svg disappear/appear
  if (document.getElementsByClassName("menu")[0].classList.contains("change")) {
    showMenu(document.getElementsByClassName("menu")[0]);
  }
}


let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

var content = document.getElementsByClassName("content");
for(var i = 0; i < content.length; i++)
{
   content[i].addEventListener(touchEvent, closeOnClick);
}

document.getElementsByClassName("menu")[0].addEventListener(touchEvent, closeOnClick);

var banner = document.getElementById("banner");
if(banner != null){
  banner.addEventListener(touchEvent, closeOnClick);
}

// Close the dropdown menu if the user clicks outside of it
function closeOnClick(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementsByClassName("closebtn")[0].classList.remove("show");
        document.getElementsByClassName("dropbtn")[0].classList.remove("hide");
      }
    }
  }
}


// Slideshow
var slideIndex = 0;
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if (dots[0] != null) {
  dots[0].className += " active";
}

showSlides();

function plusSlides(n) {
  changeSlides(slideIndex += n);
}

function currentSlide(n) {
  changeSlides(slideIndex = n);
}

function showSlides() {

  clearSlides();

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  var timer = setTimeout(showSlides, 3000); // Change image every 3 seconds
  
} 

function changeSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  clearSlides();

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  clearTimeout(timer);
  timer;
  showSlides();
}

function clearSlides() {
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
}


// Modal Images

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 


/* Mobile Menu */
function changeButton(x){
  x.classList.toggle("change");
} 

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
} 

function preventDefault(e){
    e.preventDefault();
}

function showMenu(x){

  changeButton(x);

  if (x.classList.contains("change")) {
    openNav();
    document.body.addEventListener('touchmove', preventDefault, {passive: false}); // Disable vertical scroll on mobile
    //Passive false is required for modern browsers, touchmove means events that include a touch action moving on the screen
  }
  else {
    closeNav();
    document.body.removeEventListener('touchmove', preventDefault, {passive: false}); // Reenable vertical scroll on mobile
  }

  document.body.classList.toggle("vertical_disable");

}