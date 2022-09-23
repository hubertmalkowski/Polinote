import {Polinote} from "@/services/Polinote";
import {reactive} from "vue";
import {usePolinotes} from "@/stores/polinoteStore";

export class Polinotes {
    polinotes : Array<Polinote> = []

    constructor() {
    }

    addPolinote() {
        this.polinotes.push(new Polinote())
        console.log("Polinote added")
    }
}

export const polinotes =  new Polinotes()