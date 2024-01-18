<template>
  <div>
    <a-modal
      :open="props.isOpen"
      title="Thêm nội dung bài học"
      :maskClosable="false"
      :closable="false"
    >
      <div name="body">
        <div>
          <a-input-group size="large" class="mb-3">
            <a-row :gutter="6">
              <a-col :span="6">
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

          <a-steps
            :current="current"
            :items="mapItems()"
            style="display: flex; justify-content: center"
          ></a-steps>
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
          <div class="steps-action"></div>
        </div>
      </div>
      <template #footer>
        <Button @click="handleClose">Hủy</Button>
        <a-button v-if="current > 0" style="margin-right: 8px" @click="prev"
          >Bài {{ current }}</a-button
        >
        <a-button v-if="current < steps.length - 1" type="primary" @click="next"
          >Tiếp theo</a-button
        >
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="onSubmitLessonCourse"
        >
          Hoàn thành
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, reactive, ref } from "vue";
import { watch } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["update:isOpen", "createLessonCourse"]);

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
  } else if (num_of_lesson.value < steps.length) {
    steps.splice(num_of_lesson.value);
  }
};

createSteps();

const mapItems = () => {
  return steps.map((item) => ({
    key: item.title,
  }));
};

const onSubmitLessonCourse = async () => {
  emits("createLessonCourse", steps);
};

const handleClose = () => {
  emits("update:isOpen", false);
};

watch(num_of_lesson, (newVal) => {
  if (!newVal) return;

  createSteps();
});

watch(steps, () => {
  mapItems();
});
</script>
