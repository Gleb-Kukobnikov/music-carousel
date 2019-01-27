export default function($scope, countryFactory, songFactory) {

    $scope.limit = 16;

    $scope.currentSlide = [];

    $scope.slidesArr = [];

    this.$onInit = () => {

        $scope.songField = "flume";
        $scope.srchSongs();

    }

    countryFactory.getData().then((response) => {
        $scope.countryName = response.data;
    });

    $scope.srchSongs = () => {

        songFactory.getData($scope.songField, $scope.countryField, $scope.songLimit).then((response) => {

            $scope.songsData = response.data.results;
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