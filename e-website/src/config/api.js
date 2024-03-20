// import useCsrfToken from "../useCsrfToken";

export const _fetch = async (url, method, data, header) => {

        // useCsrfToken();

        const LoginToken = localStorage.getItem("accessToken");
        if (method === 'get' || method === 'GET') {
                return fetch(url,
                        {
                                method: method,
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        "Authorization": "Bearer " + LoginToken,
                                },
                        })
                        .then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
                // .done();
        } else if (method === 'patch' || method === 'PATCH') {
                return fetch(url,
                        {
                                method: method,
                                headers: {
                                        // 'Accept': 'application/json',
                                        // 'Content-Type': 'application/json',
                                        "Authorization": "Bearer " + LoginToken,
                                },
                                body: JSON.stringify(data),
                        })
                        .then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
                // .done();
        } else if (method === 'ImagePost' || method === 'ImagePost') {
                return fetch(url,
                        {
                                method: 'POST',
                                headers: {
                                        // 'Accept': 'application/json',
                                        // 'Content-Type': 'application/json',
                                        "Authorization": "Bearer " + LoginToken,
                                },
                                body: data,
                        })
                        .then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
                // .done();
        } else if (method === 'imagepatch' || method === 'IMAGEPATCH') {
                return fetch(url,
                        {
                                method: method,
                                headers: {
                                        // 'Accept': 'application/json',
                                        // 'Content-Type': 'application/json',
                                        "Authorization": "Bearer " + LoginToken,
                                },
                                body: data,
                        })
                        .then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
                // .done();
        } else if (method === 'delete' || method === 'DELETE') {
                return fetch(url,
                        {
                                method: method,
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        "Authorization": "Bearer " + LoginToken,
                                },
                                body: JSON.stringify(data),
                        })
                        .then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
                // .done();
        } else {
                return fetch(url, {
                        method: method,
                        headers: {
                                // header
                                'Content-Type': 'application/json',
                                "Authorization": "Bearer " + LoginToken,
                                'X-CSRFToken': getCookie('csrftoken') 
                        },
                        body: JSON.stringify(data),
                }).then((response) => response.json())
                        .then((result) => {
                                return result;
                        })
                        .catch((error) => {
                                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
                        })
        }

        // .then((response) => { return response.json() })
        // .then((result) => {
        //         if (result.status == 1) {
        //                 return result;
        //         } else {
        //                 return result;
        //         }
        // }).catch((error) => {
        //         return { "status": 0, 'message': 'Something Went Wrong, Please try again later!' }
        // })
}
// module.exports = { _fetch }
export default _fetch;
