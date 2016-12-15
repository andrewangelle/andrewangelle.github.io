window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementbyId('navigation');

	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav')
	}
	else{
		navigation.classList.remove('fixed-nav');
	}
});