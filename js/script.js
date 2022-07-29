$(document).ready(function(){

$("form").submit(function(event){

    event.preventDefault();
    let inputValue =$("#superheroInput").val();

    $.ajax({
        url: "https://www.superheroapi.com/api.php/10222886118495107/" + inputValue,
        success: function(data){
            let nombre = data.name;
            let imagen = data.image.url;
            let biografia = data.biography;
            console.log(data)
            
        $("#heroInfo").html(`        
        <div class="text-center">
            <h3>${nombre}</h3>
            <img src="${imagen}" width="300vw" height="250vw"/>
            <p>Biografía: ${biografia}</p>
        </div>`)

        
        }


    })





})


})