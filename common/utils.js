const fs = require('fs')

const getImageAssetsAvailableSize = () => {
    try {
        const dirAvailable = fs.readdirSync('./assets')
        return dirAvailable.filter(dir => dir[0] !== ".")
    } catch(err) {
        throw Error(err)
    }
}

const getImageAssets = async (size, file) => {
    const imageAssetsAvailableSize = getImageAssetsAvailableSize()
    if (!imageAssetsAvailableSize.includes(size)) return;
    
    try {
        const base64 = await fs.readFileSync(`./assets/${size}/${file}.png`, { encoding: 'base64' })

        return `data:image/png;base64,${base64}`
    } catch(err) {
        throw Error(err)
    }
}

module.exports = { getImageAssetsAvailableSize, getImageAssets }