const createStyleInline = (styles) => {
    let style = []

    for (let key in styles) {
        parsedKey = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        style.push(`${parsedKey}: ${styles[key]};`)
    }

    return style.join(" ");
}

module.exports = createStyleInline;