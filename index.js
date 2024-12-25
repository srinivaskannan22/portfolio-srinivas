const a = document.getElementsByClassName("about");
const b = document.getElementsByClassName("experience");
const c = document.getElementsByClassName("contact");

// Set all sections to hidden initially
if (a[0]) a[0].style.display = "block";
if (b[0]) b[0].style.display = "none";
if (c[0]) c[0].style.display = "none";

// Function to show "About" and hide others
function about() {
    if (b[0]) b[0].style.display = "none"; // Hide "experience"
    if (c[0]) c[0].style.display = "none"; // Hide "contact"
    if (a[0]) a[0].style.display = "block"; // Show "about"
}
function experience() {
    if (b[0]) b[0].style.display = "block"; // Hide "experience"
    if (c[0]) c[0].style.display = "none"; // Hide "contact"
    if (a[0]) a[0].style.display = "none"; // Show "about"
}
function contact() {
    if (b[0]) b[0].style.display = "none"; // Hide "experience"
    if (c[0]) c[0].style.display = "block"; // Hide "contact"
    if (a[0]) a[0].style.display = "none"; // Show "about"
}
