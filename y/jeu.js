let btnoverflow = document.querySelector(".btn-overflow");
let overflo = document.querySelector(".overflo");
btnoverflow.addEventListener("click", () => {
  overflo.classList.toggle("onoverflow");
  console.log("hi");
  if (overflo.classList.value === "overflo") {
    btnoverflow.innerText = "overflow hidden";
  }
  if (overflo.classList.value === "overflo onoverflow") {
    btnoverflow.innerText = "overflow visible";
  }
});

//opacity
let btnopacity = document.querySelector(".btn-opacity");
let opacityimg = document.querySelector(".sinjab");
btnopacity.addEventListener("click", () => {
  opacityimg.classList.toggle("onopacity");
  console.log("hi");
  if (opacityimg.classList.value === "sinjab") {
    btnopacity.innerText = "opacity 1";
  }
  if (opacityimg.classList.value === "sinjab onopacity") {
    btnopacity.innerText = "opacity 0.5";
  }
});

//flexbox
let btnflexs = document.querySelectorAll(".btn-flex");
let sinjabx2 = document.querySelector(".display-flex-sinjab");

btnflexs.forEach((btnflex) => {
  btnflex.addEventListener("click", () => {
    if (btnflex.classList.value === "btn-flex ttcenter") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("ttcenter");
    }
    if (btnflex.classList.value === "btn-flex alignstart") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("alignstart");
    }
    if (btnflex.classList.value === "btn-flex alignend") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("alignend");
    }
    if (btnflex.classList.value === "btn-flex spacebet") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("spacebet");
    }
    if (btnflex.classList.value === "btn-flex spacear") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("spacear");
    }
    if (btnflex.classList.value === "btn-flex spaceven") {
      sinjabx2.className = "display-flex-sinjab";
      sinjabx2.classList.add("spaceven");
    }
  });
});

let img1 = document.querySelector(".w1");
let img2 = document.querySelector(".w2");
let btn1w = document.querySelector(".btn1w");
let btn2w = document.querySelector(".btn2w");
let exw = document.querySelector(".wh");
let btnl = document.querySelector(".btnl");
let exl = document.querySelector(".ex ul");
let exz = document.querySelector(".ex .z1");
let btnz = document.querySelector(".btnz");
let img1z = document.querySelector(".iz1");
let img2z = document.querySelector(".iz2");
let btnlk = document.querySelector(".btnlk");
let exlk = document.querySelector(".ex a");
btn1w.addEventListener("click", () => {
  img1.classList.remove("active");
  img2.classList.add("active");
  exw.classList.remove("aex");
});

btn2w.addEventListener("click", () => {
  img1.classList.add("active");
  img2.classList.remove("active");
  exw.classList.add("aex");
});
btnl.addEventListener("click", () => {
  exl.classList.toggle("ul");
  exl.classList.toggle("off-css");
  console.log("hi");
  if (exl.classList.value === "ul") {
    btnl.innerText = "css off";
  }
  if (exl.classList.value === "off-css") {
    btnl.innerText = "css on";
  }
});
btnz.addEventListener("click", () => {
  exz.classList.toggle("az");
  img1z.classList.toggle("active");
  img2z.classList.toggle("active");
});
btnlk.addEventListener("click", () => {
  exlk.classList.toggle("a");
});

//for color
function changecolor() {
  var img = document.getElementById("color");
  img.src = "/assets/colorblue.png";
}
function changecolors() {
  var img = document.getElementById("color");
  img.src = "/assets/colorgreen.png";
}
//for background
function changebackground() {
  var img = document.getElementById("background");
  img.src = "/assets/blue.png";
}
function changebackgrounds() {
  var img = document.getElementById("background");
  img.src = "/assets/green.png";
}
//for padding
function change() {
  var img = document.getElementById("image");
  img.src = "/assets/withoutpadd.png ";
}
function changing() {
  var img = document.getElementById("image");
  img.src = "/assets/withpadd.png";
}
//for margin
function changem() {
  var img = document.getElementById("images");
  img.src = "/assets/withmargin.png ";
}
function changingm() {
  var img = document.getElementById("images");
  img.src = "/assets/withoutmargin.png";
}
//for border
function changeborder() {
  var img = document.getElementById("border");
  img.src = "/assets/withborder.png";
}
function changingborder() {
  var img = document.getElementById("border");
  img.src = "/assets/withoutborder.png";
}

//nav effect
const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");
const h2 = document.querySelector("nav .logo a");
document.addEventListener("scroll", function () {
  let current = "";
  if (scrollY >= 70 && window.innerWidth > 576) {
    nav.classList.add("active-nav");
    ul.classList.add("active");
    h2.classList.add("active");
  } else {
    nav.classList.remove("active-nav");
    ul.classList.remove("active");
    h2.classList.remove("active");
  }
});
