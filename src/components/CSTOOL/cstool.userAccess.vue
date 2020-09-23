<template>
	<section class="font_ui br-b_1 br-r_1 br_solid br_shade-4">
		<div class="flex">
			<StatusIcon :state="status" class="flex_shrink" />
			<div class="flex_auto p-l_4">
				<span class="font_bold block">{{full_name}}</span>
				<span class="font_n2 c_primary block">{{search_by}}</span>
			</div>
			<div class="flex_auto flex flex_column flex_row:md">
				<div
					class="flex_auto flex p-b_3 p-r_5 p-r_4:md"
					v-for="(productObject, index) in products"
					v-bind:key="productObject.product"
				>
					<SwitchInput
						v-bind="productObject"
						class="flex_auto self_center"
						:state="'success'"
						:size="'tiny'"
						:switchID="productObject.product"
						:isChecked="productObject.hasAccess"
						@onClick="updateProduct(index, ...arguments)"
					>{{productObject.name}}</SwitchInput>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import StatusIcon from "../subComponents/StatefullIcon";
import SwitchInput from "../subComponents/SwitchInput";
export default {
	name: "user",
	components: {
		StatusIcon,
		SwitchInput
	},
	props: {
		id: { type: Number },
		full_name: { type: String },
		search_by: { type: String },
		products: { type: Array }
	},
	methods: {
		updateProduct(index, value) {
			console.log(value);
			this.products[index].hasAccess = value;
		}
	},
	computed: {
		status() {
			let someAccess = this.products.some(product => product.hasAccess == true);
			return someAccess ? "success" : "shade";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>