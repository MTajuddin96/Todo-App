var checkModal=false;

var body=document.getElementsByTagName("body")[0];
var taskModal=document.getElementsByClassName("addTaskModal")[0];

function addTaskModal(){
    if(checkModal===false){
        body.style.opacity="0.4";   
        taskModal.style.transition="0.3s";
        taskModal.style.transform="scale(1)"
        checkModal=true;
    }
    else{
        taskModal.style.transition="0.3s";
        taskModal.style.transform="scale(0)"
        body.style.opacity="1";
        checkModal=false;
    }
};
var checkStatus=false;  
function taskComplete(val){ 

    if(checkStatus==false){
        val.getElementsByClassName("buttonFront")[0].style.transition="0.4s";
        val.getElementsByClassName("buttonFront")[0].style.right="27px";
        checkStatus=true;
    }
    else{
        val.getElementsByClassName("buttonFront")[0].style.transition="0.4s";
        val.getElementsByClassName("buttonFront")[0].style.right="8px";
        checkStatus=false;
    }
}