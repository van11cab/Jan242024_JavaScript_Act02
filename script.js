//digital clock function
//update digital clock every seconds
setInterval(digClock, 1000);

function brazil_time(){
    window.name = "brazil";
}

function ph_time(){
    window.name = "ph";
}

function jp_time(){
    window.name = "jp";
}

function us_time(){
    window.name = "us";
}

function Clock(){
    //current date and time 
    let date= new Date();
    document.getElementById("ph").style.width = "";
    document.getElementById("brazil").style.width = "";
    document.getElementById("jp").style.width = "";
    document.getElementById("us").style.width = "";

    if(window.name == "brazil"){
        date.setHours(date.getHours()-11);
        document.getElementById("brazil").style.width = "10vw";
    }

    if(window.name == "ph"){
        date.setHours(date.getHours());
        document.getElementById("ph").style.width = "10vw";
    } 

    if(window.name == "jp"){
        date.setHours(date.getHours()+1);
        document.getElementById("jp").style.width = "10vw";
    } 

    if(window.name == "us"){
        date.setHours(date.getHours()-13);
        document.getElementById("us").style.width = "10vw";
    } 

    let now ={
        year: date.getFullYear(),
        day: date.getDate(), 
        hour : date.getHours(),
        min : date.getMinutes(),
        sec : date.getSeconds(),
        xm : 'AM'
    }

    switch(date.getDay()){
        case 0:
            now.weekday = "Sunday";
            break;
        case 1:
            now.weekday = "Monday";
            break;
        case 2:
            now.weekday = "Tuesday";
            break;
        case 3:
            now.weekday = "Wednesday";
            break;
        case 4:
            now.weekday = "Thursday";
            break;
        case 5:
            now.weekday = "Friday";
            break;
        case 6:
            now.weekday = "Saturday";
            break;
    }

    switch(date.getMonth()){
        case 0:
            now.month = "January";
            break;
        case 1:
            now.month = "February";
            break;
        case 2:
            now.month = "March";
            break;
        case 3:
            now.month = "April";
            break;
        case 4:
            now.month = "May";
            break;
        case 5:
            now.month = "June";
            break;
        case 6:
            now.month = "July";
            break;
        case 7:
            now.month = "August";
            break;
        case 8:
            now.month = "September";
            break;
        case 9:
            now.month = "October";
            break;
        case 10:
            now.month = "November";
            break;
        case 11:
            now.month = "December";
            break;
    }

    bg_update(now);
    return now;
}

//analog clock function
setInterval(()=>{
    //get the time
    let curr = Clock();

    let hour_deg = 30 * curr.hour + curr.min/2;
    let min_deg  = 6 * curr.min;
    let sec_deg = 6 * curr.sec;

    document.getElementById("hour_hand").style.transform = `rotate(${hour_deg}deg)`;
    document.getElementById("minute_hand").style.transform = `rotate(${min_deg}deg)`;
    document.getElementById("second_hand").style.transform = `rotate(${sec_deg}deg)`;    
}, 1000);



//function for the digital Clock, local time
function digClock(){
    let curr= Clock();

    //split
    if(curr.hour >= 12){
        if(curr.hour >12) curr.hour -= 12;
        curr.xm = "PM";
    } else if(curr.hour == 0){
        curr.hour= 12;
        curr.xm = "AM"
    }
    
    //readjust clock to conform to 12 hr system
    curr.hour = curr.hour < 10 ? "0" + curr.hour : curr.hour;
    curr.min = curr.min < 10 ? "0" + curr.min : curr.min;
    curr.sec = curr.sec < 10 ? "0" + curr.sec : curr.sec;
    
    //prepare text to present
    let current= curr.hour +  ":" + curr.min + ":" + curr.sec + " " + curr.xm;
    let date= curr.month + " " + curr.day + ", " + curr.year + " " + curr.weekday;
    
    //present the text
    document.getElementById("DigClock").textContent = current;
    document.getElementById("date").textContent = date;
}

//update background by time
function bg_update(now){
    let curr = now;

    document.body.style.background ="";
    switch(curr.hour){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            bg_change("white", "invert", "rgb(0,10,41)","linear-gradient(227deg, rgba(0,10,41,1) 0%, rgba(22,0,192,1) 100%)");
            break;
        case 5:
        case 6:
            bg_change("white", "invert", "rgb(6,157,255)", "linear-gradient(227deg, rgba(6,157,255,1) 0%, rgba(0,24,74,1) 100%)");
            break;
        case 7:
        case 8:
        case 9:
            bg_change("black", "normal", "rgb(247,255,120)", "linear-gradient(227deg, rgba(247,255,120,1) 0%, rgba(6,174,255,1) 100%)");
            break;
        case 10:
        case 11:
        case 12:
            bg_change("black", "normal", "rgb(255,253,50)","linear-gradient(227deg, rgba(255,253,50,1) 0%, rgba(255,255,255,1) 100%)");
        case 13:
        case 14:
        case 15:
            bg_change("black", "normal", "rgb(255,255,255)","linear-gradient(227deg, rgba(255,255,255,1) 0%, rgba(255,253,50,1) 100%)");
            break;
        case 16:
            bg_change("black", "normal", "rgb(192,48,0)","linear-gradient(227deg, rgba(192,48,0,1) 0%, rgba(255,162,0,1) 100%)");
            break;
        case 17:            
        case 18:
            bg_change("white", "invert", "rgb(255,81,0)", "linear-gradient(227deg, rgba(255,81,0,1) 0%, rgba(128,0,116,1) 100%)");
            break;
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            bg_change("white", "invert", "rgb(22,0,192)","linear-gradient(227deg, rgba(22,0,192,1) 0%, rgba(0,10,41,1) 100%)");
            break;
    }

}

function bg_change(color, clock, bg1, bg2, bg3){
    //font color
    document.body.style.color = color;

    //clock color
    if(clock == "invert"){
        document.getElementById("Analog_Clock").style.filter = "invert(100%)";
    }else{
        document.getElementById("Analog_Clock").style.filter = "";
    }

    document.body.style.background = bg1;
    document.body.style.background = bg2;
    document.body.style.background = bg3;    
}