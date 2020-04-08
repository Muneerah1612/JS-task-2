const  data = [ 
    {Principal:2500, time: 1.8},
    { Principal : 1000, time:5}, 
    { Principal : 3000, time : 1},
    { Principal: 2000, time : 3} ] ;
    
function interestCalculator (array) {
    let interestData= [i];
    array. forEach ((i)=> {
        if (i.Principal >= 2500 && (i.time >1 && i.time (3)) {console.log ("i.rate = 3");}
        
        else if (i.Principal >= 2500 && (i.time >=3)) {console.log ("i.rate=4");}
        else if (i.Principal < 2500 || (i.time <=1)) {console.log ("i.rate =2");}
        else {console.log ("i.rate =1");}
        interest = (i.Principal * i.rate * i.time) / 100;
            interestdata.push ({`Principal`: Principal, `rate`: i.rate, `time` : i.time,
             `interest` : i.interest});}

             console.log (interestData);
             return interestData;
    }
    interestCalculator (data);
   



