window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementById('navigation');
	var headerText = document.getElementById('header-text')

	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav');
		headerText.classList.add('fixed-logo');
	}

	else{
		navigation.classList.remove('fixed-nav');
		headerText.classList.remove('fixed-logo');
	}
});