<template>
  <div>
    <header>
      <div class="left">
        <i></i>
      </div>
      <div class="center">
        <span>Todo</span>
      </div>
      <div class="right">
        <i></i>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

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
}
</style>
