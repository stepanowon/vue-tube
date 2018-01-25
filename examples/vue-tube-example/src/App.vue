<template>
  <div id="app">
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      listType : <input type="text"  v-model="temp.listType" /><br />
      list : <input type="text"  v-model="temp.list" /><br />
      loop : <input type="number"  v-model.number="temp.loop" /><br />
      <button @click="playYoutube">Play</button>
    </div>
    <VueTube :videoid="play.video_id" :width="640" :height="480" :autoplay="1" :loop="play.loop" :listType="play.listType" :list="play.list" />
  </div>
</template>

<script>
import VueTube from 'vue-tube'

export default {
  name: 'App',
  data() {
    return { 
      temp: { video_id:"PABUl_EX_hw", listType:"search", list:"", loop:0 },
      play : { video_id:"PABUl_EX_hw", listType:"search", list:"", loop:0 }
    }
  },
  components: {
    VueTube
  },
  methods: {
    playYoutube() {
      this.play = Object.assign(this.play, this.temp)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vid_input { margin:10px 10px 10px 10px; width:640px; }
</style>
