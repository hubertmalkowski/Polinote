<script setup lang="ts">


import {polinotes, Polinotes} from "@/services/Polinotes";
import {onMounted, ref} from "vue";
import * as Tone from "tone"
import {Polinote} from "@/services/Polinote";
import {usePolinotes} from "@/stores/polinoteStore";



// const polinote = new Polinote()

const button = ref<HTMLElement | null>(null)

const polinotesInfo = usePolinotes()

onMounted(() => {



  button.value!.addEventListener("click", async () => {
    await Tone.start()
    console.log("Context started")
  })

})

function play() {
  polinotes.polinotes[0].playNote()
}
function push() {
  polinotesInfo.polinotesQuantity++
  polinotes.addPolinote()
  console.log(polinotesInfo.polinotesQuantity)
}
function change() {
  polinotes.polinotes[2].synth.set({
    oscillator: {
      type: "sawtooth"
    }
  })
}



</script>

<template>
  <button ref="button" > Start context</button>
  <button @click="play()" > Play audio</button>
  <button @click="push()" > Populate polinotes</button>
  <button @click="change()" > Change wave</button>
  <router-link to="/about">
    <button>Go to about</button>
  </router-link>

  <router-view></router-view>
<!--    <img @click="play()" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->


</template>

<style scoped>

</style>
