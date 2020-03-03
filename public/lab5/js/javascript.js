/*global $*/
/*global _*/
$(document).ready(function(){
    
    $("#searchBtn").on("click", search);
    
    function search(){
            $.ajax({

                method: "GET",
                url: "https://pixabay.com/api/",
                dataType: "json",
                data: { "key":"5589438-47a0bca778bf23fc2e8c5bf3e","q":$("#keyword").val(), "orientation":$("#orient").val()},
                success: function(result,status) {
                    
                result.hits = _.shuffle(result.hits);//shuffle all elements in an array
                //alert(result);
                $("#images").html('')  
                for(let i=0; i<4; i++){
                    $("#images").append(`<div>Likes: ${result.hits[i].likes} <br> 
                    <img width="200" src='${result.hits[i].webformatURL}'</div>`);
                }
            }   
            });//ajax
    }//search()
});    