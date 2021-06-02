<template>
	<div
		class="flex flex_row:md flex_column-reverse flex_nowrap justify_start gap-x_4 gap-y_2"
	>
		<div
			v-for="(category, index) in categories"
			:key="'category' + index"
			class="flex_shrink p_3"
			:class="[
				{
					'bg_black-1 br_radius order_0':
						category.value == 'recommendation',
				},
				{ order_2: category.value != 'recommendation' },
			]"
		>
			<div
				v-if="category.value == 'recommendation'"
				class="flex_row:lg flex_column flex justify_start"
			>
				<SwitchToggle
					class="self_center:lg self_start"
					:size="swithcSize"
					:activeState="category.activeState"
					:insetShadow="true"
					:notActiveState="category.notActiveState"
					@onClick="onClick($event, category.value)"
				>
					{{ category.label }}
				</SwitchToggle>
				<Btn
                    @onClick="$emit('onModalOpen')"
					class="m-t_3 m-t_0:lg m-l_4:lg"
					:state="'secondary'"
					:shadow="true"
					:size="buttonSize"
					:isDisabled="!recIsActive"
					>Recommendation Filters</Btn
				>
			</div>
			<div v-else>
				<SwitchToggle
					class="self_center"
					:size="swithcSize"
					:activeState="category.activeState"
					:insetShadow="true"
					:notActiveState="category.notActiveState"
					@onClick="onClick($event, category.value)"
				>
					{{ category.label }}
				</SwitchToggle>
			</div>
		</div>
	</div>
</template>

<script>
import SwitchToggle from "../subComponents/SwitchToggle.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	components: {
		SwitchToggle, Btn
	},
	props: {
		swithcSize: { type: String, default: "small" }, 
        buttonSize: { type: String, default: "small" },
		categories: {
			type: Array,
			default: () => []
		},
	},
	data() {
		return {
			recIsActive: false
		}
	},
	methods: {
		onClick(e, v) {
			if (v === 'recommendation') {
				this.recIsActive = e.isActive
			}
			this.$emit('onClick', { 'type': v, 'isActive': e.isActive });
		}
	},
}
</script>

<style scoped>
</style>