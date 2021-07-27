<template>
  <div>
    <header>
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <span>{{Title}}</span>
      </div>
      <div class="right">
        <i></i>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop({ type: String }) Title?: string;

  mounted() {
    //  console.log(this.Title);
  }
}
</script>
<style lang="less">
header {
  width: 100%;
  height: 43.99px;
  display: flex;

  div:not(:nth-child(2)) {
    width: 20%;
    height: 100%;
  }
  .center {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .left {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
