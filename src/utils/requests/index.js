// export const sleep = data => {
//     return new Promise(res => setTimeout(() => {
//         console.log('sleep done');
//         res(data);
//     }, 2000));
// };

export const fetchPostRequest = (url, data) => {
    const paramsObject = {
        method: 'post',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(url, paramsObject);
};

export const fetchGetRequest = url => fetch(url);
