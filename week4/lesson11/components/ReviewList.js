// Define the 'review-list' component
app.component('review-list', {
    // Define the props the component accepts
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },

    // Define the template for the component
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <!-- Loop through the reviews array and display each review -->
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.review }}"
          <br/>
          Recommended: {{ review.recommend }}
        </li>
      </ul>
    </div>
  `
  })