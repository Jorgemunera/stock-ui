<template>
    <div class="p-6">
        <!-- Explicación de la tabla -->
        <div class="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
            <h2 class="text-lg font-bold text-blue-800">📊 Explicación de los Datos</h2>
            <ul class="list-disc pl-6 text-gray-700 mt-2">
                <li><strong>Ticker:</strong> Código de la acción en la bolsa.</li>
                <li><strong>Empresa:</strong> Nombre de la empresa correspondiente a la acción.</li>
                <li><strong>Brokerage:</strong> Firma de inversión que analizó la acción.</li>
                <li><strong>Rating:</strong>
                    <ul class="list-disc pl-6">
                        <li>🟢 Si el rating mejoró.</li>
                        <li>🔵 Si el rating se mantuvo igual.</li>
                        <li>🔴 Si el rating empeoró.</li>
                    </ul>
                </li>
                <li><strong>Acción del Broker:</strong> Explica el cambio realizado, como "Upgraded", "Target Raised", etc.</li>
                <li><strong>Target Price:</strong> Último precio objetivo proyectado.
                    <ul class="list-disc pl-6">
                        <li>🔼 Si subió (verde).</li>
                        <li>➖ Si se mantuvo igual (color estándar).</li>
                        <li>🔽 Si bajó (rojo).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Tabla de acciones -->
        <h1 class="text-2xl font-bold mb-4">📊 Acciones Disponibles</h1>
        <StockTable />
    </div>
</template>

<script setup>
import StockTable from '../components/StockTable.vue';
</script>
