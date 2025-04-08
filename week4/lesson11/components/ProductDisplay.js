app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- Bind image source and apply class conditionally based on inStock -->
                <img :class="{'out-of-stock-img': !inStock}" v-bind:src="image">
            </div>
            <div class="product-info">
                <!-- Display product brand and name -->
                <h1>{{ title }}</h1>
                <!-- Display sale message if the onSale property is true -->
                <p v-if="onSale">{{ sale }}</p>
                <!-- Display product description -->
                <p>{{ description }}</p>
                <a :href="url">001340185</a>
                <!-- Conditional rendering based on inventory value -->
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>
                <!-- Use the product-details component to display product details -->
                <product-details :details="details"></product-details>
                <!-- Loop through sizes array and display each size -->
                <ul>
                <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
                </ul>
                <!-- Loop through variants array and display each variant color -->
                <div 
                v-for="(variant, index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color }">
                </div>
                
                <!-- Button to add item to cart, 
                apply 'disabledButton' class if not in stock, 
                and disable button if not in stock -->
                <button 
                class="button" 
                :class="{disabledButton: !inStock}"
                :disabled="!inStock"
                v-on:click="addToCart"
                >Add to Cart
                </button>
                <!-- Button to remove item from cart -->
                <button class="button" v-on:click="removeFromCart">Remove Item</button>
            </div>
        </div>
        <!-- Use the review-list component to display reviews -->
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <!-- Use the review-form component to submit a review -->
        <review-form @review-submitted="addReview"></review-form>
    </div>`,

    // Define the data function
    data() {
        // Return an object containing the data properties
        return {
            // Define the data properties
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
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            // Array to hold reviews
            reviews: []
        }
    },
    
    // Define the methods object
    methods: {
        // Method to add item to cart
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        // Method to update the selected variant
        updateVariant(index) {
            this.selectedVariant = index;
        },
        // Method to remove item from cart
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        // Method to add a review
        addReview(review) {
            this.reviews.push(review);
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
        // Computed property to get shipping cost
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 2.99;
        }
    }
})