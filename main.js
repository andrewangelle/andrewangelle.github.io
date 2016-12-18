/*
//Make header's background image into a slideshow
var imageIndex=0
slideHeaderImage();

function slideHeaderImages() {
	var i;
	var headerElement = document.getElementbyId('header')
	var imageArray = ['http://imgur.com/QOdmAyI' , 
					'http://imgur.com/iabDcv5' , 
					'http://imgur.com/aCipsVV' , 
					'http://imgur.com/VqAIgjU' , 
					'http://imgur.com/OfFYFGM' , 
					'http://imgur.com/EyNzrEz'];
	for (i = 0; i < imageArray.length; i++) {			
		headerElement.style.backgroundImage = 'none';
	}
	imageIndex++;

	if (imageIndex> imageArray.length) {imageIndex = 1;
		headerElement.style.backgroundImage = imageArray[0] // or should it be this? --> 'url' + '(' + imageArray[0] + ')';
		setInterval(slideHeaderImages, 2000);			
	}
	else {
		headerElement.style.backgroundImage = 'http://i.imgur.com/iabDcv5.jpg';
	}
;}
*/

window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementById('navigation');
	var headerText = document.getElementById('header-text');

	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav');
		headerText.classList.add('fixed-logo');
	}
	else{
		navigation.classList.remove('fixed-nav');
		headerText.classList.remove('fixed-logo');
	}
});


/*
//If user has scrolled past header and brower width is greater than 800px: Fix navigation & logo to top
//else if user has scrolled past header and browser width is 800px or less: Fix only navigation
//else remove both fixed nav and fixed logo
window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementById('navigation');
	var headerText = document.getElementById('header-text');
	var browserWidth = window.innerWidth;
	var threshold = '800';

	if(scrollTop > imageHeight && browserWidth >= threshold){
		navigation.classList.add('fixed-nav');
		headerText.classList.add('fixed-logo');
	}

	else if(scrollTop > imageHeight && browserWidth <= threshold){
		navigation.classList.add('fixed-nav')
	}

	else{
		navigation.classList.remove('fixed-nav');
		headerText.classList.remove('fixed-logo');
	}
});
*/