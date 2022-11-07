<template>
  <div>
    <h1>Cardetails</h1>
  </div>
</template>

<script>
export default {
    name: 'Cardetails',
    data(){
        return{
            // id: this.$forceUpdate.query.id,
            car: null,
        }
    },
    // mounted(){
    //     this.car = this.$store.getters.getCar(this.id);
    // }

}
</script>
