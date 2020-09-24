
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
    validateEmail();

    document.getElementById('popup1').style.visibility = 'hidden';
    document.getElementById('popup2').style.visibility = 'visible';
}

//make popup2 close button Hide popup2
document.querySelector('#popup2 .popup .close').addEventListener('click', function () {
    document.getElementById('popup2').style.visibility = 'hidden';
})

//validate email
function validateEmail() {
    var _email = getEmail();

    if (checkSpace(_email) === true) {
        return false;
    }

    // check for @
    var atSymbol = _email.indexOf('@');
    if (atSymbol < 1) {
        return false;
    }

    // check if there is a dot located less than 2 symbols away from the @ sign
    var dot = _email.indexOf('.');
    if (dot <= atSymbol + 2) {
        return false;
    }

    // check that the dot is not at the end
    if (dot === _email.length - 1) {
        return false;
    }
    return true;
}

function getEmail() {
    return document.getElementById('subscribe_pemail').value
}