<template>
  <div class="todoList-container" ref="todoContainer">
      <div class="todoList"  :style="{width:TaskData.length*100+'%'}">
        <div class="todo-info" v-for="(todo,index) in TaskData" :key="index"  :style="{transform:currentIndex}">
         <Todo  :todo="todo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
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

     
  })
  
    
    
    

  }

}
</script>

<style lang="less">

.todoList-container{
width: 100%;
margin-top: 30px;
  overflow: hidden;

  .todoList{
    display: flex;
    // transition: all .5s;
  .todo-info{
      // width: 281px;
      width: 25%;
      height: 319px;
      margin-left: 15px;
      transition: all .6s;
        /*todo样式*/
    }

  }

  }

</style>
