document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashoutNumber = document.getElementById("cashout-number").value;

    const cashoutAmount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseInt(cashoutAmount);

    const pin = document.getElementById("cashout-pin").value;

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedBalance = parseInt(mainBalance);

    if (cashoutNumber.length === 11) {
      if (pin === "1234") {
        if (cashoutAmount > 0) {
          if (cashoutAmount > convertedBalance) {
            alert("Insufficient balance");
          } else {
            const sum = convertedBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sum;

            document.getElementById("cashout-amount").value = "";
            document.getElementById("cashout-pin").value = "";
            alert("Withdrawn money successfully.");
          }
        }
      } else {
        alert("Wrong password!");
      }
    } else {
      alert("Enter a valid account number!");
    }
  });
