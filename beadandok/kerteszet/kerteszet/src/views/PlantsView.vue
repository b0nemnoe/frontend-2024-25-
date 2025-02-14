<script setup>
import { usePlantsStore } from "@/stores/plantsStore.js";

const plantsStore = usePlantsStore();
</script>

<template>
    
    <h1 class="text-center">Növények</h1>

    <div class="row">
        <div v-for="p in plantsStore.plants" :key="p.id" class="card col-12 col-md-4 col-lg-3">
            <p class="card-title text-center"> {{p.name}}</p>
            <div class="card-body">
                <p class="card-text">{{ p.price }} Ft</p>
                <p v-if="p.perrenial == true">Egynyári</p>
                <p v-else>Nem egynyári</p>
                <p class="card-text">{{ p.category }}</p>

            </div>
        </div>
    </div>

</template>
