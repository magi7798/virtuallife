

window.fbAsyncInit = function () {
  FB.init({
    appId: '474600216434835',
    cookie: true,
    xfbml: true,
    version: 'v3.3'
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});

{
  status: 'connected',
    authResponse: {
    accessToken: '...',
      expiresIn: '...',
        signedRequest: '...',
          userID: '...'
  }
}