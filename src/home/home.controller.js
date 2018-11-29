export default function($scope, $http, $stateParams, countryFactory, songFactory) {

    $scope.limit = 16;

    $scope.currentSlide = [];

    $scope.slidesArr = [];

    let itunesUrl;

    this.$onInit = () => {

        $scope.songField = "flume";
        $scope.srchSongs();

    }

    countryFactory.getData((data) => {
        $scope.countryName = data;
    });

    $scope.srchSongs = () => {

        if ($scope.songField) {

            itunesUrl = "https://itunes.apple.com/search?term=" + $scope.songField + "&entity=song&lang=en_us&limit=" + $scope.limit;

        }

        if ($scope.countryField) {

            itunesUrl = itunesUrl + "&country=" + $scope.countryField.code;

        }

        if ($scope.songLimit) {

            itunesUrl = itunesUrl + "&limit=" + ($scope.songLimit * 4);

        }

        songFactory.getData(itunesUrl, (data) => {

            $scope.songsData = data.results;
            $scope.slidesArr = $scope.songsData;
            $scope.currentSlide = $scope.slidesArr.slice(0, 4);
            $scope.totalSlides = Math.ceil($scope.slidesArr.length / 4);

        });


    }

    $scope.slideIndex = 0;


    $scope.changeSlide = (i) => {

        $scope.slideIndex += i;


        if ($scope.slideIndex < 0) {
            $scope.slideIndex = 0;
        }

        if ($scope.slideIndex > ($scope.slidesArr.length / 4) - 1) {
            $scope.slideIndex = (Math.ceil($scope.slidesArr.length / 4)) - 1;
        }

        $scope.currentSlide.length = 0;

        $scope.currentSlide = $scope.slidesArr.slice(($scope.slideIndex * 4), (($scope.slideIndex + 1) * 4));

    }

}