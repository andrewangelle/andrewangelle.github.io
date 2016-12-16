window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementById('navigation');

	var headerText = document.getElementById('headertext');
	var clone = element.cloneNode(true);
	var removeClone = element.cloneNode(false);
	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav');
		document.getElementById('headertext').appendChild(clone);
		
//Attempting to re-insert the cloned 'header-text' element and add 'position:fixed'  once user has scrolled past the original header element

		/*fixedLogo.cloneNode(true);
		headerText.classList.add('fixed-logo');*/
	}

	else{
		navigation.classList.remove('fixed-nav');
		document.getElementById('headertext').appendChild(removeClone);
		/*fixedLogo.cloneNode(false);
		headerText.classList.remove('fixed-logo');*/
	}
});