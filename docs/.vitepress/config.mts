export default {
    lang: 'en-US',
    title: 'Smooth loader',
    description:
        'Smooth loader allows you smoothly lazy load images and background images',
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

    lastUpdated: true,

    sitemap: {
        hostname: 'https://smooth-loader.codeberg.page',
    },

    themeConfig: {
        logo: '/images/favicon.png',

        footer: {
            message:
                'Released under the <a href="https://codeberg.org/smooth-loader/smooth-loader/src/branch/master/LICENSE" target="_blank">MIT License</a>',
            copyright:
                'Copyright © 2018 - present <a href="https://serhiicho.com/about-me" target="_blank">Serhii Cho</a>',
        },

        sidebar: [
            { text: 'Get Started', link: '/get-started' },
            { text: 'Usage Guide', link: '/usage-guide' },
            { text: 'Configurations', link: '/configurations' },
        ],

        nav: [
            {
                text: 'Docs',
                link: '/get-started',
            },
            {
                text: 'Try it',
                link: 'https://codesandbox.io/s/smooth-loader-example-usage-5xr6h',
            },
            {
                text: 'Release Notes',
                link: 'https://codeberg.org/smooth-loader/smooth-loader/src/branch/master/CHANGELOG.md',
            },
        ],

        socialLinks: [
            {
                icon: 'npm',
                ariaLabel: 'NPM',
                link: 'https://www.npmjs.com/package/smooth-loader',
            },
            {
                icon: 'codeberg',
                ariaLabel: 'Codeberg',
                link: 'https://codeberg.org/smooth-loader/smooth-loader',
            },
        ],
    },
}
