// TODO: Different color/class for different mehtod
function notifyManager($mdToast) {
  const svc = {};

  svc.info = (message) => {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position('top right')
    );
  };

  svc.success = (message) => {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position('top right')
    );
  };

  svc.error = (message) => {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position('top right')
    );
  };

  return svc;
};

export default notifyManager;
