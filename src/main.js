import { logoSVG } from "./logo.js";
import { menuSVG } from "./menu.js";

// load the svgs

for (const l of document.querySelectorAll("logo")) {
	l.innerHTML = logoSVG;
}

document.querySelector("header>button").innerHTML = menuSVG;

// spin the earth

/**
 * @param {String} src
 * */
function getNumFromSrc(src) {
	const strNum = src.split("images/earth/")[1].split(".png")[0];
	const num = Number.parseInt(strNum);
	return num;
}
/** @type {HTMLImageElement} */
const earthImg = document.querySelector("img.earth");
setInterval(() => {
	earthImg.src = `images/earth/0${(getNumFromSrc(earthImg.src) % 7) + 1}.png`;
}, 500);

// mobile menu functionality

/** @type {HTMLButtonElement} */
const openMenuBtn = document.querySelector("header>button");
/** @type {HTMLUListElement} */
const mobileMenu = document.querySelector("header>ul.mobile");
/**
 * @param {MouseEvent} e
 * */
function handleOutsideClick(e) {
	/** @type {HTMLElement} */
	const target = e.target;
	if (!target.isSameNode(mobileMenu)) {
		mobileMenu.classList.add("hide-to-right");
		document.removeEventListener("click", handleOutsideClick);
	}
}
openMenuBtn.onclick = () => {
	mobileMenu.classList.toggle("hide-to-right");
	setTimeout(() => document.addEventListener("click", handleOutsideClick), 10);
};
