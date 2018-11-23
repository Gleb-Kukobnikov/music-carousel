export default function($http) {

    let url = "../data/countries.json";

    return $http({ method: 'GET', url: url });

};