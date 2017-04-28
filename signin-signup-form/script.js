const links = document.querySelectorAll('li > a');
const tabs = document.querySelectorAll('.signupBox__tabs > div');

links.forEach(function(link,index){
	link.addEventListener('click',toggleActive)
});

function toggleActive(){
	links.forEach(link=>removeClass(link, 'active'));
		tabs.forEach(tab=>removeClass(tab, 'active'));
	tabs[parseInt(this.dataset.id)].classList.add('active')
	this.classList.add('active');
}

function removeClass(element, classToRemove){
	element.classList.remove(classToRemove);
}