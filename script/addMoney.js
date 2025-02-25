document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseInt(amount);

    const pin = document.getElementById('pin').value;

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseInt(mainBalance);
    
    if(accountNumber.length === 11){
        if(pin === "1234"){
            if(amount > 0){
                const sum = convertedAmount + convertedBalance ;
                document.getElementById('main-balance').innerText = sum;
            }
        }
        else{
            alert("Wrong password!");
        }
    }
    else {
        alert("Enter a valid account number!");
    }

  });
