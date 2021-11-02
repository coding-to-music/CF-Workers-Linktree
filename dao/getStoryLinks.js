/**
 * Returns an array of links that represent stories of Linktree for /links endpoint
 * @type {({name: string, url: string}[])}
 */

function getLinksEndpoint() {
    return [
        {
            "name": "Source Code: Cloudflare Worker Based Linktree",
            "url": "https://github.com/coding-to-music/CF-Workers-Linktree"
        },
        {
            "name": "Learn Something New: How To Brew",
            "url": "http://www.howtobrew.com/"
        }
    ]
}

module.exports = getLinksEndpoint()
