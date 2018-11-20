export default function($scope, $http, $stateParams) {

    $scope.limit = 16;

    $scope.currentSlide = [];

    $scope.slidesArr = [];

    this.$onInit = () => {

        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $stateParams.loadName + "&entity=song&lang=en_us&limit=" + $scope.limit;
        $scope.songField = "flume";
        $scope.srchSongs();

    }

    $scope.srchCountry = () => {

        $scope.url = "../data/countries.json";

        $http.get($scope.url).
        then((response) => {
            $scope.countryName = response.data;
        }, (response) => {
            window.alert("Возникла ошибка: " + response.status)
        })

    }

    $scope.srchCountry();

    $scope.srchSongs = () => {

        if ($scope.songField) {
            $scope.itunesUrl = $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.songField + "&entity=song&lang=en_us&limit=16";
        }

        if ($scope.countryField) {
            $scope.itunesUrl = $scope.itunesUrl + "&country=" + $scope.countryField.code;
        }
        if ($scope.songLimit) {
            $scope.itunesUrl = $scope.itunesUrl + "&limit=" + ($scope.songLimit * 4);
        }

        $http.get($scope.itunesUrl).
        then((response) => {

            $scope.songsData = response.data.results;
            $scope.slidesArr = $scope.songsData;
            $scope.currentSlide = $scope.slidesArr.slice(0, 4);

        }, (response) => {
            window.alert("Возникла ошибка: " + response.status)
        })
    }

    $scope.slideIndex = 0;

    $scope.changeSlide = (i) => {

        $scope.slideIndex += i;

        //check if exits arr
        if ($scope.slideIndex < 0) {
            $scope.slideIndex = 0;
        }

        if ($scope.slideIndex > ($scope.slidesArr.length / 4) - 1) {
            $scope.slideIndex = ($scope.slidesArr.length / 4) - 1;
        }

        //clearing slides arr
        $scope.currentSlide.length = 0;

        $scope.currentSlide = $scope.slidesArr.slice(($scope.slideIndex * 4), (($scope.slideIndex + 1) * 4));

    }

}