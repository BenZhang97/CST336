/*global $*/
let buildGallery = function(){
	$("#cover").empty();
	$("#info").empty();
	$.ajax({
		url: "https://openlibrary.org/api/books",
		type: "GET",
		dataType: "json",
		data: {
		    "format" : "geojson",
		    "isbn" : $("#isbn-number").val(),
		    "cover" : $(),
		    
		},
		success: function(data){
			data.message.forEach(function(src){
				$("#cover").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}