<template>
  <transition name="xxx">
    <div id="AddTodo" class="newTodo" @click="closeTime">
      <Head Title="新建任务">
        <template v-slot:left>
          <i class="fa fa-times" @click="closeCall"></i>
        </template>
      </Head>
      <div class="todoInput">
        <div class="title">简单地输入您的计划（16字以内)</div>
        <div class="detail">
          <textarea maxlength="16" v-model="todoTitle"></textarea>
        </div>
        <div class="time">
          <span class="fa fa-calendar"></span>
          <div class="dropDown">
            <span @click="isShowSelectTime=false" class="line">{{selectTimeText}}</span>
            <ul :class="{done:isShowSelectTime}" class="line" @click="selectTime">
              <li :class="{active:selectTimeText==='今天'}">今天</li>
              <li :class="{active:selectTimeText==='明天'}">明天</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Head from "@/components/Head.vue";
import time from "@/store/data";
@Component({
  name: "AddTodo",
  components: {
    Head
  }
})
export default class App extends Vue {
  @Prop(Function) closeCall!: Function;

  selectTimeText: string = "今天";
  todoTitle: string = "";
  isShowSelectTime: Boolean = true;
  $bus: any;

  closeTime($e) {
    if ($e.target.className.indexOf("line") !== -1) return;
    this.isShowSelectTime = true;
  }

  selectTime($e) {
    this.selectTimeText = $e.target.innerHTML;
  }

  todoAdd() {
    const { todoTitle, selectTimeText } = this;

    if (!todoTitle.trim()) return;

    let todo = {
      id: Date.now(),
      TakeName: todoTitle,
      isDelete: false,
      isDone: false,
      time: selectTimeText == "今天" ? time.today : time.tomorrow
    };

    this.$store.commit("updateTodoList", todo);

    this.$parent.toggleAddShow();
    this.selectTimeText = "";
    this.todoTitle = "";
  }

  mounted() {
    this.$bus.$on("addTodo", this.todoAdd);
  }
}
</script>

<style lang="less">
#AddTodo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
}
.xxx-enter-active,
.xxx-leave-active {
  transition: all 0.4s;
}
.xxx-enter,
.xxx-leave-to {
  transform: translateY(70%);
}

.newTodo {
  background-color: #ffffff;

  .todoInput {
    padding: 20px;
    .title {
      height: 24px;
      font-size: 18px;
      color: #888;
    }
    .detail {
      width: 100%;
      height: 150px;
      margin: 10px 0 30px 0;

      textarea {
        width: 100%;
        height: $width;
        border: none;
        padding: 0;
        outline: none;
        resize: none;
        font-size: 31px;
      }
    }
  }

  .time {
    display: flex;
    align-items: center;
    border-bottom: 2px #d9d9d9 solid;
    padding: 10px 0;
    & > span {
      font-size: 20px;
    }
    .dropDown {
      text-align: center;
      line-height: $height;
      width: 80px;
      height: 40px;
      background-color: #fafafa;
      margin-left: 30px;
      color: #545454;
      position: relative;
      border-radius: 5px;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 20px;
      }

      ul {
        transition: all 0.8s;
        position: absolute;
        // transform: translateY(-2px);
        overflow: hidden;
        li {
          width: 80px;
          height: 40px;
          background-color: #fafafa;
          font-size: 20px;
          &.active {
            background-color: #aaa !important;
          }
        }

        &.done {
          height: 0;
        }
      }
    }
  }
}
</style>
