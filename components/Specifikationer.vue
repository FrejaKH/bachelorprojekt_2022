<template>
    <div>
        <div class="specifications_container">
            <div class="specifications_heading1">
                <h4>Om denne bil</h4>
            </div>
            <div class="specifications">
                <div class="specifications_heading2">
                    <h5>Specifikationer</h5>
                </div>
                <div class="specifications_data">
                    <div class="data_wrapper">
                        <p>Antal km. pr. år.</p>
                        <p>{{carData.kmPerYear.toLocaleString('dk-DK')}} km</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Leasingperiode</p>
                        <p>{{carData.leasingPeriod}} mdr.</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Brændstof</p>
                        <p>{{carData.fuelType}}</p>
                    </div>
                    <div class="data_wrapper">
                        <p>CO2 (g/km)</p>
                        <p>{{carData.cO2}} g/km</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Energimærke</p>
                        <p>{{carData.energyRating}}</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Farve</p>
                        <p>{{carData.colour}}</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Gear</p>
                        <p>{{carData.gearType}}</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Brændstofforbrug</p>
                        <p>{{carData.fuelEfficiency}} km/l</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Antal døre/variant</p>
                        <p>{{carData.doorsOrVariant}}</p>
                    </div>
                    <div class="data_wrapper">
                        <p>Grøn ejerafgift (halvårlig)</p>
                        <p>{{carData.semiAnnualVehicleExciseDuty}} kr.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="whitespace"></div>
    </div>
</template>

<script>
export default {
    name: 'Udstyr',
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

<style>

</style>