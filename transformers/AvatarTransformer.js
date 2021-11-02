/**
 * Transforms img#avatar by setting the src attribute.
 */
const avatarSrc = "https://raw.githubusercontent.com/coding-to-music/CF-Workers-Linktree/master/img/coding-to-music_avatar.jpg"

class AvatarTransformer {

    /**
     * Inserts an avatar by setting img#avatar src attribute
     * @param element
     */
    async element(element) {
        element.setAttribute("src", avatarSrc)
    }
}

module.exports = AvatarTransformer
