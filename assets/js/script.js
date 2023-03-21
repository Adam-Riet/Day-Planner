var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Function does not begin until DOM has loaded.
 $(document).ready(function() {
    $('.saveBtn').on('click', function() {
       var parentDiv = $(this).parent();

       var textarea = parentDiv.find('textarea');

       var setSchedule = textarea.val();

       var parentDivID = parentDiv.attr('id');
       localStorage.setItem(parentDivID, setSchedule);
    
    
    
    });
    
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Function utilizing dayjs to display current date and time. Thank you to UofU mini project for code. 
    function displayTime() {
        var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
      }
  
      displayTime();
      setInterval(displayTime, 1000);
  });

