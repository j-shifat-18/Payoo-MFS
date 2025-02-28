document.getElementById("latest-payment").style.display = "block";
document.getElementById("addmoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfermoney").style.display = "none";
document.getElementById("getbonus").style.display = "none";
document.getElementById("paybill").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// add money
document
  .getElementById("addmoney-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "block");
    toggleSectionByIDAndStatus("cashout", "none");
    toggleSectionByIDAndStatus("transfermoney", "none");
    toggleSectionByIDAndStatus("getbonus", "none");
    toggleSectionByIDAndStatus("paybill", "none");
    toggleSectionByIDAndStatus("transaction-history", "none");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "block");
    changeCardColorByIdAndStatus("cashout-card", "none");
    changeCardColorByIdAndStatus("transfermoney-card", "none");
    changeCardColorByIdAndStatus("getbonus-card", "none");
    changeCardColorByIdAndStatus("paybill-card", "none");
    changeCardColorByIdAndStatus("transaction-history-card", "none");
  });

// cash out
document
  .getElementById("cashout-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "none");
    toggleSectionByIDAndStatus("cashout", "block");
    toggleSectionByIDAndStatus("transfermoney", "none");
    toggleSectionByIDAndStatus("getbonus", "none");
    toggleSectionByIDAndStatus("paybill", "none");
    toggleSectionByIDAndStatus("transaction-history", "none");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "none");
    changeCardColorByIdAndStatus("cashout-card", "block");
    changeCardColorByIdAndStatus("transfermoney-card", "none");
    changeCardColorByIdAndStatus("getbonus-card", "none");
    changeCardColorByIdAndStatus("paybill-card", "none");
    changeCardColorByIdAndStatus("transaction-history-card", "none");
  });

// transfer money section
document
  .getElementById("transfermoney-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "none");
    toggleSectionByIDAndStatus("cashout", "none");
    toggleSectionByIDAndStatus("transfermoney", "block");
    toggleSectionByIDAndStatus("getbonus", "none");
    toggleSectionByIDAndStatus("paybill", "none");
    toggleSectionByIDAndStatus("transaction-history", "none");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "none");
    changeCardColorByIdAndStatus("cashout-card", "none");
    changeCardColorByIdAndStatus("transfermoney-card", "block");
    changeCardColorByIdAndStatus("getbonus-card", "none");
    changeCardColorByIdAndStatus("paybill-card", "none");
    changeCardColorByIdAndStatus("transaction-history-card", "none");
  });

// get bonus section
document
  .getElementById("getbonus-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "none");
    toggleSectionByIDAndStatus("cashout", "none");
    toggleSectionByIDAndStatus("transfermoney", "none");
    toggleSectionByIDAndStatus("getbonus", "block");
    toggleSectionByIDAndStatus("paybill", "none");
    toggleSectionByIDAndStatus("transaction-history", "none");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "none");
    changeCardColorByIdAndStatus("cashout-card", "none");
    changeCardColorByIdAndStatus("transfermoney-card", "none");
    changeCardColorByIdAndStatus("getbonus-card", "block");
    changeCardColorByIdAndStatus("paybill-card", "none");
    changeCardColorByIdAndStatus("transaction-history-card", "none");
  });

  // pay bill section
  document
  .getElementById("paybill-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "none");
    toggleSectionByIDAndStatus("cashout", "none");
    toggleSectionByIDAndStatus("transfermoney", "none");
    toggleSectionByIDAndStatus("getbonus", "none");
    toggleSectionByIDAndStatus("paybill", "block");
    toggleSectionByIDAndStatus("transaction-history", "none");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "none");
    changeCardColorByIdAndStatus("cashout-card", "none");
    changeCardColorByIdAndStatus("transfermoney-card", "none");
    changeCardColorByIdAndStatus("getbonus-card", "none");
    changeCardColorByIdAndStatus("paybill-card", "block");
    changeCardColorByIdAndStatus("transaction-history-card", "none");

  });

  // transaction history section
  document
  .getElementById("transaction-history-card")
  .addEventListener("click", function (event) {
    // toggle sections
    toggleSectionByIDAndStatus("addmoney", "none");
    toggleSectionByIDAndStatus("cashout", "none");
    toggleSectionByIDAndStatus("transfermoney", "none");
    toggleSectionByIDAndStatus("getbonus", "none");
    toggleSectionByIDAndStatus("paybill", "none");
    toggleSectionByIDAndStatus("transaction-history", "block");
    toggleSectionByIDAndStatus("latest-payment", "none");

    // change card color
    changeCardColorByIdAndStatus("addmoney-card", "none");
    changeCardColorByIdAndStatus("cashout-card", "none");
    changeCardColorByIdAndStatus("transfermoney-card", "none");
    changeCardColorByIdAndStatus("getbonus-card", "none");
    changeCardColorByIdAndStatus("paybill-card", "none");
    changeCardColorByIdAndStatus("transaction-history-card", "block");

  });