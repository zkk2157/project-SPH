<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import Footer from "@/pages/Home/Footer"
import {mapState} from "vuex"
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
    Footer
  },
  mounted(){
    this.$store.dispatch("getFloorList")
  },
  computed:{
    ...mapState({
      floorList:(state)=>{
        return state.home.floorList
      }
    })
  }
};
</script>

<style>
</style>