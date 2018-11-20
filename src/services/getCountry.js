export default function($scope, $http) {
    this.seacrh = () => {
        $scope.url = "../data/countries.json";

        return console.log($scope.url);
        /* $http.get($scope.url).
         then((response) => {
             $scope.countryName = response.data;
         }, (response) => {
             window.alert("Возникла ошибка: " + response.status)
         }) */
    }
};