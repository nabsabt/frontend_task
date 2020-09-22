/*
--Function initialization--
Each function below triggers a defined DIV's display method
*/

function managementOn(){
  /*
  -The management_div's, as DOM model's address is given to an Object,
   as value.
  -Via this object, we toggle the element's visibility to "inline".
  -This pattern goes to the other 2 Div's as well
  */
 
var managementDivObj = document.getElementById("management_div");
managementDivObj.style.display = "inline";

}

function managementOff(){

  /*
  -The management_div's, as DOM model's address is given to an Object,
   as value.
  -Via this object, we toggle the element's visibility to "none".
  -This pattern goes to the other 2 Div's as well
  */
  var managementDivObj = document.getElementById("management_div");
  managementDivObj.style.display = "none";
  
}

function FTPEngineOn(){
  var FTPDivObj = document.getElementById("FTP_eng_spec");
  FTPDivObj.style.display = "inline";
}

function FTPEngineOff(){
  var FTPDivObj = document.getElementById("FTP_eng_spec");
  FTPDivObj.style.display = "none";
}

function allocationOn(){
  var AllocationDivObj = document.getElementById("allocation_eng_spec");
  AllocationDivObj.style.display = "inline";
}

function allocationOff(){
  var AllocationDivObj = document.getElementById("allocation_eng_spec");
  AllocationDivObj.style.display = "none";
}
/*
-EventListener is added, which is being called only if the DOM model
 is built already.
*/

window.load = (event) => {
 /*
  -The already declared functions are being called here.
  */
  managementOn();
  managementOff();
  FTPEngineOn();
  FTPEngineOff();
  allocationOn();
  allocationOff();


};

