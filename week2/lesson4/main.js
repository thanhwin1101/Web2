
const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inventory: 100,
            onSale: true,
        }
    }
})