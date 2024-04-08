<template>
<!--    <Breadcrumb :breadcrumbs="breadcrumbs"/>-->
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
                    label="Tên danh mục"
                    name="name"
                >
                  <a-input v-model:value="form.name"/>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8" :lg="8">
                <a-form-item
                    label="Trạng thái"
                    name="status"
                >
                  <a-input v-model:value="form.status"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :xs="24" :md="24" :lg="24">
                <a-form-item>
                  <div class="d-flex justify-content-end">
                    <a-button type="primary" html-type="submit">Tìm kiếm</a-button>
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
  </div>
</template>
<script>
import Breadcrumb from "../../components/breadcrumb.vue";
import columns from "./columns.js";

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: 'Quản lý danh mục'
        }
      ],
      activeKey: [1, 2],
      form: {
        name: '',
        status: '',
      },
      data: [],
      loading: false,
      columns,
    }
  },
  methods: {
  }
}
</script>
