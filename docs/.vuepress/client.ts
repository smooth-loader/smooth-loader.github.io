import { defineClientConfig } from 'vuepress/client'
import smoothLoader from 'smooth-loader'

export default defineClientConfig({
    setup() {
        window.setTimeout(() => {
            smoothLoader()
        }, 100)
    },
})