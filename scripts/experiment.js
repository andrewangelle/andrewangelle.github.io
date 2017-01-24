function toggleNavOnClick(){
	document.getElementById('nav-icon').addEventListener('click', function(){
		var navLinks = document.getElementById('nav-links');

		navLinks.classList.toggle('nav-open');

		window.addEventListener('scroll', function(){
				var scrollTop = window.pageYOffset;
				var headerHeight = document.getElementById('header').clientHeight;
			

				if(scrollTop < headerHeight){
					navLinks.classList.remove('nav-open');
					navLinks.classList.toggle('nav-open-up');
				}
		});
	});
}

