import { defineClientConfig } from 'vuepress/client'
import smoothLoader from 'smooth-loader'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        router.afterEach(() => runSmoothLoader())
    },

    setup() {
        runSmoothLoader()
    },
})

function runSmoothLoader() {
    setTimeout(() => {
        if (typeof smoothLoader === 'function') {
            smoothLoader()
            return
        }

        console.warn('smooth-loader is not found')
    }, 100)
}