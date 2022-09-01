const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-given");
const button = document.querySelector("#btn");
const mistakePara = document.querySelector("#mistake-para");
const noOfNOtes = document.querySelectorAll("#notes-return")

const cashMoney = [2000, 500, 100, 20, 10, 5, 1];

function paragraphError(para){
    mistakePara.style.display = "block";
    mistakePara.innerText = para;
}



button.addEventListener("click", function getValue(){
    if(billAmount.value > 0){
        mistakePara.style.display = "none";
        if(cashAmount.value >= billAmount.value) {
            const money = cashAmount.value - Number(billAmount.value);
            calculateChange(money);
        }else {
            paragraphError("You have choose to clean the plates.")
        }

    }else {
        paragraphError("You have to choose the value in positive");
    }
})

function calculateChange(money){
    for (let i= 0; i< cashMoney.length; i++) {
        const numberOfNotes= Math.trunc(money /cashMoney[i]);
        money = money % cashMoney[i];
        console.log(numberOfNotes);
        noOfNOtes[i].innerText = numberOfNotes;
    } 
}
