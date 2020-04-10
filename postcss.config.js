// https://janaksingh.com/blog/hugo-css-concat-minify-purgecss-tutorial/
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './layouts/**/*.html',
                './assets/scss/*.scss',
                './assets/js/*.js'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
};