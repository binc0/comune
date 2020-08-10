
 
     var allerta = document.getElementById("allerta");
     
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://pianiemergenza.protezionecivile.fvg.it/api/alerts.json?test",
  "contentType" : "josn",
  "method": "GET",
  "Access-Control-Allow-Headers": "*",
}

// Provincie che sono città mteropolitane


$.ajax(settings).done(function (jcontent){

            //Popolazione superiore a 50000
        if (jcontent[2].level >= 0) {
             allerta.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>SI</td><td>Popolazione superiore a 5000</td><td>' + jcontent[i].popolazione + '</td></tr>';
        }
    
});
