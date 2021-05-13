
let BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCaterogies: async () => {
        const res = await fetch(`${BASE}/categories`)
        const json = await res.json()

        return json

    }
}