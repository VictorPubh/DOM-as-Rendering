const createImageWithStyle = require("../common/dom-creator/createImageWithStyle");
const handleToImage = require("../services/handleToImage.service");

module.exports = async (req, res, next) => {
    const { url } = req.query

    if (!url) throw Error("don't have URL")

    const styles = req.query.styles ? JSON.parse(req.query.styles) : {}

    try {
        const html = createImageWithStyle({ image: url, styles })
        
        handleToImage(req, res, { html })   
    } catch(err) {
        res.json({
            error: true,
            message: err
        })
    }
}