const isObjectToStringfy = (data) => {
    if(typeof data === 'object') {
        return JSON.stringify(data).replaceAll(" ", "");
    }

    return data;
}

module.exports = isObjectToStringfy;