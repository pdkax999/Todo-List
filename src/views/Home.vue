<template>
  <div class="home">
    <Head :Title='"Todo"'></Head>
    <Avatar></Avatar>
    <todo-list @click="toggleDetailShow"></todo-list>
    <TodoDeatail  :show='tododetailShow'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Head from '@/components/Head.vue';
import Avatar from '@/components/Avatar.vue';
import TodoList from '@/components/TodoList.vue';
import TodoDeatail from "@/components/TodoDeatail.vue";

@Component({
  components: {
    Avatar,
    Head,
    TodoList,
    TodoDeatail
  },
})
export default class Home extends Vue {
   
   tododetailShow:Boolean = false


    toggleDetailShow(){

        this.tododetailShow= !this.tododetailShow

    }


}
</script>

<style lang="less">


  

</style>
