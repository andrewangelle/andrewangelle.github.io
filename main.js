window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset;
	var imageHeight = document.getElementById('header').clientHeight;
	var navigation = document.getElementById('navigation');

	if(scrollTop > imageHeight){
		navigation.classList.add('fixed-nav');

//Attempting to clone HTML element 'header-text', insert it, and add 'position:fixed'to its CSS  once user has scrolled past the original header element
		function cloneLogo() {
    var headerText = document.getElementsByTagName('headertext')[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);}
		
		headerText.classList.add('fixed-logo');
	}

	else{
		navigation.classList.remove('fixed-nav');

//Attempting to remove the cloned 'header-text' element and its CSS if user has not scrolled past original header element.
		document.getElementById('headertext').appendChild(removeClone);
		headerText.classList.remove('fixed-logo');
	}
});