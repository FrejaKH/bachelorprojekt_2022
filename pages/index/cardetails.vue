<template>
  <div id="cardetails_container">
    <BackBtn/>
    <CardetailsSection1 :data="getCar"/>
    <QR :data="getCar"/>
    <BudgetForm :data="getCar"/>
    <Specifikationer :data="getCar"/>
  </div>
</template>

<script>

import BackBtn from '../../components/BackBtn.vue';
import CardetailsSection1 from '../../components/CardetailsSection1.vue';
import QR from '../../components/QR.vue';
import BudgetForm from '../../components/BudgetForm.vue';
import Specifikationer from '../../components/Specifikationer.vue';

export default {
    name: 'Cardetails',
    components: {
      BackBtn,
      CardetailsSection1,
      QR,
      BudgetForm,
      Specifikationer,
    },
    data(){
        return{
            id: this.$route.query.id,
            car: null,
        }
    },
    computed: {
      getCar(){
        return this.car = this.$store.getters.getCar(this.id);
      }

    }

}
</script>
