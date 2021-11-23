function displayTime() {
    var time = moment().format('MMMM Do YYYY <br>HH:mm:ss');
   
    $('#clock').html(time);

    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});

