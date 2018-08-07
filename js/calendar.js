let checkModal=false;
let overlay=document.getElementsByClassName("overlay")[0];
let body=document.getElementsByTagName("body")[0];
let taskModal=document.getElementsByClassName("addTaskModal")[0];


function addTaskModal(){
    if(checkModal===false){
        taskModal.style.transition="0.3s";
        taskModal.style.transform="scale(1)"
        overlay.style.transition="0.3s";
        overlay.style.transform="scale(1)" 
        checkModal=true;
    }
};

function addTaskModalClose(event){
    event.stopPropagation();
    taskModal.style.transition="0.3s";
    taskModal.style.transform="scale(0)"
    overlay.style.transition="0.3s";
    overlay.style.transform="scale(0)"
    checkModal=false;
}

$(function () {
   $('#calendar').fullCalendar({
        defaultView: 'month',
        height: 'parent',
        dayClick: function () {
            addTaskModal();
        }
    })
});

$(function(){
    $('#datetime12').combodate();  
});
