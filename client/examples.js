const opn = require('opn');
const getImage = require("./services/get-image");

const custom = getImage({
    endpoint: "custom",
    url: "http://localhost:3000",
    params: {
        tag: "label",
        text: "Your text",
        styles: {
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: "black",
            gap: "6px",
            fontWeight: 600,
            letterSpacing: ".065rem",
            display: "flex",
            justifyContent: "center",
            alginItems: "center",
        },
        trim: true
    }
})

const mostLabel = getImage({
    endpoint: "custom",
    url: "http://localhost:3000",
    params: {
        tag: "label",
        text: ["Um", "Dois", "Três"],
        styles: {
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            textAlign: "center",
            color: "black",
            gap: "6px",
            fontWeight: 600,
            letterSpacing: ".065rem",
            display: "flex",
            justifyContent: "center",
            alginItems: "center",
        },
        trim: true
    }
})

const icon = getImage({
    endpoint: "icon",
    url: "http://localhost:3000",
    params: {
        image: "add-Icon",
        styles: {
            padding: "10px",
            width: "min-content",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            alginItems: "center",
        },
        encoding: "binary"
    }
})


const image = getImage({
    endpoint: "image",
    url: "http://localhost:3000",
    params: {
        url: "https://picsum.photos/200",
        styles: {
            borderRadius: "50rem"
        },
        encoding: "binary",
        trim: true
    }
})

opn(image);