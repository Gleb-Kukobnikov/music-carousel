export default function($scope, $http) {
    $scope.srchSongs = () => {
        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.songField;
        console.log("https://itunes.apple.com/search?term=" + $scope.songField);

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