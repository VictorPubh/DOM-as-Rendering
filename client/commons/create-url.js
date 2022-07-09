/*
{
    styles: {},
    text: "",
    icon: {},
    trim: true,
    enconding: "base64",
}
*/

const isObjectToStringfy = require("./is-object-to-stringfy");

const createUrl = (endpoint, urlParamsObject = {}) => {
    let url = `${endpoint}?`;

    Object.keys(urlParamsObject).forEach(param => {
        url += `${param}=${isObjectToStringfy(urlParamsObject[param])}&`;
    });

    return url.substring(0, url.length - 1);
}

module.exports = createUrl;