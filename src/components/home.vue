<template>
  <div class="home">
    <h4>Welcome to our home page</h4>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data, index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
        <h3>{{ data.productName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return { 
      title: 'home',
      products: [
        {
          productName: "Latte Coffee",
          image: require('../assets/latte-coffee.jpeg')
        },
        {
          productName: "Capuccino",
          image: require('../assets/capuccino.jpg')
        },
        {
          productName: "Espresso",
          image: require('../assets/espresso.jpg')
        },
        {
          productName: "Coffee Crust",
          image: require('../assets/burnt-coffee.jpg')
        },
        {
          productName: "Machiato",
          image: require('../assets/machiato.jpg')
        },
        {
          productName: "Mochiato",
          image: require('../assets/mochiato.jpg')
        }
    
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  color: white;
}

</style>
