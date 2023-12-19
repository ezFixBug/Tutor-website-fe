<template>
    <div>
        <Modal v-model:open="props.isOpen" title="Bạn đánh giá khoá học này như thế nào?" @ok="handleOk"
            :maskClosable="false" :closable="false">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <template #footer>
                <div class="flex w-full justify-between">
                    <Button @click="handleClose">Hủy</Button>
                    <Button type="primary" @click="handleOk"> Đánh giá </Button>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    isOpen: Boolean,
});
const emits = defineEmits(["update:isOpen", "createSuccess"]);

const handleOk = (e) => {
    console.log(e);
    open.value = false;
    emits("update:isOpen", false);
};
const handleClose = () => {
    emits("update:isOpen", false);
};
</script>
