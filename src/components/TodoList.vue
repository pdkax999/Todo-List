
<!--
有时候需求很好实现,只是你没想到 , 动态控制list宽度,为绑定一个点击事件计算方向 不移动todoList ,统一移动单个todo,并为容器设置 溢出隐藏
-->
<template>
  <div class="todoList-container" ref="todoContainer">
      <div class="todoList"  :style="{width:TaskData.length*100+'%'}">
        <div class="todo-info" v-for="(todo,index) in TaskData" :key="index"  :style="{transform:currentIndex}"
        @click="showTododetail(todo)"
        >
         <Todo  :todo="todo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit} from 'vue-property-decorator';
import Todo from '@/components/Todo.vue';

@Component({
  components: {
    Todo,
  },
})

export default class TodoList extends Vue {
  touch: any;
  get TaskData(){
   return this.$store.state.TaskList
  }
  get currentIndex(){

    return 'translateX('+-this.$store.state.currentIndex*100+'%)'
  }

  @Emit('click')
  showTododetail(todo:object){

    this.$store.commit('SelectTodo',todo)

  }

  mounted(){

  let container: HTMLElement =(<any>this.$refs).todoContainer

  this.touch={}

   container.addEventListener('touchstart',(event)=>{

     this.touch.startTouch=event.touches[0].clientX

  })

   container.addEventListener('touchend',(event)=>{

     this.touch.endTouch=event.changedTouches[0].clientX

      if(Math.abs(this.touch.startTouch-this.touch.endTouch)>10){


          if(this.touch.startTouch>this.touch.endTouch){

              if(this.$store.state.currentIndex<2){


                this.$store.commit('CurrentIndexAdd')
              }


          }else{

            if(this.$store.state.currentIndex>0){
               this.$store.commit('CurrentIndexReduce')
            }


          }


      }

    //  event.stopPropagation()
  })





  }

}
</script>

<style lang="less">

.todoList-container{
width: 100%;
margin-top: 30px;overflow: hidden;//因为移动todo,会出现溢出

  .todoList{
    display: flex;

  .todo-info{

      width: 25%; //相对于list宽度
      height: 319px;
      margin-left: 15px;
      transition: all .6s;
        /*todo样式*/
    }

  }

  }

</style>
