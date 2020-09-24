window.document.addEventListener('mouseleave', function () {
    document.getElementById('popup1').style.visibility = 'visible';
})

document.querySelector('#popup1 .popup .close').addEventListener('click', function () {
    document.getElementById('popup1').style.visibility = 'hidden';
})

document.querySelector('#frm_subscribe a').onclick = email_subscribepopup

function email_subscribepopup(e) {
    console.log(document.getElementById('subscribe_pemail').value);

    document.getElementById('popup1').style.visibility = 'hidden';
    document.getElementById('popup2').style.visibility = 'visible';
}

document.querySelector('#popup2 .popup .close').addEventListener('click', function () {
    document.getElementById('popup2').style.visibility = 'hidden';
})