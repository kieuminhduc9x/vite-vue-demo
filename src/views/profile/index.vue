<template>
  <Breadcrumb :breadcrumbs="breadcrumbs"/>
  <div class="px-[40px] py-[20px]">
    <a-row :gutter="16">
      <a-col :xs="24" :md="6" :lg="6">
        <p class="text-[#00000073] text-[18px] font-semibold">Ảnh đại diện</p>
        <div id="avatar"
             class="w-[275px] h-[275px] border rounded-full items-center justify-center content-center m-auto">
          <img src="../../assets/image/avatar.png" alt="" class="w-full h-full rounded-full">
        </div>
        <a-upload
            v-model:file-list="fileList"
            name="file"
            class=" w-full flex justify-center mt-[12px]"
        >
          <p class="text-blue-500 cursor-pointer mt-[5px] font-semibold m-auto">
            <UploadOutlined/>
            Thay đổi ảnh đại diện
          </p>
        </a-upload>
      </a-col>
      <a-col :xs="24" :md="12" :lg="12">
        <a-card title="Thông tin liên hệ">
          <template #extra>
            <a href="#" class="font-semibold text-blue-500" @click="onEditForm">Cập nhật</a>
          </template>
          <a-form
              :model="form"
              name="basic"
              layout="vertical"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
          >
            <a-form-item
                label="Tài khoản"
                name="username"
                :rules="[{ required: isEdit, message: 'Please input your username!' }]"
            >
              <a-input v-if="isEdit" v-model:value="form.username"/>
              <p v-else class="text-gray-500 text-xl">{{ form.username }}</p>
            </a-form-item>
            <a-form-item
                label="Họ và tên"
                name="fullname"
            >
              <a-input v-if="isEdit" v-model:value="form.fullname"/>
              <p v-else class="text-gray-500 text-xl">{{ form.fullname }}</p>
            </a-form-item>
            <a-form-item
                label="Ngày sinh"
                name="birthDate"
            >
              <a-date-picker v-if="isEdit" v-model:value="form.birthDate" format="DD/MM/YYYY"/>
              <p v-else class="text-gray-500 text-xl">{{ dayjs(form.birthDate).format('DD/MM/YYYY') }}</p>
            </a-form-item>
            <a-form-item
                label="Giới tính"
                name="gender"
            >
              <a-select v-if="isEdit" :options="genderList" v-model:value="form.gender" format="DD/MM/YYYY"/>
              <p v-else class="text-gray-500 text-xl">{{ getGender(form.gender, genderList) }}</p>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import Breadcrumb from "../../components/breadcrumb.vue";
import {reactive, ref} from 'vue';
import dayjs from "dayjs";


const form = reactive({
  username: 'admin',
  fullname: 'Kiều Minh Đức',
  birthDate: dayjs('1999-03-08', 'YYYY-MM-DD'),
  gender: '1',
});

const breadcrumbs = ref([
  {
    name: 'Thông tin chi tiết'
  }
])
const fileList = ref([])
const genderList = ref([
  {
    value: '1',
    label: 'Nam'
  },
  {
    value: '2',
    label: 'Nữ'
  }
])
const isEdit = ref(false)

const onEditForm = () => {
  isEdit.value = !isEdit.value
}

const getGender = (value, array) => {
  if (array && value) {
    const obj = array.find(item => item.value === value)
    return obj.label
  }
}

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>
