/**
 * Returns an array of links that represent stories of Linktree for /links endpoint
 * @type {({name: string, url: string}[])}
 */

function getLinksEndpoint() {
    return [
        {
            "name": "Source Code: Cloudflare Worker Based Linktree (this page)",
            "url": "https://github.com/coding-to-music/CF-Workers-Linktree"
        },
        {
            "name": "Essay: Summer Camp for all rather than UBI",
            "url": "https://medium.com/@connors.tom/thought-experiment-summer-camp-for-all-rather-than-universal-basic-income-a1f2eb1df017"
        },
        {
            "name": "Documentation: Making Sense of the Pandemic",
            "url": "https://pandemic-overview.readthedocs.io/en/latest/"
        },
        {
            "name": "About Tom Connors",
            "url": "https://pandemic-overview.readthedocs.io/en/latest/Help-about/help.html"
        },
        {
            "name": "This is what I am working on",
            "url": "https://pandemic-overview.readthedocs.io/en/latest/Help-about/help.html#this-is-what-i-am-working-on"
        },
        {
            "name": "My Searchable Issues - lots of great technical info",
            "url": "https://github.com/coding-to-music/coding-to-music.github.io/issues"
        }
    ]
}

module.exports = getLinksEndpoint()
