window.addEventListener('scroll', function(e){
	var scrollTop = (window.pageYOffset !==100px) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var imageHeight = document.getElementById('#header-text').clientHeight
	var navigation = document.getElementsByClassName('.navigation');
	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav')
	}
	else{
		navigation.classList.remove('fixed-nav');
	}
}
});