<template>
  <div class="budgetform_container">
    <div>
        <h4>Beregn din samlede udgift for denne bil</h4>
    </div>
    <div class="form_btn">
        <button>Beregn udgift inkl. førstegangsydelse<i class="fa fa-angle-down"></i></button>
    </div>
    <div class="form_btn">
        <button>Beregn årligt brændstofforbrug<i class="fa fa-angle-down"></i></button>
    </div>
    <div class="form_btn">
        <button>Dækopbevaring<i class="fa fa-angle-down"></i></button>
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
            carData: this.data[0]
        }
    },
}
</script>
