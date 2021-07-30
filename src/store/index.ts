import Vue from 'vue';
import Vuex from 'vuex';
import time from "@/store/data";
Vue.use(Vuex);
/* interface ITodoState{
 TaskList:Array<Object>,
 currentIndex:Number
} */
const store = new Vuex.Store({
  state: {
    TaskList: [
      {
        icon: "user",
        name: 'User',
        todoList: [
          {
            id: 1,
            TakeName: 'qu yue',
            isDelete: false,
            isDone: false,
            time: time.today
          }
        ],
        colors: ["#ff6262", "#ffa947"]
      },
      {
        icon: 'tasks',
        name: 'tasks',
        todoList: [
          {
            id: 2,
            TakeName: '学习HTML',
            isDelete: true,
            isDone: false,
            time: time.today
          },
          {
            id: 3,
            TakeName: '学习CSS',
            isDelete: false,
            isDone: true,
            time: time.today
          },
          {
            id: 4,
            TakeName: '学习JavaScript',
            isDelete: false,
            isDone: false,
            time: time.today
          },
          {
            id: 5,
            TakeName: '学习Vue',
            isDelete: false,
            isDone: false,
            time: time.tomorrow
          },
          {
            id: 6,
            TakeName: '学习React',
            isDelete: false,
            isDone: false,
            time: time.tomorrow
          },
        ],
        colors: ["#5b9df9", "#47bfcf"]
      },
      {
        icon: 'home',
        name: 'Home',
        todoList: [{
          id: 7,
          TakeName: 'my home',
          isDelete: false,
          isDone: false,
          time: time.today
        }],
        colors: ["#2c7d59", "#3ba776"]
      }
    ],
    currentIndex: 0,
    currentSelectTodo: {}
  },
  mutations: {

    CurrentIndexAdd(state) {

      state.currentIndex++

    },
    CurrentIndexReduce(state) {
      state.currentIndex--
    },
    SelectTodo(state, todo) {
      state.currentSelectTodo =todo
    },
    clearSelectTodo(state) {

      state.currentSelectTodo = {}
    },
    isTackDone(state, todo) {

      todo.isDone = !todo.isDone

    },
    deletdTodo(state, todo) {

      todo.isDelete = true
      // todo.isDone = false
    },
    updateTodoList(state, todo) {

      state.currentSelectTodo.todoList.unshift(todo)

    }
  },
  actions: {},
  modules: {}
});
export default store;
