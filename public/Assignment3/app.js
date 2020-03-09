/*global $*/
var submitButton = $("#submitButton");
var cityName =$("#q");

submitButton.on("click",function(){
	
	$("#results").empty();
	
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather",
		type: "GET",
		dataType: "json",
		data: {
            "q":$("#q").val(),
            "appid":"4f0b02a437380245a72769c07f1bb162"
		},
		success: function(data) {
			var src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png"
			var temperature = ((data.main.temp - 273.15)*9/5+32);
			$("#results").html("<h3>" + data.name + "</h3>");
			$("#results").append(data.weather[0].description);
			$("#results").append("<img src=\""+src+"\">");
			$("#results").append(temperature.toFixed(2) + " &#176; F");
		},
    	error: function(error) {
    		console.log(error);
    	}
	});
});