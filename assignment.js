//kilometerToMeter

function kilometerToMeter (kilometer) {

    var meter = kilometer * 1000;
    return meter;

}

//hotelCost

function hotelCost (days) {

var days = 71;
var cost = 0;
if (days <= 10){
    cost = days * 100;
} else if (days <= 20) {
 
    var firstTenDays = 10 * 100;
    var remaining = days - 10;
    var secondTenDays = remaining * 80;
    cost = firstTenDays + secondTwentyDays;
}

else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = days - 20;
    var thirdFiftyOneDays = remaining * 50;
    cost = firstTenDays + secondTenDays + thirdFiftyOneDays;
}
 return cost;
 

}

//megaFriend
var long = 0;
var names = ['korim', 'abdullah', 'rana', 'newazuddin', 'issebellah'];

function longeststring (arr){
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].length>long){
            long = arr [i].length;
        }
    }

    return long;
}




