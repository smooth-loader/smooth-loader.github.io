export default {
    lang: 'en-US',
    title: 'Smooth loader',
    description:
        'Smooth loader allows you smoothly lazy load images and background images',
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

    lastUpdated: true,

    sitemap: {
        hostname: 'https://smooth-loader.github.io',
    },

    themeConfig: {
        logo: '/images/favicon.png',

        footer: {
            message:
                'Released under the <a href="https://github.com/smooth-loader/smooth-loader/blob/main/LICENSE" target="_blank">MIT License</a>',
            copyright:
                'Copyright © 2018 - present <a href="https://serhii.io/about-me" target="_blank">Sergey Chornenkyi (Serhii Cho)</a>',
        },

        nav: [
            {
                text: 'Docs',
                link: '/documentation',
            },
            {
                text: 'Try it',
                link: 'https://codesandbox.io/s/smooth-loader-example-usage-5xr6h',
            },
            {
                text: 'Release Notes',
                link: 'https://github.com/smooth-loader/smooth-loader/blob/master/CHANGELOG.md',
            },
        ],

        socialLinks: [
            {
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256"><g><polygon fill="#C12127" points="0 256 0 0 256 0 256 256"></polygon><polygon fill="#FFFFFF" points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"></polygon></g></svg>`,
                },
                ariaLabel: 'NPM',
                link: 'https://www.npmjs.com/package/smooth-loader',
            },
            {
                icon: 'github',
                ariaLabel: 'GitHub',
                link: 'https://github.com/smooth-loader/smooth-loader',
            },
        ],
    },
}
