<template>
  <div>
    <div class="author">
      <div class="img">
        <img src="../assets/mytou.jpg" alt />
      </div>
      <div class="content">
        <h3 class="title">您好,未闻</h3>
        <p>
          <span>今天天气不错</span>
          <span>你今天有 {{StayTasks}} 个任务需要完成</span>
        </p>
      </div>
      <div class="date">
        <span>日期 :</span>
        <span>{{ timeobj.today | getTime}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import time from "@/store/data.ts";

@Component({
  filters: {
    getTime(val: string): string {
      return `${time.today.getFullYear()}/${time.today.getMonth() +
        1}/${time.today.getDate()}`;
    }
  }
})
export default class Avatar extends Vue {
  timeobj: Object = time;

  get StayTasks() {
   
    
   return  this.$store.state.TaskList.reduce((pre: number, todo: object) => {
      let result= todo.todoList.filter((item)=>{
        return !item.isDone
      }).length

     return  pre+=result
      
    }, 0)
  }
}
</script>

<style lang="less">
.author {
  padding: 30px;
  padding-bottom: 0;
  .img {
    width: 100%;
    height: 66px;
    img {
      width: 66px;
      height: $width;
      display: block;
      border-radius: 50%;
    }
  }

  .content {
    padding: 20px 0;

    .title {
      font-weight: bold;
      font-size: 25px;
      color: white;
      padding-bottom: 20px;
    }

    p {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: white;
      line-height: 23px;
    }
  }
  .date {
    width: 100%;
    color: white;
    span {
      font-size: 18px;
    }
  }
}
</style>
