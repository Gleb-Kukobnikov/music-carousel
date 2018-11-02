export default function($scope, $http) {

    $scope.srchCountry = () => {

        if ($scope.countryField == undefined) {
            $scope.countryField = "belarus"
        }

        $scope.url = "https://restcountries.eu/rest/v2/name/" + $scope.countryField + "?fields=name;alpha2Code;";

        $http.get($scope.url).
        then((response) => {
            $scope.countryName = response.data;
        }, (response) => {
            window.alert("Возникла ошибка: " + response.status)
        })
    }

    $scope.srchSongs = () => {

        if ($scope.songField != undefined) {

            if ($scope.songsLimit == null) {
                $scope.songsLimit = 50;
            }

            $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.songField + "&country=" + $scope.countryName[0].alpha2Code + "&limit=" +
                $scope.songsLimit + "&entity=song&lang=en_us";

            $http.get($scope.itunesUrl).
            then((response) => {
                $scope.songsData = response.data.results;

            }, (response) => {
                window.alert("Возникла ошибка: " + response.status)
            })
        }
    }
};