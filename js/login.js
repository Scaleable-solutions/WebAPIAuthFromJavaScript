(function () {
    var queryStringValues = getUrlVars();
    if (access_token = queryStringValues["code"]) {
        alert(access_token);
        localStorage.setItem('authorization_token', access_token);
        window.location = "index.html";
    }
    else {
        AuthorizationCodeRequest();
    }
})();
//https://login.microsoftonline.com/b5b9b1df-08cf-4a8f-bb70-de0b3269521d/oauth2/authorize
function AuthorizationCodeRequest() {
    var clientId = 'ef7d8c4d-62ef-4998-bb27-4873570e1bd4';
    var redirectURL = 'http://localhost:81/login.html';
    window.location = 'https://login.microsoftonline.com/b5b9b1df-08cf-4a8f-bb70-de0b3269521d/oauth2/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectURL

}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}