<script lang="ts" setup>


import {polinotes} from "@/services/Polinotes";
import {Note} from "@tonaljs/tonal";
import {usePolinotes} from "@/stores/polinoteStore";


const polinotesInfo = usePolinotes()


function play(index : number) {

  console.log(polinotes)
  polinotes.polinotes[index + 1].note = Note.get("F3")
  polinotes.polinotes[index].playNote()
}

</script>


<template>
  <div class="about">
   <button @click="play(noteIndex)" v-for="noteIndex in polinotesInfo.polinotesQuantity">Check if polinotes changed</button>
  </div>
</template>

<style>

</style>
