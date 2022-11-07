<template>
    <div>
        <div class="sort_after">
            <form>
                <label>Sorter efter:</label>
                <select v-model="sort_after" class="sort_after_select">
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                    <option value="price_low_high">Pris (lav til høj)</option>
                    <option value="price_high_low">Pris (høj til lav)</option>
                </select>
            </form>
        </div>

        <div class="row cargallery_container">
            <div class="col-lg-4 col-md-4 col-sm-6 cargallery" v-for="car in allCars" :key="car.id">
                <!-- <NuxtLink :to="{ name: 'cardetails', query: {id: car?.id} }"></NuxtLink> -->
                <div class="image_container">
                    <img :src="`${car.image.url}`" :alt="car.brandName">
                </div>
                <div class="text_container">
                    <h2>{{car.brandName + ' ' + car.name.trimStart().split(" ")[0]}}</h2>
                    <p>{{car.name}}</p>
                    <h3>{{car.monthlyPayment}} kr./måned</h3>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Cargallery',
    data(){
        return{
            sort_after: 'A_Z'
        }
    },
    computed: {
        allCars(){
            let carsFromStore = [...this.$store.state.cars];
            let allCars = [];
            for(let i = 0; i < carsFromStore.length; i++){
                // allCars.push(carsFromStore[i]);
                for(let j = 0; j < carsFromStore[i].length; j++){
                    allCars.push(carsFromStore[i][j]);
                }
            }
           return allCars;
        }
    }
  
  }
  </script>