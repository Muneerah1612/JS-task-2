const  data = [ 
    {Principal:2500, time: 1.8},
    { Principal : 1000, time:5}, 
    { Principal : 3000, time : 1},
    { Principal: 2000, time : 3} ] ;
    
function interestCalculator (array) {
    let interestdata= [];
    array. forEach ((i)=> {
        if (i.Principal >= 2500 && (i.time >1 && i.time <3)) {i.rate = 3;}
        
        else if (i.Principal >= 2500 && (i.time >=3)) {i.rate=4;}
        else if (i.Principal < 2500 || (i.time <=1)) {i.rate =2;}
        else {i.rate =1}
        interest = (i.Principal * i.rate * i.time) / 100;
            interestdata.push ({`Principal`: Principal, `rate`: i.rate, `time` : i.time,
             `interest` : i.interest});}

             console.log (interestdata);
             return interestdata;
    }
    interestCalculator (data);
   



