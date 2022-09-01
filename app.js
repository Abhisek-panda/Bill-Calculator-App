const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");

const button = document.querySelector("#btn");
const messagePara = document.querySelector("#message-para");

const noOfNotes = document.querySelectorAll("#no-Of-Notes");

const money = [2000, 500, 100, 20, 10, 5, 1];


button.addEventListener("click", function getValues() {
    messagePara.style.display = "none";
    if (billAmount.value > 0) {

        if (cashAmount.value >= billAmount.value) {

            const amountToBeReturned = Number(cashAmount.value) - Number(billAmount.value);
            moneyReturning(amountToBeReturned);
        } else {
            errorPara("Ready to do plates!")
        }
    } else {
        errorPara("Invalid Amount")
    }
}
);

function moneyReturning(amountToBeReturned) {
    for (let i = 0; i < money.length; i++) {
        const newMoney = Math.trunc(amountToBeReturned / money[i]);

        amountToBeReturned = amountToBeReturned % money[i];

        noOfNotes[i].innerText = newMoney;

    }
}


function errorPara(message) {
    messagePara.style.display = "block";
    messagePara.innerText = message;
};