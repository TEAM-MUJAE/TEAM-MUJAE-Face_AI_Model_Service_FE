import axios from 'axios';

// CommonAPI.js

const baseURL = 'http://192.168.0.25:8000';

export const requestImageFromAPI = async (method, url, data) => {
    console.log('requestImageFromAPI 호출됨!');

    console.log('method : ', method);
    console.log('baseURL : ', baseURL);
    console.log('url : ', url);
    console.log('엔드포인트? : ', `${baseURL}${url}`);
    console.log('file : ', data);
    try {
        console.log("어디까지 왔을까")
        const response = await axios({
            method,
            url: `${baseURL}${url}`,
            data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        console.error('Error requesting API: ', error);
        throw error;
    }
}

// const API_SERVER = 'http://localhost:8000';

// export const createAxios = (configs) =>{
//     const INITIAL_CONFIG = {
//         baseURL: `${API_SERVER}`,
//         withCredentials: true,
//         timeout: 3000,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     return axios.create(Object.assign(INITIAL_CONFIG, configs));
// };

// export const customAxios = (configs) => {
//     return createAxios(
//         Object.assign(
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             },
//             configs
//         )
//     );
// };


