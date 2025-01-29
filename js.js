//contador

window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("sep 23, 2024" , 'countup1'); // ****** "Sep 23, 2024 4:50" this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
        meSeconds= secondsInADay*30,
                       
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    
   
 
    if (years > 1){ days = days - (years * 365) }
    mes =  Math.floor((timeDifference % (secondsInADay)) / (meSeconds) +1 *24 *30*12)/ Math.floor(720)/3;
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
    
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days ;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
    idEl.getElementsByClassName('mes')[0].innerHTML = mes ;
    
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }

