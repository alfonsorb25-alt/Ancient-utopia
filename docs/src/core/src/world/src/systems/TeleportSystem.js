export class TeleportSystem {
    constructor() {
        this.maxSeals = 3;
        this.seals = [];
    }

    placeSeal(position) {
        if (this.seals.length >= this.maxSeals) return;

        this.seals.push(position);
    }
}
