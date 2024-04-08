import { defineClientConfig } from 'vuepress/client'
import smoothLoader from 'smooth-loader'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        router.afterEach(() => {
            smoothLoader()
        })
    },
    setup() {
        window.setTimeout(() => {
            smoothLoader()
        }, 100)
    },
    rootComponents: [],
})