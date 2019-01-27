export default function($scope, $stateParams, albumFactory) {

    let itunesUrl;

    $scope.pagesData = [];

    $scope.pagesCount = [];

    this.$onInit = () => {
        if ($stateParams.loadArtistName) {
            $scope.artistName = $stateParams.loadArtistName;
        } else $scope.artistName = 'flume';

        $scope.srchAlbums();

    }

    $scope.srchAlbums = () => {

        if ($scope.artistName) {
            itunesUrl = "https://itunes.apple.com/search?term=" + $scope.artistName + "&entity=album&lang=en_us";
        };

        albumFactory.getData(itunesUrl, (data) => {

            $scope.albumsData = data.results;

            $scope.pagesData.length = 0;

            for (let i = 0; i < $scope.albumsData.length; i++) {
                $scope.pagesData.push($scope.albumsData[i]);
            }

            $scope.pagesCount.length = 0;

            $scope.pagesCount.push(Math.ceil($scope.albumsData.length / 4));

            $scope.setPage(0);

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