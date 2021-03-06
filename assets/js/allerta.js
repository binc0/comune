var allerta = document.getElementById("allerta");

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var settings = {
  "url": "https://allerta.binco.me",
  "method": "GET"
};
    if (getCookie("allerta") != "true") {
        $.ajax(settings).done(function (data) {
            if (data[0].level >= 1 && getCookie(data[0].title) != "true") {
            allerta.innerHTML += '<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">' + data[0].title + '</h4> <p>' + data[0].description + '</p>  <hr>  <a class="btn btn-primary" href="' + data[0].link_url + '" target="_blank" role="button">Allerta</a> <a class="btn btn-secondary" href="' + data[0].file_url + '" target="_blank" role="button">Bollettino</a> <button type="button" class="float-md-right btn btn-danger" onclick="closecookie()" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">Chiudi</span> </button> </div>';
            }

});
    };

function closecookie(){
        $.ajax(settings).done(function (data) {
            document.cookie = "" + data[0].title + "=true; expires=" + new Date(data[0].dt_end) + "; path=/";
    });
    }