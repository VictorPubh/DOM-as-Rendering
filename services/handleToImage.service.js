const nodeHtmlToImage = require("node-html-to-image");
const sharp = require("sharp");

const trimSharp = async (input) => {
    /*
    const flattened = await sharp(input)
        .flatten({ background: { r: 255, g: 0, b: 255 } })
        .removeAlpha()
        .toBuffer()

    return await sharp(flattened)
        .trim()
        .toBuffer((err, data, info) => {
            const crop = {
                left: -info.trimOffsetLeft,
                top: -info.trimOffsetTop,
                width: info.width,
                height: info.height,
            };
            console.log(crop)

            return sharp(input).extract(crop).toBuffer()
    }).toBuffer();
    */

    return sharp(input)
        .png()
        .trim(1)
        .toBuffer()
}

const handleToImage = async (req, res, { html }) => {
    const { trim } = req.query

    const encondig = req.query.encoding ? req.query.encoding : "base64"
    const econdingHandle = {
        'base64': (buffer) => {
            const image = Buffer.from(buffer, 'base64');

            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': image.length
            });
            res.end(image); 
        },

        'binary': (buffer) => {
            res.writeHead(200, { 'Content-Type': 'image/png' })
            res.end(buffer, 'binary')
        }
    }

    const buffer = await nodeHtmlToImage({
        html,
        encondig,
        transparent: true
    })

    const trimBuffer = await trimSharp(buffer)

    econdingHandle[encondig](trim ? trimBuffer : buffer)
}

module.exports = handleToImage;