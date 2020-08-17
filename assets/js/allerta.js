var allerta = document.getElementById("allerta");


var settings = {
  "url": "https://binco.me/test/",
  "method": "GET"
};

$.ajax(settings).done(function (data) {
  console.log(data);
    if (data[0].level >= 0) {
             allerta.innerHTML += '<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">' + data[0].title + '</h4> <p>' + data[0].description + '</p>  <hr>  <a class="btn btn-primary" href="' + data[0].link_url + '" target="_blank" role="button">Allerta</a> <a class="btn btn-secondary" href="' + data[0].file_url + '" target="_blank" role="button">Bollettino</a> <button type="button" class="float-md-right btn btn-danger" onclick="closecookie" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">Chiudi</span> </button> </div>';
        }
    

});

    function closecookie(){
        document.cookie = "closecookie=true; expires=' + data[0].dt_end + '; path=/";
    }