import angular from 'angular';
import initialLoaderDirective from './directives/initial-loader';
import initialLoaderManager from './services/initial-loader-manager';

const ng = 'initial-loader';
angular.module(ng, [])
  .factory('initialLoaderManager', initialLoaderManager)
  .directive('initialLoader', initialLoaderDirective);

// Only because i am a cool boy
export default ng;
