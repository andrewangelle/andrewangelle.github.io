function fixNavAfterUserScroll(){
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
}

function toggleNavOnClick(){
	document.getElementById('nav-icon').addEventListener('click',function(){
		var navLinks = document.getElementById('nav-links');

		navLinks.classList.toggle('nav-open');
	});
}

function hideNavOnLinkClick(){
	var navLinksArray = Array.from(document.querySelectorAll('.links'));
		
	navLinksArray.forEach(function(element){
		element.addEventListener('click',function(){
			var navLinks = document.getElementById('nav-links');
			navLinks.classList.remove('nav-open');
		});
	});
}


function setupImageCarousel(){
	var header = document.querySelector('.header');
	var next = header.querySelector('#next');
	var prev = header.querySelector('#prev');
	var items = header.querySelectorAll('.images li');
	var counter = 0;
	var amount = items.length;
	var current = items[0];
	
	function navigate(direction) {
	current.classList.remove('current');
	counter = counter + direction;
    
    if (counter < 0) {
      counter = amount - 1;
    }
    else if (items[counter] === undefined) {
      counter = 0;
    }
	
		current = items[counter];
		current.classList.add('current');
	}

  function navigateToPrevSlide() {
    navigate(-1);
  }

  function navigateToNextSlide() {
    navigate(1);
  }

	prev.addEventListener('click', function(ev) {
	  navigateToPrevSlide();
	});

	next.addEventListener('click', function(ev) {
	  navigateToNextSlide();
	});

	navigate(0);
};


toggleNavOnClick();
hideNavOnLinkClick();
fixNavAfterUserScroll();
setupImageCarousel();





















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
