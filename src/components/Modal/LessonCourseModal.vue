<template>
  <div>
    <a-modal
      :open="props.isOpen"
      title="Thêm nội dung bài học"
      @ok="submitForm"
      :maskClosable="false"
      :closable="false"
      width="1000px"
    >
      <div name="body">
        <div>
          <a-input-group size="large" class="mb-3"> 
            <a-row :gutter="8">
              <a-col :span="3">
                <p
                  style="
                    margin: 0;
                    height: 100%;
                    display: flex;
                    align-items: center;
                  "
                >
                  Tổng số bài học
                </p>
              </a-col>
              <a-col :span="5">
                <a-input v-model:value="num_of_lesson" />
              </a-col>
            </a-row>
          </a-input-group>

          <a-steps :current="current" :items="mapItems()" style="display: flex; justify-content: center;"></a-steps>
          <div class="steps-content mb-3 mt-3">
            <p>Điền thông tin bài học</p>
            <a-input
              v-model:value="steps[current].title"
              addon-before="Tiêu đề"
              class="mb-3"
            />
            <a-input
              v-model:value="steps[current].url"
              addon-before="Link bài học"
            />
          </div>
          <div class="steps-action">
            <a-button v-if="current > 0" style="margin-right: 8px" @click="prev"
              >Bài {{ current }}</a-button
            >
            <a-button
              v-if="current < steps.length - 1"
              type="primary"
              @click="next"
              >Tiếp theo</a-button
            >
            <a-button
              v-if="current == steps.length - 1"
              type="primary"
              @click="onSubmitLessonCourse"
            >
              Hoàn thành
            </a-button>

          </div>
        </div>
      </div>
      <template #footer>
        <!-- <div>
          <Button @click="handleClose">Hủy</Button>
          <Button type="primary" @click="submitForm"> Thêm bài học </Button>
        </div> -->
      </template>
    </a-modal>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, reactive, ref } from "vue";
import $http from "@/services/httpService";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";
import { watch } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["update:isOpen", "createSuccess"]);
const user = $auth.getUser;

const current = ref(0);
const num_of_lesson = ref(2);

const next = () => {
  current.value++;
};
const prev = () => {
  current.value--;
};
const steps = reactive([]);

const createSteps = () => {
  if (num_of_lesson.value > steps.length) {
    for (let i = steps.length; i < num_of_lesson.value; i++) {
      steps.push({
        title: null,
        url: null,
      });
    }
  }
  else if (num_of_lesson.value < steps.length) {
    steps.splice(num_of_lesson.value);
  }
}

createSteps()

const mapItems = () => {
  return steps.map((item) => ({
    key: item.title,
  }));
};

const reportData = reactive({
  user_id: user?.id,
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

const onSubmitLessonCourse = () => {
  console.log(steps);
}

watch(num_of_lesson, (newVal) => {
  if (!newVal) return;
  
  createSteps()
});

watch(steps, () => {
  mapItems();
});
</script>
