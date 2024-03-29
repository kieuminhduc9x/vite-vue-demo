<template>
<!--  <Breadcrumb :breadcrumbs="breadcrumbs"/>-->
  <div class="p-3">
    <a-row :gutter="16">
      <a-col :xs="24" :md="24" :lg="24">
        <a-card title="Thông tin tìm kiếm">
          <a-form
              :model="form"
              name="basic"
              layout="vertical"
              autocomplete="off"
          >
            <a-row :gutter="16">
              <a-col :xs="24" :md="8" :lg="8">
                <a-form-item
                    label="Tên khách hàng"
                    name="name"
                >
                  <a-input v-model:value="form.name"/>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8" :lg="8">
                <a-form-item
                    label="Số điện thoại"
                    name="phone"
                >
                  <a-input v-model:value="form.phone"/>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8" :lg="8">
                <a-form-item
                    label="Email"
                    name="email"
                >
                  <a-input v-model:value="form.email"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :xs="24" :md="24" :lg="24">
                <a-form-item>
                  <div class="d-flex justify-content-end">
                    <a-button type="primary" html-type="submit">Tìm kiếm</a-button>
                    <a-button type="primary" @click="showModalCamera" class="ms-2">Bật camera</a-button>
                    <a-button type="primary" @click="showModalVideo" class="ms-2">Bật Video</a-button>
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>

        </a-card>
        <a-card title="Kết quả tìm kiếm" class="mt-3">
          <a-table
              :data-source="data"
              :columns="columns"
              :pagination="false"
          ></a-table>
        </a-card>
      </a-col>
    </a-row>
    <Camera v-if="visibleCamera === true" :visibleCamera="visibleCamera" @closeModal="closeModal"></Camera>
    <Video v-if="visibleVideo === true" :visibleVideo="visibleVideo" @closeModal="closeModalVideo"></Video>
  </div>
</template>
<script>
import Breadcrumb from "../../components/breadcrumb.vue";
import columns from "./columns.js";
import Camera from "../../components/Camera/Camera.vue";
import Video from "../../components/video/Video.vue";

export default {
  components: {
    Breadcrumb,
    Camera,
    Video
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: 'Quản lý khách hàng'
        }
      ],
      activeKey: [1, 2],
      form: {
        name: '',
        phone: '',
        email: ''
      },
      data: [],
      loading: false,
      columns,
      visibleCamera: false,
      visibleVideo: false
    }
  },
  methods: {
    showModalCamera () {
      this.visibleCamera = true
      console.log(this.visibleCamera)
    },
    closeModal () {
      this.visibleCamera = false
    },

    showModalVideo () {
      this.visibleVideo = true
      console.log(this.visibleVideo)
    },
    closeModalVideo () {
      this.visibleVideo = false
    }
  }
}
</script>
