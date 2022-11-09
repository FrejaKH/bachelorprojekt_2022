<template>
  <div class="filtermenu_container">

    <div class="filtermenu_brand">
      <button class="filtermenu_btn">Mærke<i class="fa fa-angle-down"></i></button>
      <form class="form_brand">
        <div class="checkbox" v-for="brand in brands" :key="brand">
          <input type="checkbox" :value="brand" v-model="formdata_brands" :true-value=brand @change="filter">
          <label>{{brand}}</label>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

export default {
    name: 'Filtermenu',
    data(){
      return{
        formdata_brands: [],
      }
    },
    computed: {
      brands(){
        return this.$nuxt.$store.state.brands;
      }
    },
    created(){
      this.$store.commit('setBrands');
      this.$store.commit('setFilteredCars');
    },
    methods:{
      filter(){
        this.$store.commit('saveFilter', this.formdata_brands)
      }
    }

}
</script>
