app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <!-- Input field for name -->
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <!-- Textarea for review -->
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <!-- Select dropdown for rating -->
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
  
  <!-- Select dropdown for recommendation -->
  <label for="recommend">Would you recommend this product?</label>
  <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
  </select>

  <!-- Submit button -->
  <input class="button" type="submit" value="Submit">  

  </form>`,
  // Define the data properties
  data() {
    return {
      // Initialize the data properties
      name: '',
      review: '',
      rating: null,
      recommend: null
    }
  },

  // Define the methods
  methods: {
    onSubmit() {
      // Check if any field is empty
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      // Create a product review object
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend

      }
      // Emit the review-submitted event with the product review object
      this.$emit('review-submitted', productReview)

      // Reset the form fields
      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = null
    }
  }
})