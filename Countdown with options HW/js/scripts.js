var timer = document.getElementById('countdown-wrapper');
var weeks = document.getElementById('weeks');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');



function timeTillDoomsDay(){

	var userYear = document.getElementById('userYear').value;
	var userMonth = document.getElementById('userMonth').value;
	var userDay = document.getElementById('userDay').value;
	var userHour = document.getElementById('userHour').value;
	var endTimeStamp= new Date(userYear, userMonth, userDay, userHour);
	var nowTimeStamp = Date.now();
	var timeDifference = endTimeStamp - nowTimeStamp;

	var timeStampInSeconds = timeDifference / 1000;
	var seconds = Math.floor(timeStampInSeconds % 60);
	var minutes = Math.floor(timeStampInSeconds / 60) % 60;
	var hours = Math.floor(timeStampInSeconds / (60 *60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));


	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};

	//endCounter(timeDifference);

return timeObject;
	
};


function intiTimer(choice){
	
	if(choice == 'zombie'){
		document.getElementById('countdown-text').innerHTML = 'Get ready for the zombies!';
	}else if(choice == 'football'){
		document.getElementById('countdown-text').innerHTML = 'Get ready for some football!';
	}else if(choice == 'moon'){
		document.getElementById('countdown-text').innerHTML ='We are moon bound!';
	}


	var timeObjectReturned = timeTillDoomsDay();
	

	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;

	
	
}


//function updateTimer(){


//}

//function endCounter(timeDifference){
//	if (timeDifference < 1){
//		document.getElementById("hidden").style.display="none";
 //		document.getElementById("hidden").style.display="block";
//
 //		document.getElementById("countdown-wrapper").style.display="block";
 	//	document.getElementById("countdown-wrapper").style.display="none";
//
 //	}
//}

//document.getElementById("weeks").innerHTML = weeks;



setInterval(
//	intiTimer, 500
);

	