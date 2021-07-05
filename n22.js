const sliders = document.querySelectorAll(".slider-ui");

sliders.forEach(slider => {
	let input = slider.querySelector("input[type=range]");
	let min = input.getAttribute("min");
	let max = input.getAttribute("max");
	let valueElem = slider.querySelector(".value");

	slider.querySelector(".min").innerText = min;
	slider.querySelector(".max").innerText = max;

	function setValueElem() {
		valueElem.innerText = input.value;
		let percent = (input.value - min) / (max - min) * 100;
		valueElem.style.left = percent + "%";
	}
	setValueElem();

	input.addEventListener("input", setValueElem);
	input.addEventListener("mousedown", () => {
		valueElem.classList.add("up");
	});
	input.addEventListener("mouseup", () => {
		valueElem.classList.remove("up");
	});
});


 window.watsonAssistantChatOptions = {
      integrationID: "abb0b25d-8579-4230-ab7f-098747bcd07a", // The ID of this integration.
      region: "eu-de", // The region your integration is hosted in.
      serviceInstanceID: "2575df71-f8c9-44d1-bca6-25290ac38aff", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
