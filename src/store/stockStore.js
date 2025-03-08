import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useStockStore = defineStore('stock', () => {
    const stocks = ref([]);
    const recommendations = ref([]);
    const search = ref('');
    const filter = ref('all');

    // Cargar las acciones desde la API
    const fetchStocks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/stocks');
            stocks.value = response.data;
        } catch (error) {
            console.error('Error fetching stocks:', error);
        }
    };

    // Obtener acción por ticker
    const getStockByTicker = (ticker) => {
        return stocks.value.find(stock => stock.ticker === ticker) || null;
    };

    // Cargar las recomendaciones desde la API
    const fetchRecommendations = async () => {
        try {
            const response = await axios.get('http://localhost:3000/recommendations');
            recommendations.value = response.data;
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    // Definir escala de cambios en rating
    const ratingChanges = {
        "Sell → Buy": 10, "Sell → Overweight": 8, "Sell → Neutral": 5,
        "Neutral → Buy": 5, "Neutral → Overweight": 4, "Equal Weight → Overweight": 4,
        "Market Perform → Buy": 5, "In-Line → Overweight": 4, "Underweight → Overweight": 9,
        "Underweight → Neutral": 4, "Buy → Neutral": -5, "Overweight → Neutral": -4,
        "Buy → Sell": -10, "Overweight → Sell": -8, "Neutral → Sell": -5,
        "Underweight → Sell": -7, "Overweight → Underweight": -9, "Buy → Overweight": 3,
        "Neutral → Neutral": 0, "Buy → Buy": 3
    };

    // Función para obtener el icono del rating
    const ratingSymbol = (stock) => {
        if (!stock || !stock.rating_from || !stock.rating_to) return "🔵";
        const key = `${stock.rating_from} → ${stock.rating_to}`;
        const score = ratingChanges[key] || 0;
        if (score > 0) return "🟢";
        if (score < 0) return "🔴";
        return "🔵";
    };

    // Función para obtener el icono del target price
    const priceSymbol = (stock) => {
        if (!stock || !stock.target_from || !stock.target_to) return "➖";
        const oldPrice = parseFloat(stock.target_from.replace('$', ''));
        const newPrice = parseFloat(stock.target_to.replace('$', ''));
        if (newPrice > oldPrice) return "🔼";
        if (newPrice < oldPrice) return "🔽";
        return "➖";
    };

    // Función para definir color del target price
    const priceColor = (stock) => {
        if (!stock || !stock.target_from || !stock.target_to) return '';
        const oldPrice = parseFloat(stock.target_from.replace('$', ''));
        const newPrice = parseFloat(stock.target_to.replace('$', ''));
        return newPrice > oldPrice ? 'text-green-600 font-bold' : newPrice < oldPrice ? 'text-red-600 font-bold' : '';
    };

    // Filtro de acciones
    const filteredStocks = computed(() => {
        return stocks.value.filter(stock => {
            const matchesSearch =
                stock.ticker.toLowerCase().includes(search.value.toLowerCase()) ||
                stock.company.toLowerCase().includes(search.value.toLowerCase());

            const ratingChange = ratingSymbol(stock);
            const priceChange = priceSymbol(stock);

            const matchesFilter =
                filter.value === 'all' ||
                (filter.value === 'positive' && (ratingChange === '🟢' || priceChange === '🔼')) ||
                (filter.value === 'negative' && (ratingChange === '🔴' || priceChange === '🔽')) ||
                (filter.value === 'neutral' && ratingChange === '🔵' && priceChange === '➖');

            return matchesSearch && matchesFilter;
        });
    });

    return {
        stocks,
        recommendations, 
        search,
        filter,
        fetchStocks,
        fetchRecommendations,
        ratingSymbol,
        priceSymbol,
        priceColor,
        filteredStocks,
        getStockByTicker
    };
});
