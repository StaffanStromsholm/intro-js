
//On mouse leave, make popup1 visible
window.document.addEventListener('mouseleave', function () {
    document.getElementById('popup1').style.visibility = 'visible';
})

//make popup1 close button Hide popup1
document.querySelector('#popup1 .popup .close').addEventListener('click', function () {
    document.getElementById('popup1').style.visibility = 'hidden';
})

//declare email_subscribepopup function
function email_subscribepopup(e) {

    console.log(document.getElementById('subscribe_pemail').value);

    document.getElementById('popup1').style.visibility = 'hidden';
    document.getElementById('popup2').style.visibility = 'visible';
}

//make popup2 close button Hide popup2
document.querySelector('#popup2 .popup .close').addEventListener('click', function () {
    document.getElementById('popup2').style.visibility = 'hidden';
})