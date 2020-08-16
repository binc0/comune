var allerta = document.getElementById("allerta");

$.getJSON('https://binc0.github.io/comune/allerta.php', function(data) {
    console.alert(data)
    if (data[2].level >= 0) {
             allerta.innerHTML += '<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">' + data[2].title + '</h4> <p>' + data[2].description + '</p>  <hr>  <a class="btn btn-primary" href="' + data[i].link_url + '" role="button">Allerta</a> <a class="btn btn-secondary" href="' + data[2].file_url + '" role="button">Bollettino</a> <button type="button" class="float-md-right btn btn-danger" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">Chiudi</span> </button> </div>';
        }
});
