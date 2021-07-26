<template>
  <div>
    <Head></Head>
    <Avatar></Avatar>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Head from '@/components/Head.vue';
import Avatar from '@/components/Avatar.vue';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: {
    Avatar,
    Head,
    TodoList,
  },
})
export default class Home extends Vue {

}
</script>

<style lang="less">

</style>
