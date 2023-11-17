//callback function example
//$('body').hide().fadeIn(4000, function() {alert('Done!');});
//console.log('I am here!');
/*how jquery event working*/
$('h1').click(function(){
    $(this).text("Hide the image!");
    $('img').hide();
    $('body').children('p').slideToggle();
});

//play with jQuery .each function
//update the image link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr('src', newpath);
    console.log(newpath);
});
//update the anchor link---all links go to google.com
$('a').each(function(){
    var link = $(this).attr('href');
    var newlink = "https://www.google.com/";
    $(this).attr('href', newlink);
    console.log(newlink);
});