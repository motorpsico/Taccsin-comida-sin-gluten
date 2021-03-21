function changeColorNavBarByScrolling(e) {
	if(window.pageYOffset != 0) {
		navBar.style.backgroundColor = "#40443e";
		navBar.classList.remove("bg-transparent");
	}
	else
		navBar.classList.add("bg-transparent");
		
}

function changeColorNavBarByClick(e) {
	if(window.pageYOffset == 0)
		if(navBar.classList.contains("bg-transparent")) {
			navBar.classList.remove("bg-transparent");
			navBar.style.backgroundColor = "#40443e";
		} else {
			navBar.classList.add("bg-transparent");
		}
}


const navBar = document.getElementById("navbar");
const navBarButton = document.querySelector(".navbar-toggler");

window.addEventListener("scroll", changeColorNavBarByScrolling);
navBarButton.addEventListener("click", changeColorNavBarByClick)
