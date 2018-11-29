export default function($http) {

    let song = {

        getData: (url, callback) => {

            $http({ method: 'GET', url: url }).then((response) => {
                callback(response.data);
            })

        }
    };

    return song;

};