export default function($scope, $http, $stateParams) {

    $scope.pagesData = [];

    $scope.pagesCount = [];

    this.$onInit = () => {

        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $stateParams.loadArtistName + "&entity=album&lang=en_us";
        $scope.artistName = 'flume';
        $scope.srchAlbums();

    }

    $scope.srchAlbums = () => {

        if ($scope.artistName) {
            $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $scope.artistName + "&entity=album&lang=en_us";
        };

        $http.get($scope.itunesUrl).
        then((response) => {

            $scope.albumsData = response.data.results;

            $scope.pagesData.length = 0;

            for (let i = 0; i < $scope.albumsData.length; i++) {
                $scope.pagesData.push($scope.albumsData[i]);
            }

            $scope.pagesCount.length = 0;

            $scope.pagesCount.push(Math.ceil($scope.albumsData.length / 4));

            $scope.setPage(0);


        }, (response) => {

            window.alert("Возникла ошибка: " + response.status);

        })
    }

    $scope.pagesInfo = {
        currentPage: 1,
        perPage: [0, 1, 2, 3, 4],
        pagesCount: $scope.pagesCount,
        data: []
    }

    $scope.setPage = (pageIndex) => {

        if (pageIndex < $scope.pagesInfo.pagesCount && pageIndex >= 0) {

            $scope.pagesInfo.currentPage = pageIndex;

            $scope.pagesInfo.data = $scope.pagesData.slice($scope.pagesInfo.currentPage * 4, ($scope.pagesInfo.currentPage * 4) + 4);
        }

    }

    $scope.changeNums = (num) => {

        //$scope.pagesInfo.currentPage += num;

        if ($scope.pagesInfo.perPage[0] <= $scope.pagesCount - 5 && $scope.pagesInfo.perPage[0] > -1) {
            for (let i = 0; i < 5; i++) {


                $scope.pagesInfo.perPage[i] += num;

            }
        }

        if ($scope.pagesInfo.perPage[4] > $scope.pagesInfo.pagesCount - 1) {

            $scope.pagesInfo.currentPage = $scope.pagesInfo.pagesCount - 1;

        }

    }
};