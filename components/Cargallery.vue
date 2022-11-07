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
        <div class="cargallery_container">
        
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
    }
  
  }
  </script>