<template>
    <div class="p-6">
        <!-- Barra de Búsqueda y Filtros -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <input v-model="store.search" type="text" placeholder="🔍 Buscar acción por ticker o nombre..."
                class="p-2 border border-gray-300 rounded-lg w-full md:w-1/3" />
            <select v-model="store.filter" class="p-2 border border-gray-300 rounded-lg w-full md:w-auto">
                <option value="all">Todas</option>
                <option value="positive">Solo Positivas</option>
                <option value="negative">Solo Negativas</option>
                <option value="neutral">Solo Neutras</option>
            </select>
        </div>

        <!-- Tabla de Acciones -->
        <div class="overflow-x-auto">
            <table class="w-full min-w-[600px] border-collapse border border-gray-300 shadow-lg rounded-lg">
                <thead>
                    <tr class="bg-blue-500 text-white">
                        <th class="border border-gray-300 px-4 py-2">Ticker</th>
                        <th class="border border-gray-300 px-4 py-2">Empresa</th>
                        <th class="border border-gray-300 px-4 py-2">Brokerage</th>
                        <th class="border border-gray-300 px-4 py-2">Rating</th>
                        <th class="border border-gray-300 px-4 py-2">Acción del Broker</th>
                        <th class="border border-gray-300 px-4 py-2">Target Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stock in store.filteredStocks" :key="stock.ticker"
                        class="text-center hover:bg-gray-100 transition">
                        <!-- Ticker -->
                        <td class="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                            <router-link :to="`/stocks/${stock.ticker}`">{{ stock.ticker }}</router-link>
                        </td>
                        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">{{ stock.company }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ stock.brokerage }}</td>

                        <!-- Rating con icono basado en la escala de cambios -->
                        <td class="border border-gray-300 px-4 py-2 font-bold">
                            {{ store.ratingSymbol(stock) }} {{ stock.rating_to }}
                        </td>

                        <!-- Acción del Broker -->
                        <td class="border border-gray-300 px-4 py-2">{{ stock.action }}</td>

                        <!-- Target Price con icono y color -->
                        <td class="border border-gray-300 px-4 py-2 font-bold" :class="store.priceColor(stock)">
                            {{ store.priceSymbol(stock) }} {{ stock.target_to }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStockStore } from '../store/stockStore';

const store = useStockStore();

// Cargar las acciones al montar el componente
onMounted(() => {
    store.fetchStocks();
});
</script>
