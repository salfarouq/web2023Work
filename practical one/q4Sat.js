const img = document.querySelectorAll('img');
 img.addEventListener("mouseover", function(){
   img.style.width="200px";
   img.style.height="200px";
 });

 img.addEventListener("mouseout",function(){
    img.style.height="500px"
    img.style.widht="623px";
 });

  // Display the digital clock
const clock = document.querySelector("clock");
 setInterval(function() {
   var now = new Date();
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
   if (hours < 10) {hours = "0" + hours;}
   if (minutes < 10) {minutes = "0" + minutes;}
   if (seconds < 10) {seconds = "0" + seconds;}
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
 }, 1000);

      
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";
 }

 

  