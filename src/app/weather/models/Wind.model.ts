import { Measurement } from "./Measurement.model";
export class Wind extends Measurement {
    speed: number;
    constructor(speed: number, measureUnit: string) {
        super(measureUnit);
        this.speed = speed;
    }
}
