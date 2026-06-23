export class BiomeSystem {
  constructor() {
    this.biomes = {
      desert: {
        name: "Desierto",
        temperature: 45,
        treeDensity: 0.05,
        mountainDensity: 0.2,
        lakeChance: 0.02,

        vegetation: [
          "cactus",
          "desert_bush",
          "dry_grass"
        ]
      },

      forest: {
        name: "Bosque",

        temperature: 22,

        treeDensity: 0.9,

        mountainDensity: 0.5,

        lakeChance: 0.1,

        vegetation: [
          "oak",
          "pine",
          "bush",
          "fern"
        ]
      },

      tundra: {
        name: "Tundra",

        temperature: -10,

        treeDensity: 0.3,

        mountainDensity: 0.8,

        lakeChance: 0.05,

        vegetation: [
          "snow_pine",
          "ice_bush"
        ]
      }
    };
  }

  getBiomeData(type) {
    return this.biomes[type];
  }
  }
