<template>
  <div class="shopping_cart">
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button @click="checkout">CheckOut</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    methods:{
        ...mapActions('cart',['checkout'])
    },
  computed: {
      ...mapGetters('cart',{
          products : 'cartProducts',
          total: 'cartTotal'
      }),
      ...mapState('cart',{
          checkoutStatus: state => state.checkoutStatus
      })
  },
};
</script>

<style>
</style>