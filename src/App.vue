<template>
  <div id="app">
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: row wrap;
;
}
 .shopping_cart{
  border: 1px solid black;
  
  justify-content: center;
  margin-left: auto;
}
.product_list{
 border: 1px solid black;
justify-content: center;
margin-left: auto; 
}

</style>
