<template>
  <div>
    <Modal
      :open="props.isOpen"
      title="Vui lòng chọn 1 lý do báo cáo?"
      @ok="submitForm"
      :maskClosable="false"
      :closable="false"
    >
      <div name="reportForm">
        <div>
          <a-radio-group
            v-model:value="reportData.type"
            style="width: -webkit-fill-available; display: grid; gap: 8px"
          >
            <a-radio :value="1">Nội dung không phù hợp</a-radio>
            <a-radio :value="2">Giả mạo ai đó</a-radio>
            <a-radio :value="3">Gian lận và lừa đảo</a-radio>
            <a-radio :value="4"> Khác </a-radio>
          </a-radio-group>
          <div>
            <a-textarea
              v-if="reportData.type === 4"
              v-model:value="reportData.reason"
              placeholder="vui lòng nhập nội dung báo cáo khác"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <div>
          <Button @click="handleClose">Hủy</Button>
          <Button type="primary" @click="submitForm"> Khiếu Nại </Button>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, reactive } from "vue";
import $http from "@/services/httpService";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";

const props = defineProps({
  isOpen: Boolean,
  relationId: String,
});

const emits = defineEmits(["update:isOpen", "createSuccess"]);
const user = $auth.getUser;

const reportData = reactive({
  user_id: user?.id,
  relation_id: props.relationId,
  reason: null,
  type: 1,
});

const submitForm = async () => {
  const res = await $http.post(`/report`, {
    ...reportData,
  });

  if (get(res, "data.result", false)) {
    createToast("Báo cáo thành công!", {
      type: "success",
      timeout: 3000,
    });
    handleClose();
    emits("createSuccess");
  }
};
const handleClose = () => {
  emits("update:isOpen", false);
};
</script>
