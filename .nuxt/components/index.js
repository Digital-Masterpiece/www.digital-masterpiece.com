export { default as DmHeader } from '../../components/DMHeader.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyDmHeader = import('../../components/DMHeader.vue' /* webpackChunkName: "components/DMHeader" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
