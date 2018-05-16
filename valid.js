function required(){
    var valId = document.userInput.submt.value;
    if (valId === "")
    {
        alert("Please enter some text.");
        return false;
    }
    else
    {
        alert("userInput");
        return true;
    }
}