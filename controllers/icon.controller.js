const createImageWithStyle = require("../common/dom-creator/createImageWithStyle");
const { getImageAssets } = require("../common/utils");
const handleToImage = require("../services/handleToImage.service");

module.exports = async (req, res, next) => {
    const { image } = req.params

    if (!image) throw Error("don't have Image")

    const size = req.query.size ? req.query.size : "HD"
    const styles = req.query.styles ? JSON.parse(req.query.styles) : {}

    try {
        const icon = await getImageAssets(size, image)
        const html = createImageWithStyle({ image: icon, styles })
        
        handleToImage(req, res, { html })   
    } catch(err) {
        res.json({
            error: true,
            message: err
        })
    }
}