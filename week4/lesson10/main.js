// Create a new Vue application instance
const app = Vue.createApp({
    // Define the data function
    data: function() {
        // Return an object containing the data properties
        return {
            // Define the data properties
            cart: [],
            premium: true
        }
    },
    // Define the methods object
    methods: {
        // Method to add an item to the cart
        updateCart(id) {
            this.cart.push(id);
        },
        // Method to remove an item from the cart by id
        removeCartById(id) {
            // Find the index of the item in the cart array
            const index = this.cart.indexOf(id);
            if (index > -1) {
                // Remove the item from the cart array if it exists
                this.cart.splice(index, 1);
            }
        }
    }
})