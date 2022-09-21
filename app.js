const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btn = document.querySelector(".btn");

const lookLeft = function () {
  right.classList.remove("look-right");
  left.classList.remove("look-right");

  left.classList.add("look-left");
  right.classList.add("look-left");
};

const lookRight = function () {
  left.classList.remove("look-left");
  right.classList.remove("look-left");

  right.classList.add("look-right");
  left.classList.add("look-right");
};

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

console.log("to start, click buttom 'Start Listerning'. ");

recognition.onstart = function () {
  console.log("Listerning. ");
};

recognition.onresult = function (event) {
  const order = event.results[0][0].transcript;
  console.log(order);

  if (order.includes("l")) {
    lookLeft();
  } else if (order.includes("r")) {
    lookRight();
  } else {
    alert("You should say 'left' or 'right' .");
  }
};

btn.addEventListener("click", function () {
  recognition.start();
});
