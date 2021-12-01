function checkNumItems(){
    if(document.getElementById('prod1').value < 0 || document.getElementById('prod2').value < 0 || document.getElementById('prod3').value < 0){
        //Display an error message if either one of the items is less than zero
        document.getElementById('msg').innerHTML = "Error: Please enter a positive value";
        //Disable the submit button if either one of the items is less than zero
        document.getElementById("CalculateButton").disabled = true;
    }else{
        //Remove (or do not display) an error message if all items are more than 0
        document.getElementById('msg').innerHTML = "";
        //Enable submit button if all items are greater than zero
        document.getElementById("CalculateButton").disabled = false;
   }
}