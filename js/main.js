$(function(){
	$('#a a')
		.css( {backgroundPosition: "-20px 35px"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(-20px 94px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(40px 35px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "-20px 35px"})
			}})
		})
});


// // CLOCK DISPLAY
// function renderTime() {
// 	var currentTime = new Date();
// 	var diem = "AM";
// 	var h = currentTime.getHours();
// 	var m = currentTime.getMinutes();
//     var s = currentTime.getSeconds();
//     var n = currentTime.getMilliseconds();
// 	setTimeout('renderTime()',1);
//     if (h == 0) {
// 		h = 12;
	
// 	} else if (h > 12) { 
// 		h = h - 12;
// 		diem="PM";
// 	}
// 	if (h < 10) {
// 		h = "0" + h;
// 	}
// 	if (m < 10) {
// 		m = "0" + m;
// 	}
// 	if (s < 10) {
// 		s = "0" + s;
// 	}

//     var myClock = document.getElementById('clockDisplay');
// 	myClock.textContent = h + ":" + m + ":" + s + ":" + n + " " + diem;
// 	myClock.innerText = h + ":" + m + ":" + s + ":" + n + " " + diem;
// }
// renderTime();
// // END CLOCK DISPLAY




// START CHANGE COLOR OF CLOCK DISPLAY EVERY MINUTE
function renderTime() {
	
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var n = currentTime.getMilliseconds();
    var myClock = document.getElementById('clockDisplay');
	setTimeout('renderTime()',1);
    if (h == 0) {
		h = 12;
	
	} else if (h > 12) { 
		h = h - 12;
		diem="PM";
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}

	if (s %2 === 0) {
		myClock.style.backgroundColor = "red";
	}

	else {
		myClock.style.backgroundColor = "black";
	}

	myClock.textContent = h + ":" + m + ":" + s + ":" + n + " " + diem;
	myClock.innerText = h + ":" + m + ":" + s + ":" + n + " " + diem;
}
// END CHANGE COLOR OF CLOCK DISPLAY EVERY MINUTE	






//START SOCIAL MEDIA ANIMATION EXAMPLE

$(document).ready(function(){
	renderTime();
    $("#clickThis").click(function(){
        $("#socialAnimation").animate({
            left: '550px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

//END SOCIAL MEDIA ANIMATION EXAMPLE







//BELOW ARE BEGINNING CLASS EXAMPLES

// $(function(){
// 	//FOUR
// 	b();
// })

// //ONE
// function a() {
// 	console.log("...showing newsletter signup...");
// }

// //TWO
// function b() {
// 	$("#messages").html("hello, world");
// }

// //THREE
// a();





// function showNewsletterSignup () {
// 	console.log("...showing newsletter signup...")
// }

// setTimeout(showNewsletterSignup, 5000);