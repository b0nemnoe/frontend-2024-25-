import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlantsStore = defineStore('garden', () => {
  const plants = ref([])

  const loadAll = () => {
    fetch('http://localhost:3000/plants')
    
      .then(response => response.json())
      .then(data => plants.value = data)
      console.log(plants.value)
  }

  return { plants, loadAll }
})
