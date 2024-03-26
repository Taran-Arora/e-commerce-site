// import {getCookie} from "../useCsrfToken";
// import axios from 'axios';

// export const _fetch = async (url, method, data, header) => {

//         // useCsrfToken();

//         const LoginToken = localStorage.getItem("accessToken");
//         if (method === 'get' || method === 'GET') {
//                 return axios(url,
//                         {
//                                 method: method,
//                                 headers: {
//                                         'Accept': 'application/json',
//                                         'Content-Type': 'application/json',
//                                         "Authorization": "Bearer " + LoginToken,
//                                 },
//                         })
//                         .then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//                 // .done();
//         } else if (method === 'patch' || method === 'PATCH') {
//                 return axios(url,
//                         {
//                                 method: method,
//                                 headers: {
//                                         // 'Accept': 'application/json',
//                                         // 'Content-Type': 'application/json',
//                                         "Authorization": "Bearer " + LoginToken,
//                                 },
//                                 body: JSON.stringify(data),
//                         })
//                         .then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//                 // .done();
//         } else if (method === 'ImagePost' || method === 'ImagePost') {
//                 return axios(url,
//                         {
//                                 method: 'POST',
//                                 headers: {
//                                         // 'Accept': 'application/json',
//                                         // 'Content-Type': 'application/json',
//                                         "Authorization": "Bearer " + LoginToken,
//                                 },
//                                 body: data,
//                         })
//                         .then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//                 // .done();
//         } else if (method === 'imagepatch' || method === 'IMAGEPATCH') {
//                 return axios(url,
//                         {
//                                 method: method,
//                                 headers: {
//                                         // 'Accept': 'application/json',
//                                         // 'Content-Type': 'application/json',
//                                         "Authorization": "Bearer " + LoginToken,
//                                 },
//                                 body: data,
//                         })
//                         .then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//                 // .done();
//         } else if (method === 'delete' || method === 'DELETE') {
//                 return axios(url,
//                         {
//                                 method: method,
//                                 headers: {
//                                         'Accept': 'application/json',
//                                         'Content-Type': 'application/json',
//                                         "Authorization": "Bearer " + LoginToken,
//                                 },
//                                 body: JSON.stringify(data),
//                         })
//                         .then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//                 // .done();
//         } else {
//                 return axios(url, {
//                         method: method,
//                         headers: {
//                                 // header
//                                 'Content-Type': 'application/json',
//                                 "Authorization": "Bearer " + LoginToken,
//                                 'X-CSRFToken': getCookie('csrftoken') 
//                         },
//                         body: JSON.stringify(data),
//                 }).then((response) => response.json())
//                         .then((result) => {
//                                 return result;
//                         })
//                         .catch((error) => {
//                                 return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }
//                         })
//         }

//         // .then((response) => { return response.json() })
//         // .then((result) => {
//         //         if (result.status == 1) {
//         //                 return result;
//         //         } else {
//         //                 return result;
//         //         }
//         // }).catch((error) => {
//         //         return { "status": 0, 'message': 'Something Went Wrong, Please try again later!' }
//         // })
// }
// // module.exports = { _fetch }
// export default _fetch;




import { getCookie } from "../useCsrfToken";
import axios from 'axios';

const _fetch = async (url, method, data, header) => {
    const LoginToken = localStorage.getItem("accessToken");
    let config = {
        method: method.toUpperCase(),
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
        }
    };

    if (method.toUpperCase() !== 'GET') {
        config.headers['Content-Type'] = 'application/json';
        config.data = data;
    }

    if (method.toUpperCase() === 'DELETE') {
        config.headers['Content-Type'] = 'application/json';
        config.data = JSON.stringify(data);
    }

    if (method.toUpperCase() === 'IMAGEPOST') {
        config.headers['Content-Type'] = 'multipart/form-data';
        config.data = data;
    }

    if (method.toUpperCase() === 'IMAGEPATCH') {
        config.headers['Content-Type'] = 'multipart/form-data';
        config.method = 'PATCH';
        config.data = data;
    }

    if (header) {
        Object.assign(config.headers, header);
    }

    if (method.toUpperCase() !== 'GET' && method.toUpperCase() !== 'DELETE') {
        config.headers['X-CSRFToken'] = getCookie('csrftoken');
    }

    try {
        const response = await axios(url, config);
        return response; // Return the entire Axios response object
    } catch (error) {
        console.error('Something went wrong:', error);
        return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error };
    }
};

export default _fetch;

