let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

const joinBtn = document.getElementById("join-btn");
joinBtn.addEventListener("click", function () {
  alert("Thank you for joining us! Get ready to hit the road.");
});
joinBtn.addEventListener("mouseover", function () {
  this.style.background = "#af4916";
});

joinBtn.addEventListener("mouseout", function () {
  this.style.background = "";
});

const appleBtn = document.querySelector(".android");
appleBtn.addEventListener("click", function () {
  alert("Available on Playstore soon!");
});
const androidBtn = document.querySelector(".ios");
androidBtn.addEventListener("click", function () {
  alert("Available on Apple store soon!");
});

window.alert = function (message, timeout = null) {
  const alert = document.createElement("div");
  const alertButton = document.createElement("button");
  alertButton.innerHTML = "OK";
  alert.classList.add("alert");
  alert.setAttribute(
    "style",
    `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px #00000044;
    z-index: 99;
    color: #000;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    `
  );
  alertButton.setAttribute(
    "style",
    `
   background: #228B22;
   width: auto;
   padding: 1rem;
   border-radius: 10px;
   color: #fff;
    `
  );
  alert.innerHTML = `<span> ${message} </span>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener("click", (e) => {
    alert.remove();
  });
  if (timeout != null) {
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
  document.body.appendChild(alert);
};

const sliderImg = document.querySelector(".slider-img");
sliderImg.addEventListener("click", function () {
  sliderImg.toggle("active");
});

const menuButton = doscument.querySelector(".menu-btn");
const menu = document.querySelector("#navigate");
menuButton.addEventListener("click", function() {
  menu.classList.toggle("show");
})

