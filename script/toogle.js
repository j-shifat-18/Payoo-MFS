document.getElementById("latest-payment").style.display = "block";
document.getElementById("cashout").style.display = "none";
document.getElementById("addmoney").style.display = "none";

// add money
document
  .getElementById("addmoney-card")
  .addEventListener("click", function (event) {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("latest-payment").style.display = "none";
  });

// cash out
document
  .getElementById("cashout-card")
  .addEventListener("click", function (event) {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("latest-payment").style.display = "none";
  });
