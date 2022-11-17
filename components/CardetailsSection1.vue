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
        <div class="monthly_price">
            <h3><strong>{{carData.monthlyPayment.toLocaleString('de-DE')}} kr./måned</strong></h3>
        </div>
        <div>
            <div class="info">
                <span>Førstegangsydelse</span>
                <span>{{carData.firstPayment.toLocaleString('dk-DK')}} kr.</span>
            </div>
            <div class="info">
                <span>Leasingperiode</span>
                <span>{{carData.leasingPeriod}} mdr.</span>
            </div>
            <div class="info">
                <span>Antal km. pr. år.</span>
                <span v-if="carData.leasingPeriod > 6">{{carData.kmPerYear.toLocaleString('dk-DK')}} km</span>
                <span v-else>{{(carData.kmPerYear*2).toLocaleString('dk-DK')}} km</span>
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

