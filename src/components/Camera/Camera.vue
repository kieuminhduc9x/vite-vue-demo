<template>
  <a-modal
      :visible="visible"
      width="800px"
      title="Camera"
      @cancel="closeModal"
      class="p-5">
    <a-spin :spinning="loading" >
      <Camera
          ref="camera"
          :autoplay="false"
          class="camera-display"
          :facingMode="'user'"
          :imageType="'base64'"
          :enableCaptureButton="true"
          :enableFlipButton="true"
          :enableVideo="true"
          @started="started"
          @stopped="stopped"
          @snapshot="snapshot"
          @error="error"
          @camera-change="cameraChange"
          @currentDeviceID="currentDeviceID"
          @capture="handleCapture"
              ></Camera>
    </a-spin>
    <div v-if="capturedImage !== null">
      <img :src="capturedImage" alt="Ảnh đã chụp" style="max-width: 100%; max-height: 300px;">
    </div>
    <template #footer>
      <div class="d-flex justify-content-end">
        <a-button key="start" type="primary" @click="startCamera">Start</a-button>
        <a-button key="stop"  @click="stopCamera">Stop</a-button>
        <a-button key="snapshot" @click="handleSnapshot">handleSnapshot</a-button>
        <a-button key="close"  @click="closeModal">Đóng</a-button>
      </div>
    </template>
  </a-modal>
</template>
<script>
import Camera from "simple-vue-camera";
import notification from "ant-design-vue/es/notification";

export default {
  components: {
    Camera
  },
  props: {
    visibleCamera: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  mounted() {
    if (this.visibleCamera) {
      this.visible = this.visibleCamera
    }
  },
  data() {
    return {
      visible: false,
      loading: false,
      capturedImage: null
    }
  },
  methods: {
    async snapshot() {
      const blob = await Camera.value?.snapshot();
      console.log(this.$refs.camera.value)
      // To show the screenshot with an image tag, create a url
      const url = URL.createObjectURL(blob);
      console.log(url)

    },
    async handleSnapshot(imageSrcPromise) {
      try {
        const imageSrc = await imageSrcPromise;
        console.log('Captured image:', imageSrc);

        // Tải ảnh dưới dạng Blob
        const response = await fetch(imageSrc);
        const blob = await response.blob();

        // Đọc Blob và lưu vào thư mục assets/images
        const reader = new FileReader();
        reader.onload = async () => {
          const imageArrayBuffer = reader.result;

          // Gửi imageArrayBuffer lên server hoặc lưu trữ ảnh vào thư mục assets/images
          await this.saveImageToAssets(imageArrayBuffer);
        };
        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.error('Error while handling snapshot:', error);
      }
    },

    async saveImageToAssets(imageArrayBuffer) {
      console.log(imageArrayBuffer,'imageArrayBuffer')
      try {
        // Gửi imageArrayBuffer lên server hoặc lưu trữ ảnh vào thư mục assets/images
        // Dưới đây là một ví dụ giả định sử dụng một API để lưu trữ ảnh
        const response = await fetch('/api/save-image', {
          method: 'POST',
          body: imageArrayBuffer
        });

        if (response.ok) {
          console.log(response, response.ok)
          console.log('Ảnh đã được lưu vào thư mục assets/images');
        } else {
          console.error('Lỗi khi lưu ảnh:', response.statusText);
        }
      } catch (error) {
        console.error('Error while saving image to assets/images:', error);
      }
    },

    startCamera() {
      this.$refs.camera.start()
      console.log('start')
      this.loading = true
    },
    started () {
      console.log('started')
      this.loading=false
    },
    stopCamera() {
      console.log('stop')
      this.loading = true
      this.$refs.camera.stop()
    },
    stopped () {
      console.log('stopped')
      this.loading = false
    },
    error () {
      notification.error({description: 'Lỗi không mở được camera'})
    },

    cameraChange (deviceID){
      console.log(`Camera has been changed to ${deviceID}`);
    },

    currentDeviceID (deviceID){
      console.log(`Camera has been changed to ${deviceID}`);
    },

    captureImage() {
      // Thực hiện hành động chụp ảnh từ camera
      // Điều này có thể được thực hiện bằng cách gọi một phương thức trong simple-vue-camera
      this.$refs.camera.capture();
    },
    handleCapture(imageSrc) {
      console.log('Captured image:', imageSrc);
      // Xử lý hình ảnh được chụp ở đây
    },



    closeModal () {
      this.visible = false
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang="less">
.camera-display {
  width: 300px; /* Độ rộng phần hiển thị camera */
  height: 400px; /* Chiều cao phần hiển thị camera */
}
</style>
