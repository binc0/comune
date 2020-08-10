
 
     var allerta = document.getElementById("allerta");
     


$.getJSON('https://pianiemergenza.protezionecivile.fvg.it/api/alerts.jsonp?test', function(jcontent) {
    // JSON result in `data` variable
    
                //Popolazione superiore a 50000
        if (jcontent[2].level >= 0) {
             allerta.innerHTML += '<tr><th scope="row">' + i + '</th><td>' + jcontent[i].nome + '</td><td>SI</td><td>Popolazione superiore a 5000</td><td>' + jcontent[i].popolazione + '</td></tr>';
        }
});
