// const container = document.querySelector(".container");
// const btn = document.querySelector(".toggle_btn");
// const innerCircle = document.querySelector(".inner_circle");
// const toogleBtn = document.querySelector(".toggle_btn");
// let text = document.querySelector(".mode_status");

// btn.addEventListener("click", ()=>{
//     innerCircle.classList.toggle("move");
//     container.classList.toggle("change");
//     text.classList.toggle('dark');
//     toogleBtn.classList.toggle("color");
//     if (text.classList.contains('dark')) {
//         text.innerHTML = "Dark Mode";
//     }else{
//         text.innerHTML = "Light Mode";
//     }
// });
var modal = document.getElementById("myFooterModal");

// Get the button that opens the modal
var btn = document.getElementById("openFooterModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button-member")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .querySelectorAll(".member-links .social-links")
  .forEach(function (link) {
    link.addEventListener("click", function () {
      var svg = this.querySelector("svg");
      svg.style.fill = "white";
    });

    
    link.addEventListener("click", function (event) {
      var link = this.querySelector("a").getAttribute("href");
      window.location.href = link;
    });
  });

    