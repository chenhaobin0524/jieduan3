<template>
  <div>
    <Search />
    <Banner />
    <Grid />
    <Images />
    <Card />
    <Divider />
    <Shop />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Banner from "../components/Banner.vue";
import Images from "../components/Image.vue";
import Shop from "../components/Shop.vue";
export default {
  components: {
    Search,
    Banner,
    Images,
    Grid,
    Divider,
    Card,
    Shop
  }
};
</script>