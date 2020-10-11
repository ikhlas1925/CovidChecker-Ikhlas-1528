var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter your city... ', function(city){
    if(city == "Colombo"){
        console.log("Low Risk Area");
    }
    else if(city == "Galle"){
        console.log("Low Risk Area");
    }
    else if(city == "Gampaha"){
        console.log("High Risk Area");
    }else{
        console.log("Incorrect city")
    }
    console.log("Stay Safe");
    readline.close();
});