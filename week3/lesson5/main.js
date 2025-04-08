const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ]
        }
    }
})