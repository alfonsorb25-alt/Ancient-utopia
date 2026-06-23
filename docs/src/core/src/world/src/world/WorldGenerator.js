export class WorldGenerator {
  constructor() {
    this.worldSize = 15000;
    this.chunkSize = 250;
    this.renderDistance = 3;

    this.biomes = [
      "desert",
      "forest",
      "tundra"
    ];
  }

  generateChunk(chunkX, chunkZ) {
    return {
      x: chunkX,
      z: chunkZ,

      biome: this.getBiome(chunkX, chunkZ),

      terrain: this.generateTerrain(
        chunkX,
        chunkZ
      ),

      objects: []
    };
  }

  generateTerrain(x, z) {
    return {
      height: Math.sin(x * 0.1) * 20 +
              Math.cos(z * 0.1) * 20,

      mountains: Math.random() > 0.8,

      lake: Math.random() > 0.97
    };
  }

  getBiome(x, z) {
    const value =
      Math.abs(
        Math.sin(x * 0.01) +
        Math.cos(z * 0.01)
      );

    if (value < 0.7) return "desert";
    if (value < 1.3) return "forest";

    return "tundra";
  }
      }
