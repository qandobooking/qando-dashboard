import angular from 'angular';

angular.module('app.constants', [])

// TODO: Maybe change url between DEV or PROD envoirment
.constant('baseServerUrl', (() => {
  return 'http://api.qando.it/api/manage';
})())

.constant('bookingStatusNames', {
  pending: 'In Attesa',
  confirmed: 'Confermato',
  canceled: 'Annullato',
});
