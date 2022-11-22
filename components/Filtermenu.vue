<template>
  <div class="filtermenu_container">
    <h5>Filtrér</h5>
    <div class="filtermenu_brand">
      <button class="filtermenu_btn"><strong>Mærke</strong></button>
      <form class="form_brand">
        <div class="checkbox" v-for="brand in brands" :key="brand">
          <input type="checkbox" :value="brand" v-model="formdata_brands" :true-value="brand" @change="filter">
          <label>{{brand}}</label>
        </div>
      </form>
    </div>
    <div class="nulstil_btn_container">
      <button class="nulstil_btn" @click="nulstil">Nulstil filtrering</button>
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
        this.$store.commit('saveFilter', this.formdata_brands);
      },
      nulstil(){
        window.document.location.reload();
      }
    }
}
</script>

