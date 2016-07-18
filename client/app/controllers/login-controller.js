function LoginCtrl ($auth, $rootScope, notifyManager, HttpUtils, dashLoading) {
  this.credentials = {
    email: null,
    password: null
  };

  // Showing user error
  this.invalidCredentials = false;

  this.login = () => {
    // Show loader and hide the credentials error
    this.invalidCredentials = false;
    dashLoading.show();

    $auth.login(this.credentials)
    .then((response) => {
      $rootScope.$broadcast("app:loginSuccess", response);
    })
    .catch((error) => {
      if (error.status === 400) {
        this.invalidCredentials = true;
      } else {
        notifyManager.error(HttpUtils.makeErrorMessage(error));
      }
      $rootScope.$broadcast("app:loginError", error);
    })
    .finally(() => {
      dashLoading.hide();
    });
  };
}

export default LoginCtrl;
