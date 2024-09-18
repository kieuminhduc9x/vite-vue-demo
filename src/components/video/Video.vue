<template>
  <a-modal
      :visible="visible"
      width="800px"
      title="Call video"
      @cancel="closeModal"
      class="p-5">
    <a-spin :spinning="loading">
      <video
          id="my-video"
          ref="video"
          class="video-js"
          controls
          preload="auto"
          width="640"
          height="264"
          data-setup="{}">
        <source :src="videoSource" type="video/mp4"/>
        <p class="vjs-no-js">
          Để xem video này, vui lòng bật JavaScript và xem xét việc nâng cấp lên trình duyệt web
          <a href="https://videojs.com/html5-video-support/" target="_blank">hỗ trợ HTML5 video</a>
        </p>
      </video>
      <template #footer>
        <div class="d-flex justify-content-end">
          <!--        <a-button key="start" type="primary" @click="startCamera">Start</a-button>-->
          <!--        <a-button key="stop"  @click="stopCamera">Stop</a-button>-->
          <!--        <a-button key="snapshot" @click="handleSnapshot">handleSnapshot</a-button>-->
          <a-button key="close" @click="closeModal">Đóng</a-button>
        </div>
      </template>
    </a-spin>
  </a-modal>
</template>
<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default {
  components: {},
  props: {
    visibleVideo: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  mounted() {
    if (this.visibleVideo) {
      this.visible = this.visibleVideo
    }
    this.$nextTick(() => {
      this.player = videojs(this.$refs.videoElement);
    });
  },
  data() {
    return {
      visible: false,
      loading: false,
      videoSource: "path/to/your/video.mp4",
      player: null
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang="less">
.camera-display {
  width: 300px;
  height: 400px;
}
</style>
