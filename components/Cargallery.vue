<template>
    <div class="cargallery_container">
        <div class="sort_after">
            <form>
                <label>Sorter efter:</label>
                <select v-model="sort_after" class="sort_after_select">
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                    <option value="price_low_high">Pris pr. måned (lav til høj)</option>
                    <option value="price_high_low">Pris pr. måned (høj til lav)</option>
                </select>
            </form>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 cargallery" v-for="car in cars" :key="car.id">
                <NuxtLink :to="{ name: 'cardetails', query: {id: car.id} }">
                <div class="image_container">
                    <img :src="`${car.image.url}`" :alt="car.brandName">
                </div>
                <div class="text_container">
                    <h2 v-if="car.name.includes(car.brandName)">{{car.name.trimStart().split(" ")[0] + ' ' + car.name.trimStart().split(" ")[1]}}</h2>
                    <h2 v-else>{{car.brandName + ' ' + car.name.trimStart().split(" ")[0]}}</h2>
                    <p>{{car.name}}</p>
                    <h3>{{car.monthlyPayment.toLocaleString('dk-DK')}} kr./måned</h3>
                    <div class="text_container_inner">
                        <span>Førstegangsydelse: {{car.firstPayment.toLocaleString('dk-DK')}} kr.</span>
                        <span>{{car.kmPerYear.toLocaleString('dk-DK')}} km/år</span>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
        <div class="whitespace"></div>
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
        cars(){
            let carsFromStore = [...this.$store.state.filtered_cars];
            if(this.sort_after == 'A_Z'){
                return carsFromStore.sort((a, b) => (a.brandName + a.name.trimStart().split(" ")[0]).toLowerCase().localeCompare((b.brandName + b.name.trimStart().split(" ")[0]).toLowerCase()));
            }else if(this.sort_after == 'Z_A'){
                return carsFromStore.sort((a, b) => (b.brandName + b.name.trimStart().split(" ")[0]).toLowerCase().localeCompare((a.brandName + a.name.trimStart().split(" ")[0]).toLowerCase()));
            }else if(this.sort_after == 'price_low_high'){
                return carsFromStore.sort((a, b) => (a.monthlyPayment - b.monthlyPayment));
            }else if(this.sort_after == 'price_high_low'){
                return carsFromStore.sort((a, b) => (b.monthlyPayment - a.monthlyPayment));
            }
        }
    }
  
  }
  </script>