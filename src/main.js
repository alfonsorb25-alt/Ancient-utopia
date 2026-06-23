console.log("Ancient Utopia Quest");

const GAME_CONFIG = {
  worldSize: 15000,
  playerSpeed: 5,
  jumpForce: 8.5,

  flight: {
    normal: 1.5,
    sonic: 3.0,
    light: 4.5,
    max: 5.0
  },

  teleport: {
    cooldown: 3000,
    maxDistance: 80
  },

  portals: {
    enabled: true,
    count: 2
  }
};

export default GAME_CONFIG;
