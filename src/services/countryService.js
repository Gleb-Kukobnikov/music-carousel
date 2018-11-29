export default function($http) {

    let fileUrl = './data/countries.json';

    let obj = {

        getData: (callback) => {

            $http({ method: 'GET', url: fileUrl }).then((response) => {
                callback(response.data);
            })
        }

    };

    return obj;

};