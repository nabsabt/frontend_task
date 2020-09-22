
function managementOn(){
 
var managementDivObj = document.getElementById("management_div");
managementDivObj.style.display = "inline";

}

function managementOff(){

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


window.load = (event) => {
 
  managementOn();
  managementOff();
  FTPEngineOn();
  FTPEngineOff();
  allocationOn();
  allocationOff();


};

