<template>
  <div class="qr_container">
    <p>Scan QR-koden og læs mere om bilen på vores hjemmeside</p>
    <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=https://autohuset-vestergaard.dk/privatleasing-maerker/${carData.brandName.toLowerCase()}-leasing/${carData.name.trimStart().split(' ')[0].toLowerCase()}/?id=${carData.id}&size=120x120`" alt="QR-kode"/>
  </div>
</template>

<script>
export default {
    name: 'QR',
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
