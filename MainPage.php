<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="script.js"></script>
	<title>Restaurants</title>
</head>
<body>
	<div id="main-block">
		<div id="block-header"> <?php include "header.html";?></div>
		<div id="block-content">
			<figure>
				
				<div class="slideshow-container">
				  <div class="mySlides fade">
				    	
				    	<img class="imags" src="images/slide1.jpg" style="width:100%">
				    	<div class="slidetext">We have the most<br>
				    							delicious foods
				    	</div>
				  </div>

				  <div class="mySlides fade">
				    	
				    	<img class="imags" src="images/slide2.jpg" style="width:100%">
				    	<div class="slidetext">and fascinating look</div>
				  </div>

				  <div class="mySlides fade">
				    	
				    	<img class="imags" src="images/slide3.jpg" style="width:100%">
				 	   <div class="slidetext">you can reserve<br>
				 	   							by number: 8777-677-0777
				 	   </div>
				  </div>

				  <div class="mySlides fade">
				    	
				    	<img class="imags" src="images/slide4.jpg" style="width:100%">
				 	   <div class="slidetext">we have the best atmosphere</div>
				  </div>

				 

				  	<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				  	<a class="next" onclick="plusSlides(1)">&#10095;</a>
				</div>
				<br>
				<div style="text-align:center">
				  	<span class="dot" onclick="currentSlide(1)"></span> 
				  	<span class="dot" onclick="currentSlide(2)"></span> 
				  	<span class="dot" onclick="currentSlide(3)"></span>
				  	<span class="dot" onclick="currentSlide(4)"></span> 
				</div>
			</figure>
		</div> <!-- block-content -->
		<div id="block-footer"><?php include "footer.html";?></div>
	</div>

</body>
</html>