<template>
  <div id="index_container">
    <h1>Privatleasing</h1>
    <div id="cargallery_container">
      <Filtermenu/>
      <Cargallery/>
      <ToTopBtn/>
    </div>
  </div>
</template>

<script>
import Cargallery from '../../components/Cargallery.vue';
import Filtermenu from '../../components/Filtermenu.vue';
import ToTopBtn from '../../components/ToTopBtn.vue';

export default {
    name: 'Index',
    components: {
        Cargallery,
        Filtermenu,
        ToTopBtn,
    }
}
</script>


