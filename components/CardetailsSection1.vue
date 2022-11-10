<template>
  <div class="cardetailsSection1_container row">

    <div class="cardetailsSection1_container1 col-lg-6">
        <img :src="`${carData.image.url}`" :alt="carData.brandName">
    </div>
    
    <div class="cardetailsSection1_container2 col-lg-6">
        <div class="heading">
            <h1><strong>{{carData.brandName + ' ' + carData.name.trimStart().split(" ")[0]}}</strong></h1>
            <h2>{{carData.name.trimStart()}}</h2>
        </div>
        <div class="price">
            <h3><strong>{{carData.monthlyPayment}} kr./måned</strong></h3>
        </div>
        <div class="price2">
            <div>
                <span>Førstegangsydelse</span>
                <span>{{carData.firstPayment}} kr.</span>
            </div>
        </div>
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

