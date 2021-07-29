<template>
  <transition name="xxx">
    <div class="detail-todo" v-if="show">
      <Head>
        <template v-slot:left>
          <i class="fa fa-chevron-left" @click="closeDetail"></i>
        </template>
      </Head>
      <div class="todo-wapper">
        <Todo :todo="Todo" />
        <div class="todoDetailSum">
          <div class="today tasks">
            <h3>今 天</h3>
            <ul>
              <li class="task" v-for="(todo,index) in todayTodo" :key="index">
                <label @click.prevent="isTackDone(todo)">
                  <input type="checkbox" :class="{active:todo.isDone}" />
                  <span>{{todo.TakeName}}</span>
                </label>
                <transition name="deleteShow">
                  <span class="delete" v-show="todo.isDone" @click="deletdTodo(todo)">
                    <span class="fa fa-trash"></span>
                  </span>
                </transition>
              </li>
            </ul>
          </div>
          <div class="tomorrow tasks">
            <h3>明 天</h3>
            <ul>
              <li class="task" v-for="(todo,index) in tomorrowTodo" :key="index">
                <label @click.prevent="isTackDone(todo)">
                  <input type="checkbox" :class="{active:todo.isDone}" />
                  <span>{{todo.TakeName}}</span>
                </label>
                <transition name="deleteShow">
                  <span class="delete" v-show="todo.isDone" @click="deletdTodo(todo)">
                    <span class="fa fa-trash"></span>
                  </span>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Head from "./Head.vue";
import Todo from "./Todo.vue";
import time from "@/store/data";
@Component({
  components: {
    Head,
    Todo
  }
})
export default class App extends Vue {
  @Prop(Boolean) show!: boolean;

  get Todo() {
    return this.$store.state.currentSelectTodo;
  }

  get todayTodo() {
    return this.Todo.todoList.filter(to => {
      return to.time == time.today && !to.isDelete;
    });
  }
  get tomorrowTodo() {
    return this.Todo.todoList.filter(to => {
      return to.time == time.tomorrow && !to.isDelete;
    });
  }

  isTackDone(todo) {
    this.$store.commit("isTackDone", todo);
  }

  deletdTodo(todo) {
    this.$store.commit("deletdTodo", todo);
  }

  closeDetail() {
    this.$parent.toggleDetailShow();

    this.$store.commit("clearSelectTodo");
  }
}
</script>

<style lang="less">
.center-x {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-todo {
  z-index: 5;
  background-color: #f5f5f5;
  .center-x();
  .todo-wapper {
    padding: 20px;
  }

  .todoDetailSum {
    margin-top: 26px;
    .tasks {
      h3 {
        font-size: 20px;
      }

      ul {
        margin: 20px 0;
        li {
          height: 28px;
          display: flex;
          align-items: center;
          border-bottom: 2px solid #eeeeee;
          padding-right: 10px;
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 10px;
          .delete {
            span {
              font-size: 18px;
              color: #727272;
            }
          }

          label {
            width: 100%;
            display: flex;

            span {
              font-size: 18px;
            }
            input {
              width: 20px;
              height: 20px;
              border: 2px solid #e0e0e0;
              padding: 3px;
              margin-right: 14px;
              background-color: #f5f5f5;
              border-radius: 3px;
              -webkit-appearance: none;
              outline: none;
              position: relative;

              transform: translateY(-1.5px);
              &::after {
                content: "\f00c";
                font: normal normal normal 0.26667rem/1 FontAwesome;
                width: 10px;
                height: $width;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                margin: auto;
                transform: translateX(-1px);
                color: #fff;
                display: none;
              }

              &.active {
                background-color: #ccc;
                border: none;

                &::after {
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }
}

.xxx-enter-active,
.xxx-leave-active {
  transition: all 0.4s;
}
.xxx-enter,
.xxx-leave-to {
  transform: translateY(70%);
}

.deleteShow-enter-active,
.deleteShow-leave-active {
  transition: all 0.4s;
}
.deleteShow-enter,
.deleteShow-leave-to {
  transform: translateX(5px);
  opacity: 0;
}
</style>
