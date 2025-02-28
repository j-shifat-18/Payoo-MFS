// convert input values from string to int/float
function convertInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// convert innerText from string to int/float
function convertInnerTextById(id){
    const text = document.getElementById(id).innerText;
    const convertedText = parseFloat(text);
    return convertedText;
}

// set new innerText
function setInnerTextById(id,text){
    document.getElementById(id).innerText = text; 
}

// set new input value
function setInputValueById(id,value){
    document.getElementById(id).value = value ;
}

// toggle sections
function toggleSectionByIDAndStatus(id,status){
    document.getElementById(id).style.display = status ;
}

// change service background color by id and status
function changeCardColorByIdAndStatus(id,status){
    if(status == "block"){
        document.getElementById(id).style.backgroundColor = "rgba(8, 116, 242, 0.05)";
        document.getElementById(id).style.borderColor = "rgba(8, 116, 242, 1)";
    }
    else {
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).style.borderColor = "rgba(8,8,8,0.1)";
    }
}
