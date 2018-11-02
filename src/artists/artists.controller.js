export default function($scope, $http, $stateParams) {

    $scope.onloadFun = () => {

        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $stateParams.loadArtistName + "&entity=album&lang=en_us";

        $scope.srchAlbums()
    }



    $scope.srchAlbums = () => {

        if ($scope.artistName != undefined) {

            $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.artistName + "&entity=album&lang=en_us";

        }

        $http.get($scope.itunesUrl).
        then((response) => {

            $scope.albumsData = response.data.results

        }, (response) => {

            window.alert("Возникла ошибка: " + response.status)

        })

    }
};