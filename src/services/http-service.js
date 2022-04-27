import 'whatwg-fetch';

class HttpServices {
    getStudent = () => {
        var promise = new Promise ((resolve, reject) => {
            fetch('https://api.hatchways.io/assessment/students')
            .then(response => {
                resolve(response.json());
            });
        })
        return promise;
    }
}

export default HttpServices;