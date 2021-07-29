<template>
  <div class="bg">
    <div
      class="todoBg"
      v-for="(todo,index) in TaskData"
      :key="index"
      :class="{'showbg':index==currentIndex}"
      :style="{background:gradient(index)}"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  get TaskData() {
    return this.$store.state.TaskList;
  }

  get currentIndex() {
    return this.$store.state.currentIndex;
  }

  gradient(index: string) {
    return `linear-gradient(${this.TaskData[index].colors[1]}, ${this.TaskData[index].colors[0]})`;
  }
}
</script>

<style lang="less">
.bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  

  .todoBg {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity .8s;
    opacity: 0;
  }
  .showbg {
    opacity: 1;
  }
}
</style>
