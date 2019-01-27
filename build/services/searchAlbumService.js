export default function($http) {

    let obj = {

        getData: (url, callback) => {

            $http({ method: 'GET', url: url }).then((response) => {
                callback(response.data);
            })
        }

    };

    return obj;

};