<template>
  <div id="app">
    <p>hello world!!!</p>
    <img alt="Vue logo" src="@/assets/logo.png"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    name: 'app'
  })
  export default class extends Vue {
    private created() {
      console.log(12345)
    }
  }
</script>
