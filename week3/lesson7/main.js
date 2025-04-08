// Create a new Vue application instance
const app = Vue.createApp({
    // Define the data function
    data: function() {
        // Return an object containing the data properties
        return {
            // Define the data properties
            cart: 0,
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            //inventory: 100,
            inStock: false,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ]
        }
    },
    // Define the methods object
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        }
    }
})