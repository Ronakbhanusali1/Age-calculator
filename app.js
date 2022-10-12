// const container;
// const error;

// function getAge(){
    
    
// }

// function calcAge(){ 
    
// }

// function displayAge(){
    
    
// }


document.getElementById("submit").addEventListener("click", function(){

    const  update = function(){
        let dob = document.getElementById("dob").value,
            day = new Date(dob),
            Time = day.getTime(),
            today = new Date() ,
            Currenttime = today.getTime(),
            value = Currenttime-Time,
            year = Math.floor(value/(1000*60*60*24*365.25)),
            month = Math.floor(value/(1000*60*60*24*30.4375)),
            days = Math.floor(value/(1000*60*60*24));

            let insert = function(x, y) {

                document.querySelector(x).innerHTML = y;

            }
            insert("#years",year);
            insert("#months",month);
            insert("#days",days);

    }
    setInterval(update, 1000);
    
})
