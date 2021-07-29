<template>
  <transition name="xxx">
    <div class="btn" :class="{addTodo:show}" v-show="!todoSelectdata" @click="toggleAddShow"></div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "cl-button"
})
export default class App extends Vue {
  @Prop(Boolean) show!: Boolean;
  $bus: any;
  get todoSelectdata() {
    return Object.keys(this.$store.state.currentSelectTodo).length == 0;
  }

  toggleAddShow() {
    if (this.show) {
      this.$bus.$emit("addTodo");
    } else {
      this.$emit("click");
    }
  }
}
</script>
<style lang="less">
.btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: fixed;
  background-color: #5b9df9;
  right: 30px;
  bottom: 30px;
  background-image: linear-gradient(45deg, rgb(0, 100, 255), rgb(0, 190, 255));
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: all 0.5s;
  &::after {
    position: absolute;
    content: " ";
    height: 4px;
    width: 30.8px;
    background-color: #fff;
    border-radius: 5px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &::before {
    position: absolute;
    content: " ";
    height: 4px;
    width: 30.8px;
    background-color: #fff;
    border-radius: 5px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotateZ(90deg);
  }

  &.addTodo {
    // transition: all 0.5s;
    width: 100%;
    border-radius: 0;
    right: 0;
    bottom: 0;
  }

  .xxx-enter-active {
    transition: all 0.4s;
  }

  .xxx-enter {
    transform: translateY(70%);
    opacity: 0;
  }
}
</style>
