// convert input values from string to int/float
function convertInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// convert innerText from string to int/float
function convertInnerTextById(id) {
  const text = document.getElementById(id).innerText;
  const convertedText = parseFloat(text);
  return convertedText;
}

// set new innerText
function setInnerTextById(id, text) {
  document.getElementById(id).innerText = text;
}

// set new input value
function setInputValueById(id, value) {
  document.getElementById(id).value = value;
}

// toggle sections
function toggleSectionByIDAndStatus(id, status) {
  document.getElementById(id).style.display = status;
}

// change service background color by id and status
function changeCardColorByIdAndStatus(id, status) {
  if (status == "block") {
    document.getElementById(id).style.backgroundColor =
      "rgba(8, 116, 242, 0.05)";
    document.getElementById(id).style.borderColor = "rgba(8, 116, 242, 1)";
  } else {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.borderColor = "rgba(8,8,8,0.1)";
  }
}

// Make transaction history card
function makeTransactionHistory(type,amount,accountNumber,bank) {
    let fromOrTo =""; 
    if(type==="Add Money"){
        fromOrTo = "From: ";
    }
    else fromOrTo = "To: ";


  const container = document.getElementById("transaction-container");

  const div = document.createElement("div");

  div.classList.add(
    "flex", "bg-white", "py-3","px-4", "justify-between", "items-center", "rounded-xl"
  );
  div.innerHTML = `
        <div class="flex gap-4 items-center">
              <img class="w-6" src="./images/wallet1.png" alt="" />
              <div>
                <h3 class="font-semibold">${type}</h3>
                <p class="font-bold text-orange-500">$ ${amount}</p>
                <p>${fromOrTo} ${accountNumber}</p>
                <p class="font-semibold">${bank}</p>
              </div>
            </div>
        <img class="w-6 h-6" src="./images/icons8-ellipsis-30.png" alt="" />
  `;

  container.prepend(div);
}
