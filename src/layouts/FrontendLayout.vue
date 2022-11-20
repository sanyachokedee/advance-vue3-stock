<template>
   <FrontendNav />
   <div class="pt-8">
      <router-view />
   </div>   
   <FrontendFoot />
</template>

<script setup lang="ts">
import FrontendNav from '../components/frontend/FrontendNav.vue';
import FrontendFoot from '../components/frontend/FrontendFoot.vue';
// import FrontendNav from '../views/frontend/FrontendNav.vue';


</script>

<style scoped>

</style>