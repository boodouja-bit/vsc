console.log("JavaScript is working!");
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");
btnMessage.addEventListener("click", function() {
    message.textContent = "Bravo,tu as cliaué sur le bouton!";
});