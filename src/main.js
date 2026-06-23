export const GAME_CONFIG = {
  WORLD_SIZE: 15000, // 15 km

  PLAYER: {
    walkSpeed: 6,
    runSpeed: 12,
    jumpForce: 14,
    gravity: -24
  },

  FLIGHT: {
    speed1: 2.0,
    speed2: 3.0,
    speed3: 4.5,
    maxSpeed: 5.0
  },

  TELEPORT: {
    range: 80,
    cooldown: 3000,
    maxSeals: 3
  },

  WORLD: {
    chunks: 64,
    biomeCount: 3,
    portals: 2,
    ruins: 50,
    villages: 20,
    caves: 100
  }
};

console.log("Ancient Utopia Quest Initialized");
primer núcleo del juego
