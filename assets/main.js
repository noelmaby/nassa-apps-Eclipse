//import "./style.css";
//try {
let pathLength = 0;
let path = null;
let width = null;
function do_work() {
  try {
    var width = window.screen.width;
    path =
      width > 767
        ? document.querySelectorAll(".activities-path")[0]
        : document.querySelectorAll(".activities-path")[1];

    console.log(path);
    pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
  } catch (err) {
    console.log(err);
  }
}
window.onload = () => {
  do_work();
  // alert("hi")
};

document.getElementById("menu-btn").onclick = function () {
  document.getElementsByClassName("sidemenu")[0].style.left = "0px";
};
document.getElementById("menu-btn-close").onclick = function () {
  document.getElementsByClassName("sidemenu")[0].style.left = "-100%";
};
window.onscroll = (e) => {
  if (window.scrollY > screen.height / 2) {
    document.getElementsByClassName("topbar")[0].classList.add("scrolled");
    document.getElementsByClassName("topbar")[1].classList.add("scrolled");
  } else {
    document.getElementsByClassName("topbar")[0].classList.remove("scrolled");
    document.getElementsByClassName("topbar")[1].classList.remove("scrolled");
  }
  try {
    if (
      document.querySelector(".activities").getBoundingClientRect().top <=
      document.querySelector(".activities").getBoundingClientRect().height / 5
    ) {
      var scrollPercentage =
        (-1 *
          document.querySelector(".activities").getBoundingClientRect().top +
          document.querySelector(".activities").getBoundingClientRect().height /
            5) /
        document.querySelector(".activities").getBoundingClientRect().height;
      var ll = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - ll;
      var mScroll =
        ((document.querySelector(".activities .content").getBoundingClientRect()
          .top *
          -1) /
          document.querySelector(".activities .content").getBoundingClientRect()
            .height) *
        100;

      if (mScroll >= 50) {
        (width > 767
          ? document.querySelectorAll(".activity4")[0]
          : document.querySelectorAll(".activity4")[1]
        ).style.opacity = 1;
        (width > 767
          ? document.querySelectorAll(".circle4")[0]
          : document.querySelectorAll(".circle4")[1]
        ).style.opacity = 1;
      } else {
        (width > 767
          ? document.querySelectorAll(".activity4")[0]
          : document.querySelectorAll(".activity4")[1]
        ).style.opacity = 0;
        (width > 767
          ? document.querySelectorAll(".circle4")[0]
          : document.querySelectorAll(".circle4")[1]
        ).style.opacity = 0;
      }
      if (mScroll >= 30) {
        (width > 767
          ? document.querySelectorAll(".activity3")[0]
          : document.querySelectorAll(".activity3")[1]
        ).style.opacity = 1;
        (width > 767
          ? document.querySelectorAll(".circle3")[0]
          : document.querySelectorAll(".circle3")[1]
        ).style.opacity = 1;
      } else {
        (width > 767
          ? document.querySelectorAll(".activity3")[0]
          : document.querySelectorAll(".activity3")[1]
        ).style.opacity = 0;
        (width > 767
          ? document.querySelectorAll(".circle3")[0]
          : document.querySelectorAll(".circle3")[1]
        ).style.opacity = 0;
      }
      if (mScroll >= 0) {
        (width > 767
          ? document.querySelectorAll(".activity2")[0]
          : document.querySelectorAll(".activity2")[1]
        ).style.opacity = 1;
        (width > 767
          ? document.querySelectorAll(".circle2")[0]
          : document.querySelectorAll(".circle2")[1]
        ).style.opacity = 1;
      } else {
        (width > 767
          ? document.querySelectorAll(".activity2")[0]
          : document.querySelectorAll(".activity2")[1]
        ).style.opacity = 0;
        (width > 767
          ? document.querySelectorAll(".circle2")[0]
          : document.querySelectorAll(".circle2")[1]
        ).style.opacity = 0;
      }
      if (mScroll >= -20) {
        (width > 767
          ? document.querySelectorAll(".activity1")[0]
          : document.querySelectorAll(".activity1")[1]
        ).style.opacity = 1;
        (width > 767
          ? document.querySelectorAll(".circle1")[0]
          : document.querySelectorAll(".circle1")[1]
        ).style.opacity = 1;
      } else {
        (width > 767
          ? document.querySelectorAll(".activity1")[0]
          : document.querySelectorAll(".activity1")[1]
        ).style.opacity = 0;
        (width > 767
          ? document.querySelectorAll(".circle1")[0]
          : document.querySelectorAll(".circle1")[1]
        ).style.opacity = 0;
      }
    }
  } catch (e) {
    console.log(e);
  }
};
