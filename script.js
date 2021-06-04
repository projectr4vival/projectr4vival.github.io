var header = document.getElementById("header");
var footer = document.getElementById("footer");

header.innerHTML = 

`<table width = 100%>
<tr>
  <td id = "logo">
    <a href = "https://projectr4vival.github.io/">
      <img src = "https://projectr4vival.github.io/logo.svg">
    </a>
  </td>
  <td align = right>
    <ul id = "sub_header"> 
      <li><a href = "https://projectr4vival.github.io/">Home</a></li> 
      <li><a href = "https://projectr4vival.github.io/kernel">Kernel</a></li> 
      <li><a href = "https://projectr4vival.github.io/dumping">Dumping</a></li>
      <li><a href = "https://projectr4vival.github.io/homebrew">Homebrew</a></li> 
      <li><a href = "https://projectr4vival.github.io/credits">Credits</a></li> 
      <li><a href = "https://projectr4vival.github.io/discord" target = "_blank"><img src = "https://projectr4vival.github.io/discord.svg"></a></li> 
      <li> 
        <div class="dropdown">
          <img src = "https://projectr4vival.github.io/language.svg" onclick="showDropdown()" class="dropbtn">
            <div id="myDropdown" class="dropdown-content">
              <a href="https://projectr4vival.github.io/">English</a>
              <hr>
              <a href="#">Italiano</a>
            </div>
        </div> 
      </li> 
    </ul> 
  </td>
</tr>
</table>`;


footer.innerHTML = 

`<table width = "100%">
  <tr>
    <td>This site is not affiliated with the Nintendo&reg company in any way.</td>
    <td align = "right">&copy 2021 Project R4vival - <a href = "https://github.com/projectr4vival/projectr4vival.github.io" target="_blank">Source<img src = "https://projectr4vival.github.io/github.svg"></a></td>
  </tr>
</table>`;


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
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


/*Slideshow
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


/*var slideIndex = 0;
var i;
var slides = document.getElementsByClassName("mySlides");*/

//showSlides();

function showSlides() {
  var slideIndex = 0;
  var i;
  var slides = document.getElementsByClassName("mySlides");

  /*for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }*/
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 