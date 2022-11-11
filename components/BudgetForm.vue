<template>
  <div class="budgetform_container">
    <div>
        <h4>Beregn udgiften/budgettet for denne bil</h4>
    </div>
    <div class="form_btn_container" :class="[isOpen_1 ? 'isOpen' : 'notOpen']">
        <button v-if="!isOpen" class="form_btn" @click="toggle1"><strong>Beregn udgiften/budgettet for at lease denne bil</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle1"><strong>Beregn udgiften/budgettet for at lease denne bil</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <label>Førstegangsydelse</label>
                <input type="text" v-model="firstPayment" readonly>
                <label>kr.</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Leasingpris pr. måned</label>
                <input type="text" v-model="monthlyPayment" readonly>
                <label>kr.</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Grøn ejerafgift</label>
                <input type="text" v-model="ejerafgift" readonly>
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
                <label>Ønsket budgetperiode:</label>
                <input type="number" v-model="periode" min="1">
                <label>måneder</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="result">
                <label>Total:</label>
                <input v-if="forsikring && periode" type="text" v-model="total">
                <input v-else type="text">
                <label v-if="periode > 1">kr. for {{periode}} måneder inkl. førstegangsydelse</label>
                <label v-else>kr. for {{periode}} måned inkl. førstegangsydelse</label>
            </div>
        </form>
    </div>
    <div class="form_btn_container" :class="[isOpen_2 ? 'isOpen' : 'notOpen']">
        <button v-if="!isOpen" class="form_btn" @click="toggle2"><strong>Beregn årligt brændstofforbrug</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle2"><strong>Beregn årligt brændstofforbrug</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <label>Antal km årligt</label>
                <input type="text" v-model="kmYear">
                <label>km</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Brændstofpris</label>
                <input type="text" v-model="fuelPrice">
                <label>kr./l</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="form_input">
                <label>Km/l</label>
                <input type="text" v-model="carData.fuelEfficiency" readonly>
                <label>km/l</label>
                <label><i class="fa fa-info-circle"></i></label>
            </div>
            <div class="result">
                <label>Total:</label>
                <input v-if="kmYear && fuelPrice" type="text" v-model="total_fuel">
                <input v-else type="text">
                <label>kr. årligt</label>
            </div>
        </form>
    </div>
    <!-- <div class="form_btn_container">
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
            isOpen_1: false,
            isOpen_2: false,
            isOpen_3: false,
            monthlyPayment: this.data[0].monthlyPayment.toLocaleString('dk-DK'),
            firstPayment: this.data[0].firstPayment.toLocaleString('dk-DK'),
            ejerafgift: this.data[0].semiAnnualVehicleExciseDuty/6,
            forsikring: null,
            periode: null,
            kmYear: null,
            fuelPrice: null,
        }
    },
    computed: {
        total(){
            let total = ((this.carData.firstPayment/this.periode) + (this.carData.monthlyPayment*this.periode) + (this.ejerafgift*this.periode) + (this.forsikring*this.periode))
            return total.toFixed(2).replace(".", ",");
        },
        total_fuel(){
            let total_fuel = ((this.kmYear/this.carData.fuelEfficiency)*this.fuelPrice)
            return total_fuel.toFixed(2).replace(".", ",");
        }
    },
    methods: {
        toggle1(){
            this.isOpen_1 = !this.isOpen_1;
        },
        toggle2(){
            this.isOpen_2 = !this.isOpen_2;
        },
        toggle3(){
            this.isOpen_3 = !this.isOpen_3;
        }
    }
}
</script>
