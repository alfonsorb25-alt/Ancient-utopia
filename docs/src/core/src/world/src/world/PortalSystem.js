export class PortalSystem {
  constructor(worldSize = 15000) {
    this.worldSize = worldSize;

    this.portals = [
      {
        id: 1,
        name: "Portal Oeste",
        x: 1000,
        z: 1000,
        destination: 2
      },

      {
        id: 2,
        name: "Portal Este",
        x: 14000,
        z: 14000,
        destination: 1
      }
    ];
  }

  getPortal(id) {
    return this.portals.find(
      portal => portal.id === id
    );
  }

  checkPortalCollision(playerX, playerZ) {
    for (const portal of this.portals) {

      const dx = playerX - portal.x;
      const dz = playerZ - portal.z;

      const distance =
        Math.sqrt(dx * dx + dz * dz);

      if (distance < 15) {
        return portal;
      }
    }

    return null;
  }

  teleport(player, portalId) {

    const portal = this.getPortal(portalId);

    if (!portal) return false;

    const destination =
      this.getPortal(
        portal.destination
      );

    if (!destination) return false;

    player.position.x = destination.x;
    player.position.z = destination.z;

    return true;
  }
      }
