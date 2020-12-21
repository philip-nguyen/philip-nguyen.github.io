// Get the modal
var modal = document.getElementById("email-modal");

// Get the button that opens the modal
var contactBtn = document.getElementById("contact-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close icon")[0];

// When the user clicks on the button, open the modal
contactBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  console.log(span);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}