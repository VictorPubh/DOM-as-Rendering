const createUrl = require("../commons/create-url")

const getEndpoint = (endpoint, params) => {
    const available = {
        "icon": () => {
            if (params.image) {
                const options = { ...params};
                delete options.image;

                return createUrl(`${endpoint}/${params.image}.png`, options)
            } else {
                throw Error("don't have image params")
            }
        },
        "image": () => {
            if (params.url) {
                const options = { ...params};

                return createUrl(`${endpoint}/cover.png`, options)
            } else {
                throw Error("don't have url params")
            }
        },
        "custom": () => {
            if (params.tag) {
                const options = { ...params};
                delete options.tag;

                if (Array.isArray(options.text)) {
                    options.text = options.text.join(";")
                    delete options.icon;
                }
               
                return createUrl(`${endpoint}/${params.tag}.png`, options)
            } else {
                throw Error("don't have tag params")
            }
        }
    }

    if (available[endpoint]) {
        return available[endpoint]()
    } else {
        return createUrl(endpoint, params)
    }
}

const getImage = ({ url, endpoint, params }) => {
   const urlEndpointParams = getEndpoint(endpoint, params);

    if (url) {
        return `${url}/${urlEndpointParams}`
    }

    return urlEndpointParams;
}

module.exports = getImage;