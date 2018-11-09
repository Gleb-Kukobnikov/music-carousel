export default function($scope, $http, $stateParams) {

    $scope.pagesData = [];

    $scope.pagesCount = [];

    $scope.onloadFun = () => {

        $scope.itunesUrl = "https://itunes.apple.com/search?term=" + $stateParams.loadArtistName + "&entity=album&lang=en_us";
        $scope.artistName = ' flume';
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
        perPage: [],
        pagesCount: $scope.pagesCount,
        data: []
    }


    $scope.setPage = (pageIndex) => {

        $scope.pagesInfo.currentPage = pageIndex;

        for (let i = 0; i < 5; i++) {
            $scope.pagesInfo.perPage.push(pageIndex + i);
        }

        $scope.pagesInfo.data.length = 0;

        $scope.pagesInfo.data = $scope.pagesData.slice($scope.pagesInfo.currentPage * 4, ($scope.pagesInfo.currentPage * 4) + 4);
    }

    $scope.changeNums = (num) => {

        $scope.pagesInfo.perPage.length = 0;

        for (let i = 0; i < 5; i++) {
            $scope.pagesInfo.perPage.push(i + num);
        }

        while ($scope.pagesCount <= $scope.pagesInfo.perPage[$scope.pagesInfo.perPage.length - 1]) {

            $scope.pagesInfo.perPage.pop();

        }

        while ($scope.pagesInfo.perPage[0] < 0) {

            $scope.pagesInfo.perPage.length = 0;

            for (let i = 0; i < 5; i++) {
                $scope.pagesInfo.perPage.push(i);
            }
        }


    }
};