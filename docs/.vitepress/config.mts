import type { HeadConfig, TransformContext } from 'vitepress'

const hostname = 'https://smooth-loader.serhiicho.com'

function setCanonicalTag(page: string): string {
    page = page.replace('.md', '.html')
    return page == 'index.html' ? hostname : `${hostname}/${page}`
}

export default {
    lang: 'en-US',
    title: 'Smooth loader',
    description:
        'Smooth loader allows you smoothly lazy load images and background images',

    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

    transformHead: (ctx: TransformContext) => {
        const head: HeadConfig[] = []
        head.push(['link', { rel: 'canonical', href: setCanonicalTag(ctx.page) }])
        return head
    },

    lastUpdated: true,

    sitemap: {
        hostname,
    },

    themeConfig: {
        logo: '/images/favicon.png',

        footer: {
            message:
                'Released under the <a href="https://github.com/smooth-loader/smooth-loader/blob/master/LICENSE" target="_blank">MIT License</a>',
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
                link: 'https://github.com/smooth-loader/smooth-loader/blob/master/CHANGELOG.md',
            },
        ],

        socialLinks: [
            {
                icon: 'npm',
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
