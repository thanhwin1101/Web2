// Create a new Vue application instance
const app = Vue.createApp({
    // Define the data function
    data: function() {
        // Return an object containing the data properties
        return {
            // Define the data properties
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A pair of warm, fuzzy socks',
            // Index of the selected variant
            selectedVariant: 0,
            url: 'https://www.google.com',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ]
        }
    },
    // Define the methods object
    methods: {
        // Method to add item to cart
        addToCart() {
            this.cart += 1;
        },
        // Method to update the selected variant
        updateVariant(index) {
            this.selectedVariant = index;
        },
        // Method to remove item from cart
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    },

    // Define the computed properties
    computed: {
        // Computed property to get the full title
        title() {
            return this.brand + ' ' + this.product
        },
        // Computed property to get the sale message
        sale() {
            if (this.onSale) {
                return this.title + ' are on sale!';
            }
            return '';
        },
        // Computed property to get the image of the selected variant
        image() {
            return this.variants[this.selectedVariant].image;
        },
        // Computed property to check if the selected variant is in stock
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
    }
})