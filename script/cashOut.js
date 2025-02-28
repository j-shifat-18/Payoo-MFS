document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashoutNumber = document.getElementById("cashout-number").value;

    const convertedAmount = convertInputValueById("cashout-amount");

    const pin = convertInputValueById("cashout-pin");

    const convertedBalance = convertInnerTextById("main-balance");

    if (cashoutNumber.length === 11) {
      if (pin === 1234) {
        if (convertedAmount > 0) {
          if (convertedAmount > convertedBalance) {
            alert("Insufficient balance");
          } else {
            const sum = convertedBalance - convertedAmount;
            setInnerTextById("main-balance",sum);

            setInputValueById("cashout-amount","");
            setInputValueById("cashout-pin","");
            alert("Withdrawn money successfully.");
          }
        }
        else alert("Invalid amount");
      } else {
        alert("Wrong password!");
      }
    } else {
      alert("Enter a valid account number!");
    }
  });
