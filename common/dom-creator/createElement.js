const createImageWithStyle = require('./createImageWithStyle')
const createStyleInline = require('./createStyleInline')

const createElement = (element = "div", text = "", styles, gap = 4, icon) => {
    const createIcon = () => {
        return createImageWithStyle({ image: icon.base64, styles: icon.styles })
    }

    text = decodeURIComponent(text)

    if (text.includes(";")) {
        text = text.split(";")

        model = []
        model.push(`<div style='display: flex; gap: ${gap}px;'>`)
        for (let i = 0; i < text.length; i++) {
            model.push(`<${element} style="${createStyleInline(styles)}">${text[i]}</${element}>`)
        }
        model.push("</div>")

        return model.join(" ")
    }

    const textLabel = `${icon ? createIcon() : ""} ${text}`

    return `<${element} style="${createStyleInline(styles)}">${textLabel}</${element}>`
}

module.exports = createElement;