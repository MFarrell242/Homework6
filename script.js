var city;
var search = document.querySelector("#searchBTN");
var presets = document.querySelectorAll(".btn-secondary");
var date = document.querySelector("#currentTime");
var future = document.querySelectorAll("#futureDates");

$(document).ready(function(){
    $(date).text(moment().format("MM/DD/YY"));
    for (q = 0; q < 5; q++){
        $(future[q]).text(moment().add(q+1, 'days').format("MM/DD/YY"));
    }
});

$(presets).on("click", function(){
    console.log(this);
    let buttonName = $(this).val();
    let lookup = "api.openweathermap.org/data/2.5/forecast?q=" + buttonName + "&appid=da7f60dbc2c04a78acbc54553c03b9c9";
    $.ajax({
        url: lookup,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // if I could get a response (which, what the fuck), this is where
        // I'd assign values to cards and the main thingummy
    });
});

$(search).on("click", function(){
    event.preventDefault();
    var citySearch = document.querySelector("#inputbox");
    citySearch = $(citySearch).val();
    let lookup = "api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=da7f60dbc2c04a78acbc54553c03b9c9";
    $.ajax({
        url: lookup,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // if I could get a response (which, what the fuck), this is where
        // I'd assign values to cards and the main thingummy, same as up there.
        // dunno why it's not working =(
    });
});
