<template>
    <div class="p-6">
        <div v-if="stock" class="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
            <h1 class="text-3xl font-bold text-center text-blue-600 mb-4">
                {{ stock.company }} ({{ stock.ticker }})
            </h1>

            <!-- Información -->
            <div class="text-gray-700 space-y-4 flex flex-col justify-center items-center">
                <p><strong>Brokerage:</strong> {{ stock.brokerage }}</p>
                <p><strong>Acción del Analista:</strong> {{ stock.action }}</p>

                <!-- Rating -->
                <p><strong>Rating Anterior:</strong> {{ stock.rating_from }}</p>
                <p>
                    <strong>Nuevo Rating:</strong> 
                    <span >
                        {{ store.ratingSymbol(stock) }} {{ stock.rating_to }}
                    </span>
                </p>

                <!-- Target Price -->
                <p><strong>Precio Objetivo Anterior:</strong> {{ stock.target_from }}</p>
                <p>
                    <strong>Nuevo Precio Objetivo:</strong> 
                    <span :class="store.priceColor(stock)">
                        {{ store.priceSymbol(stock) }} {{ stock.target_to }}
                    </span>
                </p>
            </div>

            <!-- Botón de Volver -->
            <div class="mt-6 text-center">
                <router-link to="/" class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
                    ← Volver
                </router-link>
            </div>
        </div>

        <!-- Mensaje de Cargando -->
        <div v-else class="text-center text-gray-600 text-lg">Cargando...</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStockStore } from '../store/stockStore';

const route = useRoute();
const store = useStockStore();
const stock = ref(null);

onMounted(async () => {
    if (!store.stocks.length) {
        await store.fetchStocks();
    }
    stock.value = store.getStockByTicker(route.params.ticker);
});
</script>
