<template>
    <div class="overflow-x-auto">
        <table class="w-full min-w-[600px] border-collapse border border-gray-300 shadow-lg rounded-lg">
            <thead>
                <tr class="bg-green-500 text-white">
                    <th class="border border-gray-300 px-4 py-2 text-center">Ticker</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Empresa</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Rating</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Target Price</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Motivo</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stock in store.recommendations" :key="stock.Stock.ticker"
                    class="text-center hover:bg-gray-100 transition">
                    <td class="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                        <router-link :to="`/stocks/${stock.Stock.ticker}`">{{ stock.Stock.ticker }}</router-link>
                    </td>
                    <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">
                        {{ stock.Stock.company }}
                    </td>

                    <!-- Rating con icono basado en la escala de cambios -->
                    <td class="border border-gray-300 px-4 py-2 font-bold">
                        {{ store.ratingSymbol(stock.Stock) }} {{ stock.Stock.rating_to }}
                    </td>

                    <!-- Target Price con símbolo de cambio y color -->
                    <td class="border border-gray-300 px-4 py-2 font-bold" :class="store.priceColor(stock.Stock)">
                        {{ store.priceSymbol(stock.Stock) }} {{ stock.Stock.target_to }}
                    </td>

                    <td class="border border-gray-300 px-4 py-2 text-left text-sm">
                        {{ generateReason(stock.Stock) }}
                    </td>

                    <td class="border border-gray-300 px-4 py-2 font-bold">
                        {{ stock.Score.toFixed(2) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStockStore } from '../store/stockStore';

const store = useStockStore();

// Cargar las recomendaciones al montar el componente
onMounted(() => {
    store.fetchRecommendations();
});

// Generar un motivo simplificado
const generateReason = stock => {
    if (stock.rating_to === 'Buy') {
        return "Alta recomendación de compra.";
    } else if (stock.rating_to === 'Sell') {
        return "Recomendación de venta por parte del analista.";
    } else if (stock.action.includes('upgraded')) {
        return "Mejorado por el broker, con expectativas de crecimiento.";
    } else if (stock.action.includes('downgraded')) {
        return "Degradado por el broker, indicando riesgo.";
    } else if (parseFloat(stock.target_to.replace('$', '')) > parseFloat(stock.target_from.replace('$', ''))) {
        return "Expectativa de aumento en precio objetivo.";
    } else if (parseFloat(stock.target_to.replace('$', '')) < parseFloat(stock.target_from.replace('$', ''))) {
        return "Expectativa de reducción en precio objetivo.";
    }
    return "Sin cambios significativos.";
};
</script>
