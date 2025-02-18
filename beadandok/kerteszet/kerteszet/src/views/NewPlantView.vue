<script setup>
import { usePlantsStore } from "@/stores/plantsStore.js";
import { ref } from 'vue';

const plants = ref({
    "name": "",
    "price": "",
    "perennial": "",
    "category": ""
});

const plantsStore = usePlantsStore();
</script>

<template>
  <h1>Új növény felvétele</h1>
  <form class="w-50 mx-auto" @submit.prevent = "plantsStore.savePlant(plants)">
        <input class="form-control mb-2" type="text" v-model="plants.name" placeholder="Növény neve">
        <input class="form-control mb-2" type="text" v-model="plants.price" placeholder="Ár">
        <label>Évelő?</label> <input class="mb-2" type="checkbox" v-model="plants.perennial">
        <label>Kategória:</label>
        <select class="form-control mb-2" v-model="plants.category">
            <option value="bokor">Bokor</option>
            <option value="fa">Fa</option>
            <option value="virág">Virág</option>
        </select>
        <input class="btn btn-success" type="submit" value="Mentés">
  </form>
</template>

