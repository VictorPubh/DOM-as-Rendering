const nodeHtmlToImage = require('node-html-to-image');

const createStyleInline = (styles) => {
    let style = []

    for (let key in styles) {
        parsedKey = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        style.push(`${parsedKey}: ${styles[key]};`)
    }

    return style.join(" ");
}

const createElement = (element = "div", text, styles) => {
    if (text.includes(";")) {
        text = text.split(";")

        model = []
        model.push("<div style='display: flex; gap: 4px;'>")
        for (let i = 0; i < text.length; i++) {
            model.push(`<${element} style="${createStyleInline(styles)}">${text[i]}</${element}>`)
        }
        model.push("</div>")

        return model.join(" ")
    }

    return `<${element} style="${createStyleInline(styles)}">{{text}}</${element}>`
}

module.exports = async (req, res, next) => {
    const { element } = req.params
    const { styles } = req.query
    const { text } = req.query

    const html = createElement(element, text, JSON.parse(styles))
    const image = await nodeHtmlToImage({ html })

    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(image, 'binary')
}