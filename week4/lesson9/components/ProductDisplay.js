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
        <img :class="{'out-of-stock-img': !inStock}" :src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">{{ sale }}</p>
        <p>{{ description }}</p>
        <a :href="url">001340185</a>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <!-- Chi tiết sản phẩm -->
        <product-details :details="details"></product-details>

        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>

        <!-- NÚT ADD TO CART -->
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>

        <!-- NÚT REMOVE ITEM -->
        <button class="button" @click="removeFromCart">
          Remove Item
        </button>
      </div>
    </div>
  </div>`,

  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'A pair of warm, fuzzy socks',
      selectedVariant: 0,
      url: 'https://www.google.com',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10 },
        { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg',  quantity: 0 }
      ]
    }
  },

  methods: {
    addToCart() {
      // Lấy variant hiện tại
      const currentVariant = this.variants[this.selectedVariant]
      
      // Nếu còn hàng thì giảm đi 1
      if (currentVariant.quantity > 0) {
        currentVariant.quantity--
        
        // Báo lên component cha cập nhật giỏ hàng
        this.$emit('add-to-cart')
      }
    },

    removeFromCart() {
      // Tuỳ ý bạn muốn xử lý ra sao khi remove
      // Ví dụ: Tăng lại số lượng trong stock
      const currentVariant = this.variants[this.selectedVariant]
      currentVariant.quantity++
      
      // Báo lên component cha để giảm giỏ hàng
      this.$emit('remove-from-cart')
    },

    updateVariant(index) {
      this.selectedVariant = index
    }
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    sale() {
      if (this.onSale) {
        return this.title + ' are on sale!'
      }
      return ''
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0
    },
    shipping() {
      return this.premium ? 'Free' : 2.99
    }
  }
})
