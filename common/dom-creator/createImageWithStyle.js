const createStyleInline = require("./createStyleInline")

const createImageWithStyle = ({ image, styles }) => {
    return `<img src="${image}" style="${createStyleInline(styles)}" />`
}

module.exports = createImageWithStyle