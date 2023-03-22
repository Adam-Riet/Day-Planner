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
    
   for (var index = 0; index < parentDivID.length; index++) {
        // if timedisplayEL === DIV ID set Past
        // if timedisplayEL > DIV ID set Present
        // if timedisplayEL === DIV ID set future
   }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Function utilizing dayjs to display current date and time. Thank you to UofU mini project for code. 
    function displayTime() {
        var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
      }
  
      displayTime();
      setInterval(displayTime, 1000);
  });

