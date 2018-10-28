export default function($scope, $http) {

    $scope.srchCountry = () => {
        console.log("https://restcountries.eu/rest/v2/name/" + $scope.countryField);
        $scope.url = "https://restcountries.eu/rest/v2/name/" + $scope.countryField + "?fields=name;alpha2Code;";
        $http.get($scope.url).
        then((response) => {
            $scope.countryName = response.data;
            let i = 0;
            while (i < response.data.length) {
                console.log(response.data[i]);
                i++;
            }
        }, (response) => {
            window.alert("Возникла ошибка: " + response.status)
        })
    }

    $scope.srchSongs = () => {
        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.songField + "&country=" + $scope.countryName[0].alpha2Code + "&limit=" +
            $scope.songsLimit;
        console.log("https://itunes.apple.com/search?term=" + $scope.songField + "&country=" + $scope.countryName[0].alpha2Code + "&limit=" +
            $scope.songsLimit);

        $http.get($scope.itunesUrl).
        then((response) => {
            $scope.songsData = response.data.results;
            console.log($scope.songsData);
            let i = 0;
            while (i < response.data.length) {
                console.log(response.data.results[i]);
                i++;
            }
        }, (response) => {
            window.alert("Возникла ошибка: " + response.status)
        })
    }
};