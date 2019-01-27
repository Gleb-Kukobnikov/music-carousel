export default function($http) {

    let fileUrl = './data/countries.json';

    let obj = {

        getData: () => {

            return $http({ method: 'GET', url: fileUrl })
        }

    };

    return obj;

};