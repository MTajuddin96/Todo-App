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
        },  events: [
            {
              title  : 'event1',
              start  : '2018-08-08'
            },
            {
              title  : 'event2',
              start  : '2018-08-08'
            },
            {
              title  : 'event3',
              start  : '2018-08-09',
          
            }
          ]
    
    })
});

$(function(){
    $('#datetime12').combodate();  
});


    $(".dayCheckboxOff").click(function(){
        if(($(this).hasClass("dayCheckboxOff"))===true){
            $(this).toggleClass('dayCheckboxOff dayCheckboxOn');
            console.log("Ok");
        }
        else{
            $(this).toggleClass('dayCheckboxOn dayCheckboxOff');
            console.log("not Ok");
        }
    });

function addTaskDone(event){
    addTaskModalClose(event);
}