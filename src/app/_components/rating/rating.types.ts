import { ComponentBase } from "../types/component-base.type";

export type RatingPtops = Omit<ComponentBase, 'isDisabled'> & {
    rate: number;
}