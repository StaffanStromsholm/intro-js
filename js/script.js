//======== LEVEL 1 ===========

console.log("Hello World");

document.querySelector("#slogan").innerHTML = "WE HATE OUR CUSTOMERS";

document.querySelector("#all").style.backgroundColor = "#c7c3c3";

document.body.style.fontFamily = "Impact";

//======== LEVEL 2 ===========

document.querySelectorAll("#hot .item").forEach(function (item) {
    item.style.margin = "10px 20px";
    item.style.boxShadow = "2px 2px 10px";
});
console.log("margin, boxShadow");

var list = document.querySelector("#navigation ul");
var newsLetter = document.createElement("li");
newsLetter.setAttribute("class", "nav-item menu-large popup-trigger");
newsLetter.id = "myBtn";
newsLetter.insertAdjacentHTML("beforeend", `<a class="nav-link" 'data-popup-trigger' = 'one'>Newsletter</a>`);

list.appendChild(newsLetter);

var lastLi = document.querySelectorAll("#navigation ul li");
console.log(lastLi[lastLi.length - 1]);
lastLi[lastLi.length - 1].style.cursor = "pointer";

//========== LEVEL 3 ===========

document.body.insertAdjacentHTML('beforeend', `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="close">&times;</span>
    <p>So you want a newsletter, ey?</p>
  </div>

</div>`)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

//Set cursor: pointer
span.style.cursor = "pointer";

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

//also open when scrolled to bottom

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



