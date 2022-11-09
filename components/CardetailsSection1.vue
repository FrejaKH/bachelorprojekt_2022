<template>
  <div class="cardetailsSection1_container row">

    <div class="cardetailsSection1_container1 col-lg-6">
        <img :src="`${carData.image.url}`" :alt="carData.brandName">
    </div>
    
    <div class="cardetailsSection1_container2 col-lg-6">

    </div>

  </div>
</template>

<script>
export default {
    name: 'CardetailsSection1',
    props: {
        data: {
            type: Array
        }
    },
    data(){
        return{
            carData: this.data[0]
        }
    },

}
</script>

