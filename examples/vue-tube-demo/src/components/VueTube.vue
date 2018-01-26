<template>
    <div class="styleContainer">
        <iframe :style="stylePlayer" type="text/html" 
            :width="width" :height="height"
            :src="videoSrc" :title="videoid"
            frameBorder="0"
            allowFullScreen="1" />
    </div>
</template>

<script>
export default {
    name: 'youtube-vue',
    /**
    * @Properties
    * @width {Number} width of player 
    * @height {Number} height of player
    * @autoplay {Number} autoplay of player =(0,1:autoplay) - default value:0
    * @videoid {String} - Youtube video id
    * @hl {String} interface language(ex:ko, en) - default value:en
    * @loop {Number} (0,1:loop) - default value:0
    * @rel {Number} display relative video(0, 1:display) - default value:0
    * @listType {String} list type - ('search', 'playlist', 'user_uploads')
    * @list {String} (listType:'search'-> search keyword), (listType:'user_uploaded'-> uploaded youtube channel), (listType:'playlist'-> playlist_id)
    */
    props: {
        width: { type:Number, default:480 },
        height: { type:Number, default:320 },
        autoplay: { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },
        videoid : { type:String, required:true },
        hl: { type:String, default:'en' },
        loop : { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },
        rel : { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },  
        listType: { type:String, required:false, validator: (v) => v==="search"||v==="user_uploades"||v==="playlist" },
        list: { type:String, required:false }  
    },
    computed : {
        stylePlayer() {
            return { width:this.width, height:this.height }
        },
        videoSrc() {
            //**props validation!!
            if (this.videoid && this.videoid.trim() !== '') 
                if (this.loop === 1)
                    return `https://www.youtube.com/embed/${this.videoid}?autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}&playlist=${this.videoid}`;
                else if (this.loop === 0)
                    return `https://www.youtube.com/embed/${this.videoid}?autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}`;                    
                else
                    throw new Error('loop props must be 0 or 1.')
            else if (this.listType.trim() !== '' && this.list.trim() !== '')
                return `https://www.youtube.com/embed?listType=${this.listType}&list=${this.list}&autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}`;
            else
                throw new Error('Invalid props: either videoid or (listType, list) must be assigned.')
        }
    }
}
</script>

<style scoped>
    .styleContainer { margin:0; padding:0; }
</style>
