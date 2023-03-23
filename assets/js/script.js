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
var time = parseInt(dayjs().format('H'));
    //Loop to cycle through each element with time-block class. Extracts out the number in "hour-x" as an interger to compare it to var time's hour.
    $('.time-block').each(function() {
        //creating new variables to extract both the hour and AM/PM to compare to time variable.
        var scheduleID = $(this).attr('id').split('-');
        var scheduleHour = parseInt(scheduleID[1]);
        var scheduleAmPm = scheduleID[2];
       
        if (scheduleAmPm === "PM" && scheduleHour !== 12) {
            scheduleHour += 12;
        } else if (scheduleAmPm === "AM" && scheduleHour === 12) {
            scheduleHour = 0;
        }

        console.log("scheduleHour:", scheduleHour, "scheduleAmPm:", scheduleAmPm, "time:", time);

        if (scheduleHour < time) {
            $(this).addClass('past');
        } else if (scheduleHour === time) {
            $(this).addClass('present');
        } else { 
            $(this).addClass('future');
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

