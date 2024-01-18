<template>
	<div class="d-flex align-items-center justify-content-between pb-4">
		<h3 class="fs-22 font-weight-semi-bold">Nội dung đánh giá</h3>
		<span class="ribbon ribbon-lg">{{ reviewList.length }}</span>
	</div>
	<div class="comment-list">
		<div v-for="rating in reviewList" :key="rating.id"
			class="media media-card border-bottom border-bottom-gray pb-4 mb-4">
			<div class="media-img mr-4 rounded-full">
				<img class="rounded-full lazy" :src="rating.user.avatar" alt="User image" style="
            border-radius: 50% !important;
            width: 70px !important;
            height: 70px !important;
          " />
			</div>
			<div class="media-body">
				<h5 class="	fs-15 mr-2" style="width: fit-content; float: left">
					{{ rating.user.full_name }}
				</h5>
				<span class="d-block lh-18 pb-2 fs-12">{{
					getCreateAt(rating.created_at)
				}}</span>
				<star-rating v-model:rating="rating.rating" :increment="0.01" :read-only="true" :star-size="20"
					:show-rating="false"></star-rating>
				<p class="pb-3">{{ rating.comment }}</p>
			</div>
		</div>
	</div>
</template>
<script>
import dayjs from "dayjs";

export default {
	props: {
		reviewList: {
			type: Array,
			default: () => [],
		},
	},

	methods: {
		getCreateAt(date) {
			return dayjs(date).format("DD/MM/YYYY");
		},
	},
};
</script>
