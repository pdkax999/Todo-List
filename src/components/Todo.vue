<template>
  <div class="todo">
    <div class="icon">
      <div>
        <i :class="`fa fa-${todo.icon}`" :style="{color:todo.colors[0]}"></i>
      </div>
    </div>

    <div class="todo-detail">
      <div class="todo-total">
        <span>{{todo.todoList.length}} 条待办</span>
      </div>
      <div class="title">
        <span>{{todo.name}}</span>
      </div>
    </div>

    <div class="progress">
      <div class="bar">
        <span></span>
      </div>
      <span>0%</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class App extends Vue {
  @Prop(Object) todo!: Object;

  mouted(){

    console.log(this.todo);
    

  }
}
</script>

<style lang="less">
.todo {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  padding: 5%;
  background-color: #eeeeee;

  .icon {
    width: 100%;
    height: 44px;
    margin-bottom: 100px;
    & > div {
      width: 44px;
      height: 44px;
      // background-color: #bfa;
      border: 1px solid #ccc;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 20px;
      }
    }

    
  }

  .todo-detail {
    .todo-total {
      span {
        font-size: 19px;
        color: black;
      }
    }
    .title {
      margin: 10px 0px 40px 0;
      span {
        font-size: 26px;
        color: black;
        // font-weight: bold;
      }
    }
  }

  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
    .bar {
      width: 80%;
      height: 6px;
      background-color: #dddddd;
      border-radius: 5px;
      position: relative;
      span {
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 0;
        background-color: #aaaaaa;
      }
    }
    & > span {
      width: 20%;
      padding-left: 10px;
    }
  }

  .todoDetail{
      margin-bottom: 30px !important;
    }
}
</style>
