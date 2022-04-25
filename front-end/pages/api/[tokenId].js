export default function handler(req, res) {
  const tokenId = req.query.tokenId
  const image_url = "https://raw.githubusercontent.com/techlab23/lw3-nft-dapp/master/front-end/public/cryptodevs/"
  res.status(200).json({
    name: "Crypto Devs #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  })
}