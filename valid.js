function required(){
    var valId = document.getElementById("userInput").value;
    if (valId != "")
    {
        alert(valId);
        return true;
    }
}