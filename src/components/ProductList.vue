<template>
  <div class="product_list">
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <ul v-else>
      <li v-for="(product, index) in products" :key="index">
        {{ product.title }} - {{ product.price | currency}} - {{product.inventory}}
        <button 
        :disabled = "!productIsInStock(product)"
        @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/index'
import {mapState,mapGetters,mapActions} from 'vuex'


export default {
  data() {
    return {
      loading: false,
    };
  },
   computed: {
   ...mapState({
       products: state => state.products.items
   }),

   ...mapGetters('products',{
     productIsInStock : 'productIsInStock'  
   })
  },

  methods: {
      ...mapActions({
     fetchProducts: 'products/fetchProducts',
    addProductToCart: 'cart/addProductToCart'
      }),
  },
 
  created() {
    this.loading = true;
    this.fetchProducts().then(() => this.loading = false);
  },
};
</script>

<style>
li{
    list-style: none;
}
</style>