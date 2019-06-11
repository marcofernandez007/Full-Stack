var myIndex = 0;
        carousel();
	
        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
        
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 2 seconds
}

// Slider Manual

var slideIndex = 1;
   showDivs(slideIndex);

   function plusDivs(n) {
     showDivs(slideIndex += n);
   }

   function showDivs(n) {
     var i;
     var x = document.getElementsByClassName("mySlides2");

     if (n > x.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = x.length }
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
     }
     x[slideIndex - 1].style.display = "block";
   }

   // Slider 2

   var slideIndex2 = 1;
   showDivs2(slideIndex2);

   function plusdivs2(n) {
     showDivs2(slideIndex2 += n);
   }

   function showDivs2(n) {
     var i;
     var x = document.getElementsByClassName("mySlides3");

     if (n > x.length) { slideIndex2 = 1 }
     if (n < 1) { slideIndex2 = x.length }
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
     }
     x[slideIndex2 - 1].style.display = "block";
   }