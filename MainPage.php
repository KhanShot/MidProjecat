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
					</div>
					
					<div class="mySlides fade">
						<img class="imags" src="images/slide2.jpg" style="width:100%">
					</div>

					<div class="mySlides fade">
						<img class="imags" src="images/slide3.jpg" style="width:100%">
					</div>

					<div class="mySlides fade">
						<img class="imags" src="images/slide4.jpg" style="width:100%">
					</div>

					<a class="prev" onclick="changeSlide(-1)">&#10094;</a>
					<a class="next" onclick="changeSlide(1)">&#10095;</a>
				</div> <!-- slideshowcontainer -->


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