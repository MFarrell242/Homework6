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
    let lookup = "api.openweathermap.org/data/2.5/forecast?q=" + buttonName;
    $.ajax({
        url: lookup,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});

$(search).on("click", function(){
    event.preventDefault();
    var citySearch = document.querySelector("#inputbox");
    citySearch = $(citySearch).val();
    let lookup = "api.openweathermap.org/data/2.5/forecast?q=" + citySearch;
    $.ajax({
        url: lookup,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});
