<template>
  <div>
    <Modal v-model:open="props.isOpen" title="Bạn đánh giá gia sư này như thế nào?" @ok="submitForm" :maskClosable="false"
      :closable="false">
      <form class="modal-body text-center" name="ratingCourseForm">
        <div class="">
          <star-rating @update:rating="setRating" :star-size="30" :animate="true" :show-rating="false"></star-rating>
        </div>
        <!-- end leave-rating -->
        <div class="leave-rating mt-3" style="width: 80%">
          <textarea class="form-control" v-model="ratingData.comment" placeholder="Nhập thông điệp đánh giá..."
            id="TeacherRatingModel_Messager" name="TeacherRatingModel.Messager"></textarea>
        </div>
      </form>
      <template #footer>
        <div>
          <Button @click="handleClose">Hủy</Button>
          <Button type="primary" @click="ratingData.rating && submitForm()"> Đánh giá </Button>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, reactive } from "vue";
import $http from "@/services/httpService";
import get from 'lodash/get'
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";

const props = defineProps({
  isOpen: Boolean,
  tutorId: String,
});

const setRating = (rating) => {
  ratingData.rating = rating;
}

const emits = defineEmits(["update:isOpen", "createSuccess"]);
const user = $auth.getUser;

const ratingData = reactive({
  user_id: user?.id,
  rating: 0,
  comment: null,
});

const submitForm = async () => {
  const res = await $http.post(`/user/${props.tutorId}/rating`, { ...ratingData })

  if (get(res, 'data.result', false)) {
    createToast('Đánh giá thành công!', {
      type: 'success',
      timeout: 3000
    })
    emits('createSuccess');
  }
};
const handleClose = () => {
  emits("update:isOpen", false);
};
</script>
