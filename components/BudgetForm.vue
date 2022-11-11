<template>
  <div class="budgetform_container">
    <div>
        <h4>Beregn din samlede udgift for denne bil</h4>
    </div>
    <div class="form_btn_container" :class="[isOpen ? 'isOpen' : 'notOpen']">
        <button v-if="!isOpen" class="form_btn" :class="[isOpen ? 'isOpen_btn' : 'notOpen_btn']" @click="toggle"><strong>Beregn udgift inkl. førstegangsydelse</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" :class="[isOpen ? 'isOpen_btn' : 'notOpen_btn']" @click="toggle"><strong>Beregn udgift inkl. førstegangsydelse</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <label>Førstegangsydelse</label>
                <input type="text" v-model="firstPayment">
                <label>kr.</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Leasing pr. måned</label>
                <input type="text" v-model="monthlyPayment">
                <label>kr.</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Grøn ejerafgift</label>
                <input type="text" v-model="ejerafgift">
                <label>kr. pr. måned</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Forsikring</label>
                <input type="text" v-model="forsikring">
                <label>kr. pr. måned</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Vælg længde på udgiftperiode:</label>
                <input type="number" v-model="periode">
                <label>måneder</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="result">
                <label>Total:</label>
                <input v-if="forsikring && periode" type="text" v-model="total">
                <input v-else type="text">
                <label>kr. for {{periode}} måneder inkl. førstegangsydelse</label>
            </div>
        </form>
    </div>
    <!-- <div class="form_btn_container">
        <button>Beregn årligt brændstofforbrug<i class="fa fa-angle-down"></i></button>
    </div>
    <div class="form_btn_container">
        <button>Dækopbevaring<i class="fa fa-angle-down"></i></button>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'BudgetForm',
    props: {
        data: {
            type: Array
        }
    },
    data(){
        return{
            carData: this.data[0],
            isOpen: false,
            monthlyPayment: this.data[0].monthlyPayment.toLocaleString('dk-DK'),
            firstPayment: this.data[0].firstPayment.toLocaleString('dk-DK'),
            ejerafgift: this.data[0].semiAnnualVehicleExciseDuty/6,
            forsikring: null,
            periode: null,
        }
    },
    computed: {
        total(){
            let total = ((this.carData.firstPayment/this.periode) + (this.carData.monthlyPayment*this.periode) + (this.ejerafgift*this.periode) + (this.forsikring*this.periode))
            return total.toFixed(2).replace(".", ",");
        }
    },
    methods: {
        toggle(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
