document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const convertedAmount = convertInputValueById("amount");

    const pin = convertInputValueById("pin");

    const convertedBalance = convertInnerTextById("main-balance");

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        if (convertedAmount > 0) {
          const sum = convertedAmount + convertedBalance;
          setInnerTextById("main-balance", sum);
          setInputValueById("amount", "");
          setInputValueById("pin", "");
          alert("Added money successfully.");
          makeTransactionHistory(
            "Add Money",
            convertedAmount,
            accountNumber,
            bank
          );
        }
      } else {
        alert("Wrong password!");
      }
    } else {
      alert("Enter a valid account number!");
    }
  });
