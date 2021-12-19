<template>
  <div class="centered-screen">
    <span class="text-larger">vscode webvue</span>
    <span class="text-large">vscode extension development template using vue 3 and vite!</span>
    <button @click="increment">increment {{ counter }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data: () => ({
    counter: 0
  }),
  methods: {
    increment() {
      this.counter += 1
      vscode.postMessage({
        message: 'extension can listen to vue events by using postMessage method!'
      })
    },
  }
}
</script>

<style>
.centered-screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-larger {
  font-size: x-large;
  margin-bottom: 1rem;
}
.text-large {
  font-size: large;
  margin-bottom: 1rem;
}
</style>