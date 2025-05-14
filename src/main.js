import { logo } from "./logo.js";

// load the logo

document.querySelector("logo").innerHTML = logo;

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

// tilt the backgrounds
