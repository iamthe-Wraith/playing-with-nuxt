// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint'],
    devtools: { enabled: true },
    compatibilityDate: '2025-05-15',
    css: ['@picocss/pico'],
    eslint: {
        config: {
            stylistic: {
                semi: true,
                quotes: 'single',
                indent: 4,
                commaDangle: 'always-multiline',
            },
        },
    },
});
