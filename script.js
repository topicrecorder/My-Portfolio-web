let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sendToWhatsApp() {
    let number = "+94767006719";
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value; // Corrected ID

    let url = "https://wa.me/" + number + "?text=" 
        + "Name: " + encodeURIComponent(name) + "%0a" 
        + "Email: " + encodeURIComponent(email) + "%0a" 
        + "Mobile: " + encodeURIComponent(mobile) + "%0a" 
        + "Subject: " + encodeURIComponent(subject) + "%0a" 
        + "Message: " + encodeURIComponent(message);

    window.open(url, '_blank').focus();
}
