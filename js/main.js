let mybutton = document.getElementById("back-to-top");
let miniHeader = document.getElementById("mini-header");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
      miniHeader.style.display = "inline";
    } else {
      mybutton.style.display = "none";
      miniHeader.style.display = "none";
    }
  }


  