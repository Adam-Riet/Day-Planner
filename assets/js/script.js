var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn');


//Function does not begin until DOM has loaded.
    $(document).ready(function() {
    $('.saveBtn').on('click', function() {
//Targeting parent of function which will match the the hour found in the first div.
    var parentDiv = $(this).parent();

    var textarea = parentDiv.find('textarea');

    var setSchedule = textarea.val();

    var parentDivID = parentDiv.attr('id');
    localStorage.setItem(parentDivID, setSchedule);
    });
    
//Variable to get current hour from dayjs to then compare it to hour in div. Code from class 5, activity 26.
//Retrieving current hour as an interger. Will make it easier to compare the time varable with the scheduleHour variable. 
    var time = parseInt(dayjs().format('H'));
    //Loop to cycle through each element with time-block class. Extracts out the number in "hour-x" as an interger to compare it to var time's hour.
    $('.time-block').each(function() {
//Creating new variables to extract both the hour and AM/PM to compare to time variable.
    var scheduleID = $(this).attr('id').split('-');
        
    var scheduleHour = parseInt(scheduleID[1]);
        
    var scheduleAmPm = scheduleID[2];
        
    var parentDiv = $(this);
        
    var textarea = parentDiv.find('textarea');
        
    var parentDivID = parentDiv.attr('id');

//Need conditional statement to convert it to a 24 hour format for easier comparison.    
    if (scheduleAmPm === "PM" && scheduleHour !== 12) {
        scheduleHour += 12;
    } else if (scheduleAmPm === "AM" && scheduleHour === 12) {
        scheduleHour = 0;
    }

//Applies correct color depending on current time. Will default to future class if prior conditions are not met. 
    if (scheduleHour < time) {
        $(this).addClass('past');
    } else if (scheduleHour === time) {
        $(this).addClass('present');
    } else { 
        $(this).addClass('future');
    }

    var parentDivID = $(this).attr("id");
        
    var textarea = $(this).find("textarea");
        
    var savedSchedule = localStorage.getItem(parentDivID);
        
    if (savedSchedule !== null) {
        textarea.val(savedSchedule);
        }
    });
//Function utilizing dayjs to display current date and time. Thank you to UofU mini project for code. 
    
    function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    }
  
    displayTime();
      
    setInterval(displayTime, 1000);
    });

