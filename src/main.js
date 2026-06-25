import { WorldGenerator } from "./world/WorldGenerator.js";
import { PortalSystem } from "./world/PortalSystem.js";
import { BiomeSystem } from "./world/BiomeSystem.js";

class AncientUtopiaQuest {
  constructor() {
    this.world = new WorldGenerator();
    this.portals = new PortalSystem();
    this.biomes = new BiomeSystem();

    console.log("Ancient Utopia Quest iniciado");

    this.initialize();
  }

  initialize() {
    this.world.generate();
    this.biomes.generate();
    this.portals.generate();

    console.log("Mundo generado correctamente");
  }
}

new AncientUtopiaQuest();
