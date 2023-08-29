window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").className = "w-12";
    document.getElementById("navbar").style.filter =
      "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "black";
  } else {
    document.getElementById("logo").className = "w-14";
    document.getElementById("navbar").style.filter = "drop-shadow(0 0 #0000)";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    // document.getElementById("navbar").style.backdropFilter = "blur(50px)";
    document.getElementById("navbar").style.color = "black";
  }
}
