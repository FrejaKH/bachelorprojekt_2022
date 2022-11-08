<template>
  <div id="index_container">
    <h1>Privatleasing</h1>

    <div id="cargallery_container">
      <Filtermenu/>
      <Cargallery/>
    </div>
  </div>
</template>

<script>

import Cargallery from '../../components/Cargallery.vue';
import Filtermenu from '../../components/Filtermenu.vue';

export default {
    name: 'Index',
    components: {
        Cargallery,
        Filtermenu,
    }

}
</script>
