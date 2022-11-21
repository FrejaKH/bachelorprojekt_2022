<template>
  <div class="budgetform_container">
    <h4>Beregn udgiften/budgettet for denne bil</h4>
    <div class="form_btn_container" :class="[isOpen_1 ? 'isOpen_1' : 'notOpen']">
        <button v-if="!isOpen_1" class="form_btn" @click="toggle1"><strong>Beregn bilbudget</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle1"><strong>Beregn bilbudget</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Førstegangsydelse:</label>
                </div>
                <div class="form_input_text">
                    <p>{{carData.firstPayment.toLocaleString('dk-DK')}}</p>
                    <p>kr.</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_firstPayment"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Leasingpris:</label>
                </div>
                <div class="form_input_text">
                    <p>{{carData.monthlyPayment.toLocaleString('dk-DK')}}</p>
                    <p>kr. pr. måned</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_leasingpris"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Grøn ejerafgift:</label>
                </div>
                <div class="form_input_text">
                    <p v-if="Number.isInteger(carData.semiAnnualVehicleExciseDuty/6)">{{(carData.semiAnnualVehicleExciseDuty/6)}}</p>
                    <p v-else>{{(carData.semiAnnualVehicleExciseDuty/6).toFixed(2).replace('.', ',')}}</p>
                    <p>kr. pr. måned</p>
                   <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_ejerafgift"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Forsikring:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="forsikring">
                    <p>kr. pr. måned</p>
                   <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_forsikring"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Ønsket budgetperiode:</label>
                </div>
                <div class="form_input_text">
                    <select v-model="periode" class="dropdown">
                        <option disabled value="vaelg">Vælg</option>
                        <option :value="monthly">Månedlig</option>
                        <option :value="yearly">Årlig</option>
                        <option :value="leasingPeriod">Hele leasingperioden</option>
                    </select>
                    <p class="empty_text">&nbsp;</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_periode"></i>
                </div>
            </div>
            <div class="result">
                <div class="result_heading">
                    <label>Total:</label>
                </div>
                <div class="result_text">
                    <p v-if="periode != 'vaelg'" >{{total_car.toFixed(2).replace('.',',')}}</p>
                    <p v-else></p>
                    <p v-if="periode > 1">kr. for {{periode}} måneder *</p>
                    <p v-else-if="periode == 1">kr. pr. måned *</p>
                    <p v-else>kr. *</p>
                </div>
            </div>
            <div class="obs_text">
                <p>*Prisen er inklusiv førstegangsydelse, som er fordelt ud over hele leasingperioden</p>
            </div>
        </form>
    </div>
    <div class="form_btn_container" :class="[isOpen_2 ? 'isOpen_2' : 'notOpen']" v-if="carData.fuelType == ('Benzin' || 'Diesel')">
        <button v-if="!isOpen_2" class="form_btn" @click="toggle2"><strong>Beregn brændstofforbrug</strong><i class="fa fa-angle-down"></i></button>
        <button v-else class="form_btn" @click="toggle2"><strong>Beregn brændstofforbrug</strong><i class="fa fa-angle-up"></i></button>
        <form>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Antal km årligt:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="kmYear">
                    <p>km</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_kmYear"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Brændstofpris:</label>
                </div>
                <div class="form_input_text">
                    <input type="text" v-model="fuelPrice">
                    <p>kr./l</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_fuelPrice"></i>
                </div>
            </div>
            <div class="form_input">
                <div class="form_input_heading">
                    <label>Km/l:</label>
                </div>
                <div class="form_input_text">
                    <p>{{carData.fuelEfficiency.toLocaleString('dk-DK')}}</p>
                    <p>km/l</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modalbox_km_l"></i>
                </div>
            </div>
            <div class="result">
                <div class="result_heading">
                    <label>Totalt brændstofforbrug:</label>
                </div>
                <div class="result_text">
                    <p v-if="kmYear && fuelPrice">{{total_fuel.toFixed(2).replace('.',',')}}</p>
                    <p v-else></p>
                    <p>kr. pr. måned</p>
                </div>
            </div>
            <div class="total">
                <div class="result_heading">
                    <label>Samlet pris:</label>
                </div>
                <div class="result_text">
                    <p v-if="total_car && total_fuel">{{total_car_and_fuel.toFixed(2).replace('.',',')}}</p>
                    <p v-else></p>
                    <p v-if="periode > 1">kr. for {{periode}} måneder</p>
                    <p v-else-if="periode == 1">kr. pr. måned</p>
                    <p v-else>kr.</p>
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
                    <p>{{tyrestorage.toFixed(2).replace('.',',')}}</p>
                    <p>kr. pr. måned</p>
                    <i class="fa fa-info-circle" aria-hidden="true" @click="modal_tyrestorage"></i>
                </div>
            </div>
            <div class="total">
                <div class="result_heading">
                    <label>Samlet pris:</label>
                </div>
                <div class="result_text">
                    <p v-if="total_car_and_fuel">{{total_with_tyrestorage.toFixed(2).replace('.',',')}}</p>
                    <p v-else></p>
                    <p v-if="periode > 1">kr. for {{periode}} måneder</p>
                    <p v-else-if="periode == 1">kr. pr. måned</p>
                    <p v-else>kr.</p>
                </div>
            </div>
        </form>
    </div>
    <div class="modalbox_bg" :class="[this.info == null ? 'closeModal' : 'openModal']" @click="closeModal">
        <div class="modalbox">
            <div class="modalbox_x">
                <i class="fa fa-times" aria-hidden="true" @click="closeModal"></i>
            </div>
            <h6><strong>{{modalTitle}}</strong></h6>
            <p>{{modalText}}</p>
        </div>
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
            forsikring: 361,
            periode: 'vaelg',
            monthly: 1,
            yearly: 12,
            leasingPeriod: this.data[0].leasingPeriod,
            kmYear: null,
            fuelPrice: null,
            tyrestorage: 796/6,
            info: null,
            modalTitle: null,
            modalText: null,
        }
    },
    computed: {
        total_car(){
            let total = ((this.carData.firstPayment/this.carData.leasingPeriod) + (this.carData.monthlyPayment*this.periode) + ((this.carData.semiAnnualVehicleExciseDuty/6)*this.periode) + (this.forsikring*this.periode))
            return total;
        },
        total_fuel(){
            let total_fuel;
            if(this.fuelPrice != null){
                total_fuel = (((this.kmYear/this.carData.fuelEfficiency)*this.fuelPrice.replace(',','.'))/12)
            }else{
                total_fuel = (((this.kmYear/this.carData.fuelEfficiency)*this.fuelPrice)/12)
            }

            return total_fuel;
        },
        total_car_and_fuel(){
            let total_car = parseFloat(this.total_car);
            let total_fuel = parseFloat(this.total_fuel);
            let total_car_and_fuel = total_car + (total_fuel*this.periode);
            return total_car_and_fuel;
        },
        total_with_tyrestorage(){
            let tyrestorage = parseFloat(this.tyrestorage);
            let total_car_and_fuel = parseFloat(this.total_car_and_fuel);
            let total_with_tyrestorage = total_car_and_fuel + (tyrestorage*this.periode);
            return total_with_tyrestorage;
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
        },
        modalbox_firstPayment(){
            this.info = 'firstPayment';
            this.modalTitle = 'Førstegangsydelse';
            this.modalText = 'Førstegansydelsen er et beløb, som du betaler ved begyndelsen af leasingaftalen.';
        },
        modalbox_leasingpris(){
            this.info = 'leasingpris';
            this.modalTitle = 'Leasingpris';
            this.modalText = 'Leasingprisen er det beløb, du skal betale hver måned imens du leaser bilen.';
        },
        modalbox_ejerafgift(){
            this.info = 'ejerafgift';
            this.modalTitle = 'Grøn ejerafgift';
            this.modalText = 'Grøn ejerafgift er en afgift, som man som bilejer betaler. Prisen afhænger af bilens forbrug og brændstof.';
        },
        modalbox_forsikring(){
            this.info = 'forsikring';
            this.modalTitle = 'Forsikring';
            this.modalText = 'Forsikringsbeløbet pr. måned. Det angivne beløb er et gennemsnitligt beløb. Du kan til enhver tid ændre det til din forsikringspris.';
        },
        modalbox_periode(){
            this.info = 'periode';
            this.modalTitle = 'Budgetperiode';
            this.modalText = 'Angiv hvor lang en periode du ønsker at se budgettet over. Du har mulighed for at vælge imellem: pr. måned, pr. år eller over hele din leasingperiode.';
        },
        modalbox_kmYear(){
            this.info = 'kmYear';
            this.modalTitle = 'Antal km årligt';
            this.modalText = 'Angiv antallet af km som du mener, du kommer til at køre om året.';
        },
        modalbox_fuelPrice(){
            this.info = 'fuelPrice';
            this.modalTitle = 'Brændstofpris';
            this.modalText = 'Angiv den brændstodspris, som passer til din bils brændstoftype';
        },
        modalbox_km_l(){
            this.info = 'km_l';
            this.modalTitle = 'Km/l';
            this.modalText = 'Det angivne tal dækker over, hvor mange kilometer bilen kører pr. liter';
        },
        modal_tyrestorage(){
            this.info = 'tyrestorage';
            this.modalTitle = 'Dækopbevaring';
            this.modalText = 'Den månedlige pris for at få dine dæk opbevaret hos Autohuset Vestergaard';
        },
        closeModal(){
            this.info = null;
        }
    }
}
</script>
