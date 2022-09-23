import {defineStore} from "pinia";
import * as Tone from 'tone'
import {computed, ref} from "vue";

//@ts-ignore
import {Polinotes} from "@/services/Polinotes";

export const usePolinotes = defineStore("polinotes", () => {

    const polinotesQuantity = ref(0)
    const activePolinote = ref<number | null>(null)


    return {
        polinotesQuantity,
        activePolinote
    }

})