<template>
  <div class="home">
    <Head :Title="'Todo'"></Head>
    <Avatar></Avatar>
    <todo-list @click="toggleDetailShow"></todo-list>
    <TodoDeatail :show="tododetailShow" />
    <add-todo v-show="isTodoAddShow" :closeCall='toggleAddShow'></add-todo>
    <Button @click="toggleAddShow" :show='isTodoAddShow'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Head from "@/components/Head.vue";
import Avatar from "@/components/Avatar.vue";
import TodoList from "@/components/TodoList.vue";
import TodoDeatail from "@/components/TodoDeatail.vue";
import Button from "@/components/Button.vue";
import AddTodo from "@/components/addTodo.vue";

@Component({
  components: {
    Avatar,
    Head,
    TodoList,
    TodoDeatail,
    Button,
    AddTodo
  }
})
export default class Home extends Vue {
  tododetailShow: Boolean = false;
  todoAddShow: Boolean = false;

  get isTodoAddShow() {
    return Object.keys(this.todoSelectdata).length > 0 && this.todoAddShow;
  }
  toggleDetailShow() {
    this.tododetailShow = !this.tododetailShow;
  }
  toggleAddShow() {
    this.todoAddShow = !this.todoAddShow;
  }
  get todoSelectdata() {
    return this.$store.state.currentSelectTodo;
  }
}
</script>

<style lang="less">
</style>
