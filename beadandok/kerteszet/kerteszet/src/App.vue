<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { usePlantsStore } from '@/stores/plantsStore.js'


const plantsStore = usePlantsStore()

onMounted(() => {
  plantsStore.loadAll()
})
</script>

<template>
  <div class="container">
        <nav class="text-center">
          <RouterLink class="btn btn-outline-success m-2" to="/">Növények</RouterLink>
          <RouterLink class="btn btn-outline-success m-2" to="/new">Új növény</RouterLink>
        </nav>


  <RouterView />
  </div>
</template>

