import {Measurement} from "./Measurement.model";
export class Temperature extends Measurement {
    degree: number;
    constructor(degree: number, measureUnit: string) {
        super(measureUnit);
        this.degree = degree;
    }
}
