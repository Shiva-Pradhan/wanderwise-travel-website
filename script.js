let selectedPrice = 0;

document.addEventListener("DOMContentLoaded", function () {

let today = new Date().toISOString().split("T")[0];
document.getElementById("travelDate").setAttribute("min", today);

let guestInput = document.getElementById("guests");
let destSelect = document.getElementById("destination");

if (destSelect) {
destSelect.addEventListener("change", function () {
let selectedOption = this.options[this.selectedIndex];
selectedPrice = parseInt(selectedOption.getAttribute("data-price")) || 0;

document.getElementById("priceDisplay").innerText = "Total Price: ₹0";
});
}

if (guestInput) {
guestInput.addEventListener("input", function () {

let guests = parseInt(this.value);

if (!guests || guests <= 0 || selectedPrice === 0) {
document.getElementById("priceDisplay").innerText = "Total Price: ₹0";
return;
}

let total = selectedPrice * guests;
document.getElementById("priceDisplay").innerText = "Total Price: ₹" + total;

});
}

});

function goToContact(place, price) {
document.getElementById("destination").value = place;
selectedPrice = parseInt(price) || 0;

document.getElementById("priceDisplay").innerText = "Total Price: ₹0";

location.href = "#contact";
}

function submitForm() {

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let destination = document.getElementById("destination").value.trim();
let guests = parseInt(document.getElementById("guests").value);

if (name === "") {
alert("Please enter your name");
return false;
}

if (email === "" || !email.includes("@")) {
alert("Please enter a valid email");
return false;
}

if (destination === "") {
alert("Please select a destination");
return false;
}

if (!guests || guests <= 0) {
alert("Please enter valid number of guests");
return false;
}

if (selectedPrice === 0) {
alert("Please select destination/package properly");
return false;
}

let total = selectedPrice * guests;
let bookingId = "WW" + Math.floor(Math.random() * 100000);
let date = new Date().toLocaleString();

alert(
"Booking Confirmed!\n\n" +
"Name: " + name + "\n" +
"Destination: " + destination + "\n" +
"Guests: " + guests + "\n" +
"Total Price: ₹" + total + "\n" +
"Booking ID: " + bookingId + "\n" +
"Date: " + date
);

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
document.getElementById("destination").value = "";
document.getElementById("travelDate").value = "";
document.getElementById("guests").value = "";
document.getElementById("priceDisplay").innerText = "Total Price: ₹0";

selectedPrice = 0;

location.href = "#home";

return false;
}

function contactSubmit() {

let name = document.getElementById("cname").value.trim();
let email = document.getElementById("cemail").value.trim();
let message = document.getElementById("cmessage").value.trim();

if (name === "") {
alert("Please enter your name");
return false;
}

if (email === "" || !email.includes("@")) {
alert("Please enter a valid email");
return false;
}

if (message === "") {
alert("Please enter your message");
return false;
}

alert("Message sent successfully!");

document.getElementById("cname").value = "";
document.getElementById("cemail").value = "";
document.getElementById("cmessage").value = "";

location.href = "#home";

return false;
}