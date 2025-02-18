import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification"
import axios from 'axios'

export const usePlantsStore = defineStore('garden', () => {
  const plants = ref([])
  const toast = useToast()

  const loadAll = () => {
    fetch('http://localhost:3000/plants')
    
      .then(response => response.json())
      .then(data => plants.value = data)
      console.log(plants.value)
  }

  const savePlant = (p) => {
    console.log(p)
    //let id = Math.round(Math.random() * 1000000000)
    plants.value.push(p)
    axios.post("http://localhost:3000/plants", p)
    .then(resp => {
      console.log(resp.statusText)
      toast("Sikeres mentés")
    })
    .catch(() => toast.error("Hiba"))
  }

  return { plants, loadAll, savePlant }
})
