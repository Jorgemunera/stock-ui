<template>
    <div class="p-6">
        <!-- Explicación sobre cómo se eligen las recomendaciones -->
        <div class="bg-yellow-100 p-4 rounded-lg shadow-md mb-6">
            <h2 class="text-lg font-bold text-yellow-800">⭐ ¿Cómo seleccionamos las mejores acciones?</h2>
            <p class="text-gray-700 mt-2">
                Nuestro sistema selecciona las acciones recomendadas en base a tres factores principales:
            </p>
            <ul class="list-disc pl-6 text-gray-700 mt-2">
                <li><strong>📊 Rating del Analista:</strong> Se priorizan acciones con calificación <strong>Buy</strong> o que han mejorado su rating.</li>
                <li><strong>📈 Cambio en el Precio Objetivo:</strong> Acciones cuyo precio objetivo ha aumentado tienen mejor puntuación.</li>
                <li><strong>🔍 Acción del Broker:</strong> Se destacan acciones que han sido <strong>"upgraded"</strong> o con "target raised".</li>
            </ul>
            <p class="text-gray-700 mt-2">
                Además, cada acción recibe un <strong>Score</strong> basado en estos factores, indicando su relevancia en la selección.
            </p>
        </div>

        <h1 class="text-2xl font-bold mb-4">⭐ Mejores Recomendaciones</h1>
        <StockRecommendations />
    </div>
</template>

<script setup>
import StockRecommendations from '../components/StockRecommendations.vue';
</script>
