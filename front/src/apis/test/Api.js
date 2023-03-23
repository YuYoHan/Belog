// import { API_BASE_URL } from "./api-config";

// export function Call(api  ,method  ,request) {
//     let options = {
//         headers: new Headers({
//             "Content-Type": "application/json",
//         }),
//         url: API_BASE_URL + api,
//         method: method,
//     };

//     if (request) {
//         // GET method
//         options.body = JSON.stringify(request);
//     }
//     return fetch(options.url, options)
//         .then((response) => {
//             if (response.status === 200) {
//                 console.log(response.status);
//                 return response.json();
//             }
//         })
//         .catch((error) => {
//             console.log("http error");
//             console.log(error);
//         });
// }