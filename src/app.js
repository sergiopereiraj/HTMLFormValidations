/*const { check } = require("prettier");*/

/* eslint-disable
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/
window.onload = function() {
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", e => {
    e.preventDefault();
    /*const request = new XMLHttpRequest();
    request.open("post", "login.pht");
    request.onload = function() {
      console.log(request.responseText);
    };
    request.send(new FormData(myForm));*/
    let form = e.target;
    let {
      card,
      cvc,
      amount,
      firstname,
      lastname,
      city,
      postalcode,
      inlineFormSelectPref,
      message
    } = form;
    let regexCard = /^[0-9]{13}$/;
    let regexCvc = /^[0-9]{4}$/;
    let regexAmount = /^[0-9]+$/;
    let regexFirstname = /^[a-zA-Z]+$/;
    let regexLastname = /^[a-zA-Z]+$/;
    let regexCity = /^[a-zA-Z]+$/;
    let regexPostalcode = /^[0-9]{7}$/;
    let regexMessage = /^[a-zA-Z0-9.!#-_]+$/;
    let regexInlineFormSelectPref = /[1.value, 2.value, 3.value]$/;

    if (regexCard.test(card.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("card").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#card").classList.remove("alert-danger");
      document.getElementById("card").classList.add("is-valid");
    }
    if (regexCvc.test(cvc.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("cvc").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#cvc").classList.remove("alert-danger");
      document.getElementById("cvc").classList.add("is-valid");
    }
    if (regexAmount.test(amount.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("amount").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#amount").classList.remove("alert-danger");
      document.getElementById("amount").classList.add("is-valid");
    }
    if (regexFirstname.test(firstname.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("firstname").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#firstname").classList.remove("alert-danger");
      document.getElementById("firstname").classList.add("is-valid");
    }
    if (regexLastname.test(lastname.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("lastname").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#lastname").classList.remove("alert-danger");
      document.getElementById("lastname").classList.add("is-valid");
    }
    if (regexCity.test(city.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("city").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#city").classList.remove("alert-danger");
      document.getElementById("city").classList.add("is-valid");
    }
    if (regexPostalcode.test(postalcode.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("postalcode").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#postalcode").classList.remove("alert-danger");
      document.getElementById("postalcode").classList.add("is-valid");
    }
    if (regexMessage.test(message.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document.getElementById("message").classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document.querySelector("#message").classList.remove("alert-danger");
      document.getElementById("message").classList.add("is-valid");
    }
    if (regexInlineFormSelectPref.test(inlineFormSelectPref.value) !== true) {
      document.querySelector("#alert").classList.remove("d-none");
      document
        .getElementById("inlineFormSelectPref")
        .classList.add("alert-danger");
    } else {
      document.querySelector("#alert").classList.add("d-none");
      document
        .querySelector("#inlineFormSelectPref")
        .classList.remove("alert-danger");
      document.getElementById("inlineFormSelectPref").classList.add("is-valid");
    }
  });
};
