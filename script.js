const priceTotal = document.querySelector("#price");
const peopleCount = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const errorMsg = document.querySelector(".error");
const costMsg = document.querySelector(".cost-info");
const costSpan = document.querySelector(".cost");

const calculateTip = () => {
	if (priceTotal.value != 0 && peopleCount.value != 0 && tip.value != 0) {
		errorMsg.textContent = "";

		const value =
			(parseFloat(priceTotal.value) +
				parseFloat(priceTotal.value * tip.value)) /
			peopleCount.value;

		costMsg.style.display = "block";
		costSpan.textContent = value.toFixed(2);
	} else {
		costMsg.style.display = "none";
		errorMsg.textContent = "Uzupelnij pola";
	}
};

countBtn.addEventListener("click", calculateTip);
