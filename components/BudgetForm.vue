<template>
  <div class="budgetform_container">
    <h4>Beregn udgiften/budgettet for denne bil</h4>
    <div class="form_btn_container" :class="[isOpen_1 ? 'isOpen_1' : 'notOpen']">
        <button v-if="!isOpen_1" class="form_btn" @click="toggle1"><strong>Beregn udgiften/budgettet for at lease denne bil</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle1"><strong>Beregn udgiften/budgettet for at lease denne bil</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Førstegangsydelse:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="firstPayment" readonly>
                    <label>kr.</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Leasingpris pr. måned:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="monthlyPayment" readonly>
                    <label>kr.</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Grøn ejerafgift:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="ejerafgift" readonly>
                    <label>kr. pr. måned</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Forsikring:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="forsikring">
                    <label>kr. pr. måned</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Ønsket budgetperiode:</label>
                </div>
                <div class="form_input_text">
                    <input type="number" v-model="periode" min="1">
                    <label>måneder</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="result">
                <div class="form_input_heading">
                    <label>Total:</label>
                </div>
                <div class="form_input_text">
                    <input v-if="forsikring && periode" type="text" v-model="total">
                    <input v-else type="text">
                    <label v-if="periode > 1">kr. for {{periode}} måneder</label>
                    <label v-else-if="periode == 1">kr. for {{periode}} måned</label>
                    <label v-else>kr.</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
        </form>
    </div>
    <div class="form_btn_container" :class="[isOpen_2 ? 'isOpen_2' : 'notOpen']">
        <button v-if="!isOpen_2" class="form_btn" @click="toggle2"><strong>Beregn årligt brændstofforbrug</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle2"><strong>Beregn årligt brændstofforbrug</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Antal km årligt:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="kmYear">
                    <label>km</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Brændstofpris:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="fuelPrice">
                    <label>kr./l</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Km/l:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="carData.fuelEfficiency" readonly>
                    <label>km/l</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="result">
                <div class="form_input_heading">
                    <label>Totalt brændstofforbrug:</label>
                </div>
                <div class="form_input_text">
                    <input v-if="kmYear && fuelPrice" type="text" v-model="total_fuel">
                    <input v-else type="text">
                    <label>kr. årligt</label>
                </div>
            </div>
            <div class="total">
                <div class="form_input_heading">
                    <label>Samlet pris:</label>
                </div>
                <div class="form_input_text">
                    <input v-if="total && kmYear && fuelPrice" type="text" v-model="total_all">
                    <input v-else type="text">
                    <label v-if="periode > 1">kr. for {{periode}} måneder</label>
                    <label v-else-if="periode == 1">kr. for {{periode}} måned</label>
                    <label v-else>kr.</label>
                </div>
            </div>
        </form>
    </div>
 <div class="form_btn_container" :class="[isOpen_3 ? 'isOpen_3' : 'notOpen']">
        <button v-if="!isOpen_3" class="form_btn" @click="toggle3"><strong>Dækopbevaring</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle3"><strong>Dækopbevaring</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Dækopbevaring</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="tyrestorage">
                    <label>kr. årligt</label>
                    <label><i class="fa fa-info-circle"></i></label>
                </div>
            </div>
            <div class="total">
                <div class="form_input_heading">
                    <label>Samlet pris:</label>
                </div>
                <div class="form_input_text">
                    <input v-if="(forsikring && periode) || (kmYear && fuelPrice)" type="text" v-model="total_with_tyrestorage">
                    <input v-else type="text">
                    <label v-if="periode > 1">kr. for {{periode}} måneder</label>
                    <label v-else-if="periode == 1">kr. for {{periode}} måned</label>
                    <label v-else>kr.</label>
                </div>
            </div>
        </form>
    </div>
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
            tyrestorage: 2000,
        }
    },
    computed: {
        total(){
            let total = ((this.carData.firstPayment/this.periode) + (this.carData.monthlyPayment*this.periode) + (this.ejerafgift*this.periode) + (this.forsikring*this.periode))
            return total.toFixed(2);
        },
        total_fuel(){
            let total_fuel = ((this.kmYear/this.carData.fuelEfficiency)*this.fuelPrice)
            return total_fuel.toFixed(2);
        },
        total_all(){
            let total1 = parseFloat(this.total);
            let total_fuel = parseFloat(this.total_fuel);
            let periode = parseFloat(this.periode);
            let total_all = total1 + ((total_fuel/12)*periode);
            return total_all.toFixed(2);
        },
        total_with_tyrestorage(){
            let tyrestorage = parseFloat(this.tyrestorage);
            let total_all = parseFloat(this.total_all);
            let periode = parseFloat(this.periode);
            console.log(typeof(tyrestorage));
            console.log(typeof(total_all));
            let total_with_tyrestorage = total_all + ((tyrestorage/12)*periode);
            return total_with_tyrestorage.toFixed(2);
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
