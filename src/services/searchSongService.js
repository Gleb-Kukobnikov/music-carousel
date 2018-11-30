export default function($http) {

    let itunesUrl,
        limit = 16;

    let song = {

        getData: (songField, countryField, songLimit) => {

            if (songField) {

                itunesUrl = "https://itunes.apple.com/search?term=" + songField + "&entity=song&lang=en_us&limit=" + limit;

            }

            if (countryField) {

                itunesUrl = itunesUrl + "&country=" + countryField.code;

            }

            if (songLimit) {

                itunesUrl = itunesUrl + "&limit=" + (songLimit * 4);

            }

            return $http({ method: 'GET', url: itunesUrl });

        }
    };

    return song;

};