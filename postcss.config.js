// https://janaksingh.com/blog/hugo-css-concat-minify-purgecss-tutorial/
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './layouts/**/*.html',
                './assets/js/**/*.js'
            ]
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
};