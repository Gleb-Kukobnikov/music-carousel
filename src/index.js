import angular from 'angular';
import ngRoute from 'angular-route';
import ngUiRouter from 'angular-ui-router';
import './style/app.scss';
import artists from './controllers/artists.js';
import home from './controllers/home.js';

const root = angular
    .module('App', [
        ngUiRouter,
        ngRoute,
        artists,
        home
    ])
    .config(($routeProvider, $locationProvider) => {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: "/views/home.html",
                controller: 'homeController'
            })
            .when('/artists', {
                templateUrl: "/views/artists.html",
                controller: 'artistsController'
            })
            .when('/about', {
                templateUrl: "/views/about.html"
            });
    })
    .name;

export default root;