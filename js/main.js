var elForm = document.querySelector("form");
var elInput = document.querySelector("input");
var elSelect = document.querySelector("select");
var elResult = document.querySelector("button");
var elResult = document.querySelector(".result");


elForm.addEventListener("submit", function (think) {

    think.preventDefault();

    var elInputValue = elInput.value;
    var elSelectValue = elSelect.value;
    var elAll = elInputValue * elSelectValue;

    elResult.textContent = (` ${elAll}`);
    if (elAll < 0) {
        elResult.textContent = ("Please, enter a number greater than 0 !");
    }
})