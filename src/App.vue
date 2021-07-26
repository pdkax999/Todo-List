<template>
  <div>
    <Home></Home>
    <BgColor/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import BgColor from '@/views/BgColor.vue';

@Component({
  components: {
    Home,
    BgColor
  },
})

export default class App extends Vue {

}

</script>

<style lang="less">
.box{
  width: 50%;
  height: 50px;
  background-color: red;
}

</style>
