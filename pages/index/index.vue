<template>
  <div>
    <Filtermenu/>
    <Cargallery/>
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
