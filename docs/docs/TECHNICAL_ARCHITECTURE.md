# Ancient Utopia Quest - Technical Architecture

# Mundo

Tamaño total:

15 km × 15 km

Área total:

225 km²

# Generación Procedural

Todo el mundo se genera a partir de una semilla.

WORLD_SEED

La semilla controla:

- Terreno
- Montañas
- Bosques
- Lagos
- Ruinas
- Cuevas
- Portales

# Biomas

## Desierto

- Grandes llanuras
- Dunas
- Ruinas antiguas

## Bosque

- Vegetación densa
- Lagos
- Monolitos

## Tundra

- Nieve
- Hielo
- Ruinas congeladas

# Sistema de Chunks

El mundo se divide en:

5 × 5 sectores

Cada sector:

3 km × 3 km

Sólo se cargan:

- Sector actual
- 8 sectores vecinos

# Sistema de Vuelo

Velocidad 1

1.5×

Velocidad 2

3.0×

Velocidad 3

4.5×

Ruptura espacial:

5.0×

# Teletransportación

Sistema de energía.

Teletransporte instantáneo.

Sellos máximos:

3

Colores:

- Azul
- Rojo
- Dorado

# Portales Interdimensionales

Los portales conectan extremos opuestos del mapa.

Secuencia:

Entrada
→ Corredor dimensional
→ Salida

# Sistema de Descubrimiento

Categorías:

- Geográficos
- Históricos
- Arqueológicos
- Legendarios
- Interdimensionales

# Optimización

Objetivo:

60 FPS

Técnicas:

- InstancedMesh
- LOD
- Streaming
- Occlusion Culling
- Chunk Loading

# Prioridades

1. Estabilidad
2. Guardado
3. Colisiones
4. Vuelo
5. Portales
6. Clima
7. Gráficos
