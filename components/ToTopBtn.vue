<template>
    <div>
      <button class="totop_btn" @click="toTop"><i class="fa fa-angle-up"></i></button>
    </div>
</template>
  
<script>
  export default {
    name: 'ToTopBtn',
    methods: {
        toTop(){
            window.scrollTo(0, 0);
        }
    }
  
  }
</script>

