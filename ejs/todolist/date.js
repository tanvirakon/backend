// index page e date ber krr code lekha inappropiate
// so oi code likhbo ekhane & ekhan theke export krbo

function getDate(){
    var options={ weekday: 'long' , month: 'long' , day: 'numeric' };
    let day=new Date().toLocaleDateString("en-US",options);
    return day;
}

// module.exports=getDate;
module.exports={getDate:getDate};