//without arg and return type
var votingEligiblity=()=>{
    age=20;
    if(age>=18)
    {
        console.log("Eligible")
    }
    else
    {
        console.log("Not eligible")
    }
}
votingEligiblity();

//with arg and without return type

var votingEligiblity=(age)=>{

    if(age>=18)
    {
        console.log("Eligible")
    }
    else
    {
        console.log("Not eligible")
    }
}
votingEligiblity(12);

//with arg and return type
var votingEligiblity=(age)=>{
    if(age>=18)
    {
        return("Eligible")
    }
    else
    {
        return("Not eligible")
    }
}
console.log(votingEligiblity(10));




//without arg and with return type
var votingEligiblity=()=>{
    age=40;
    if(age>=18)
    {
        return("Eligible")
    }
    else
    {
        return("Not eligible")
    }
}
console.log(votingEligiblity());

//annonyous function using arrow function
setTimeout(()=>{console.log("Hello");

},2000)

setInterval(()=>{console.log("Hello");

},2000)





