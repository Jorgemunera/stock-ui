# Stock UI

## Descripción
Stock UI es una aplicación frontend desarrollada con Vue 3 y Vite, que consume una API de acciones financieras para mostrar información sobre las recomendaciones de analistas, cambios en ratings y precios objetivos. La aplicación permite visualizar detalles de cada acción, aplicar filtros y obtener recomendaciones basadas en criterios específicos.

## Tecnologías Utilizadas
- **Vue 3**: Framework progresivo para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos frontend.
- **Pinia**: Sistema de gestión de estado para Vue.
- **Vue Router**: Enrutador para manejar la navegación de la aplicación.
- **Tailwind CSS**: Framework de utilidades CSS para estilización.
- **Axios**: Cliente HTTP para la comunicación con la API backend.

## Estructura del Proyecto
```
stock-ui/
│── public/                  # Archivos estáticos
│── src/                     # Código fuente principal
│   ├── assets/              # Recursos estáticos (imágenes, íconos, etc.)
│   ├── components/          # Componentes reutilizables de Vue
│   ├── views/               # Páginas principales de la aplicación
│   ├── router/              # Configuración de Vue Router
│   ├── store/               # Gestión de estado con Pinia
│   ├── style.css            # Estilos generales con Tailwind
│   ├── main.js              # Punto de entrada principal de la aplicación
│   └── App.vue              # Componente raíz
│── package.json             # Dependencias y scripts del proyecto
│── vite.config.js           # Configuración de Vite
│── README.md                # Documentación del proyecto
```

## Instalación y Configuración
Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

### 1. Clonar el Repositorio
```sh
 git clone <URL_DEL_REPOSITORIO>
 cd stock-ui
```

### 2. Instalar Dependencias
```sh
 npm install
```

### 3. Ejecutar el Servidor en Modo Desarrollo
```sh
 npm run dev
```
Esto iniciará un servidor de desarrollo y la aplicación estará disponible en `http://localhost:5173/` (según configuración de Vite).

### 4. Construir para Producción
```sh
 npm run build
```
Esto generará los archivos optimizados en la carpeta `dist/`.

### 5. Previsualizar la Aplicación Construida
```sh
 npm run preview
```

## Arquitectura y Organización
El proyecto sigue la arquitectura de componentes de Vue 3, organizando las funcionalidades en módulos reutilizables y gestionando el estado global mediante Pinia.

- **Estado Global**: Se gestiona con `Pinia` en `src/store/stockStore.js`, lo que permite compartir información entre componentes sin depender de `props` y `emit`.
- **Enrutamiento**: Se implementa con `Vue Router` en `src/router/index.js`, manejando rutas para la página principal, recomendaciones y detalles de acciones.
- **Estilos**: Se utiliza `Tailwind CSS` para una rápida estilización mediante clases de utilidad.
- **Consumo de API**: `Axios` se emplea para realizar solicitudes a la API backend (`http://localhost:3000/stocks` y `http://localhost:3000/recommendations`). El servidor local debe estar encenido, consulte repositorio backend de "stock-api"

## Funcionalidades Principales
- **Visualización de Acciones**: Muestra una lista de acciones con su información clave.
- **Filtros y Búsqueda**: Permite buscar acciones por nombre o ticker, y filtrar por tipo de cambio (positivo, negativo, neutral).
- **Detalles de Acciones**: Página dedicada a cada acción con información detallada.
- **Recomendaciones**: Sección especial donde se destacan las mejores oportunidades según criterios analíticos.

## Requisitos Previos
- **Node.js** > 18 y < 21 




