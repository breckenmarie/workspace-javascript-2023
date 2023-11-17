// hotel registration -- store in an object
var test ={
    hotelname: "Marriot", 
    room: 456,
    booked: 123,
    display: function(){return this.hotelname;}
};

// access the properities
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;

//practice -- complete the project

var guestlist = [];
function reserve(){
    var guest = {
        guestname: $('name').val(),
        numofGuest: $('num').val(),
        checkin: $('checkin').val(),
        checkout: $('checkout').val(),
        roomtype: $('room').val()
    };
    guestlist.push(guest);
    console.log(guest);
    alert("Thank you for your reservation!");
}
function displaylist(){
    $("#guestlist").html("");
    $("#guestlist").append("<table>");
    
    for(var i in guestlist){
        $("#guestlist").append("<tr><td>" + guestlist[i].guestname+ "</td>");
        $("#guestlist").append("<td>" + guestlist[i].numofGuest + "</td>");
        $("#guestlist").append("<td>" + guestlist[i].checkin + "</td></tr>");
        $("#guestlist").append("<td>" + guestlist[i].checkout + "</td></tr>");
        $("#guestlist").append("<td>" + guestlist[i].roomtype + "</td></tr>");
    }
    $("#guestlist").append("</table>");
}
$('#submit').click(reserve);
$('#lists').click(displaylist);