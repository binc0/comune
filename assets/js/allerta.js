
 
     var comuni = document.getElementById("allerta");
     
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://pianiemergenza.protezionecivile.fvg.it/api/alerts.json?test",
  "contentType" : "josn",
  "method": "GET",
}

// Provincie che sono città mteropolitane
var cittametro= "NA MI TO BA BO FI GE VE RC RM PA CT ME"

$.ajax(settings).done(function (jcontent){
for (var i=0 ; i < jcontent.length ; i++)
{
            //Popolazione superiore a 50000
        if (jcontent[i].popolazione >= 50000) {
            // comuni.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>SI</td><td>Popolazione superiore a 5000</td><td>' + jcontent[i].popolazione + '</td></tr>';
        }
            //Capoluogo di provincia o è Verbania o Carbonia (hanno nomi diversi da quello della provincia e non hanno almeno 50000 abutanti)
            else if (jcontent[i].provincia.nome == jcontent[i].nome || jcontent[i].nome == "Verbania" || jcontent[i].nome == "Carbonia") {
             // xcomuni.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>SI</td><td>Capoluogo</td><td>' + jcontent[i].popolazione + '</td></tr>';  
            }
            //Citta metropolitana
            else if (cittametro.includes(jcontent[i].sigla)) {
             //comuni.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>SI</td><td>Città metropolitana</td><td>' + jcontent[i].popolazione + '</td></tr>';
            }
            //Citta non ha buono
            else if (jcontent[i].popolazione >= 45000){
             comuni.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>NO</td><td>Non ha i requisiti</td><td>' + jcontent[i].popolazione + '</td></tr>';
            }
    }
    
});
