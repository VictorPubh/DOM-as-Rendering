const createElement = require('../common/dom-creator/createElement');
const { getImageAssets } = require('../common/utils');
const handleToImage = require('../services/handleToImage.service');

module.exports = async (req, res, next) => {
    const { element } = req.params
    const { text, gap } = req.query

    if (!element) throw Error("don't have Element")

    const icon = req.query.icon ? JSON.parse(req.query.icon) : {}; 
    const styles = req.query.styles ? JSON.parse(req.query.styles) : {}; 

    if (icon && icon.size && icon.name ) {
        icon.base64 = await getImageAssets(icon.size, icon.name)
    }

    const html = createElement(element, text, JSON.parse(styles), gap, icon)
    handleToImage(req, res, { html })
}