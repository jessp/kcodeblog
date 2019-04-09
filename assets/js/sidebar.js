document.addEventListener("DOMContentLoaded", function(event) { 
	let sideMenu = document.querySelectorAll("#menu .side_menu")[0];
	let sections = sideMenu.querySelectorAll("section");
	sections.forEach(function(d){
		d.querySelectorAll("h3")[0].onclick = function(e){
			let el = d;
			if (el.classList) {
			  el.classList.toggle("open");
			} else {
			  var classes = el.className.split(' ');
			  var existingIndex = classes.indexOf("open");

			  if (existingIndex >= 0)
			    classes.splice(existingIndex, 1);
			  else
			    classes.push("open");

			  el.open = classes.join(' ');
			}
		};
	})
});