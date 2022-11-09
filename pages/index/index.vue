<template>
  <div id="index_container">
    <h1>Privatleasing</h1>
    <p>Hos os kan du vælge mellem 11 bilmærker, når du skal privatlease din nye bil. Vi tilbyder dig økonomisk sikkerhed, uanset hvilken bil du vælger. Service og vedligeholdelse af bilen i leasingperioden er inklusiv i prisen.</p>

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
import ToTopBtn from '../../components/ToTopBtn.vue'

export default {
    name: 'Index',
    components: {
        Cargallery,
        Filtermenu,
        ToTopBtn,
    }

}
</script>
