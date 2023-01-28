const IN_PRODUCTION = process.env.NODE_ENV === "production";
module.exports = {
    lintOnSave: false,
    publicPath: IN_PRODUCTION ? '/profile/': '/',
}