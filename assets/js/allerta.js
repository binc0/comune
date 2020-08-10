
 
     var allerta = document.getElementById("allerta");
     


$.getJSON('https://pianiemergenza.protezionecivile.fvg.it/api/alerts.json?test?callback=?', function(jcontent) {
    // JSON result in `data` variable
    
               
        if (jcontent[2].level >= 0) {
             allerta.innerHTML += '<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">' + jcontent[i].title + '</h4> <p>' + jcontent[i].description + '</p>  <hr>  <a class="btn btn-primary" href="' + jcontent[i].link_url + '" role="button">Allerta</a> <a class="btn btn-secondary" href="' + jcontent[i].file_url + '" role="button">Bollettino</a> <button type="button" class="float-md-right btn btn-danger" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">Chiudi</span> </button> </div>';
        }
});



