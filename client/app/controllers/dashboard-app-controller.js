function DashboardAppCtrl ($mdSidenav) {
  console.log('Dash!');

  this.toggleSidenav = function() {
    $mdSidenav('left').toggle();

  };

  this.y = 'XD';

}

export default DashboardAppCtrl;
