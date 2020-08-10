
 
     var allerta = document.getElementById("allerta");
     


$.getJSON('https://pianiemergenza.protezionecivile.fvg.it/api/alerts.json?test=3?callback=?', function(data) {
    // JSON result in `data` variable
    console.log(data);
               
        if (data[2].level >= 0) {
             allerta.innerHTML += '<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">' + data[i].title + '</h4> <p>' + data[i].description + '</p>  <hr>  <a class="btn btn-primary" href="' + data[i].link_url + '" role="button">Allerta</a> <a class="btn btn-secondary" href="' + data[i].file_url + '" role="button">Bollettino</a> <button type="button" class="float-md-right btn btn-danger" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">Chiudi</span> </button> </div>';
        }
});



