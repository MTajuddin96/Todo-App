
var checkModal=false;
var body=document.getElementsByTagName("body")[0];
var taskModal=document.getElementsByClassName("addTaskModal")[0];
var overlay=document.getElementsByClassName("overlay")[0];
var todoDate=document.getElementById("dateTodo");
todoDate.innerText=moment().format('DD')+" "+moment().format('MMMM');

function countTasks(){
    var opentasks=document.getElementsByClassName("task");
    var opentasksText=document.getElementById("noOfTasks");
    opentasksText.innerText=opentasks.length+" OPEN TASKS";
};
countTasks();

function addTaskModal(event){
    if(checkModal===false){
        body.style.opacity="0.4";   
        taskModal.style.transition="0.3s";
        taskModal.style.transform="scale(1)"
        overlay.style.transform="scale(1)"
        checkModal=true;
    }
    else{
        taskModal.style.transition="0.3s";
        taskModal.style.transform="scale(0)"
        overlay.style.transition="0.3s";
        overlay.style.transform="scale(0)"
        body.style.opacity="1";
        checkModal=false;
    }
};

function addTaskModalClose(event){
    event.stopPropagation();
    taskModal.style.transition="0.3s";
    taskModal.style.transform="scale(0)"
    overlay.style.transition="0.3s";
    overlay.style.transform="scale(0)"
    body.style.opacity="1";
    checkModal=false;
}

var checkStatus=false;  
function taskComplete(val){ 

    if(checkStatus==false){
        val.getElementsByClassName("buttonFront")[0].style.transition="0.4s";
        val.getElementsByClassName("buttonFront")[0].style.right="6px";
        val.getElementsByClassName("buttonFront")[0].children[0].style.opacity="1";
        val.getElementsByClassName("buttonBack")[0].style.background="rgb(91, 52, 52)";
        val.getElementsByClassName("buttonFront")[0].style.background="rgb(255, 75, 95)";
    checkStatus=true;
    }
    else{
        val.getElementsByClassName("buttonFront")[0].style.transition="0.4s";
        val.getElementsByClassName("buttonFront")[0].style.right="27px";
        val.getElementsByClassName("buttonFront")[0].children[0].style.opacity="0";
        val.getElementsByClassName("buttonBack")[0].style.background="#2c2c2c";
        val.getElementsByClassName("buttonFront")[0].style.background="#5f5f5f";
        checkStatus=false;
    }
}
console.log(moment().format('DD')+" "+moment().format('MMMM'));