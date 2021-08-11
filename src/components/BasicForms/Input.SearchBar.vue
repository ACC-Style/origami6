<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
	>
		<template v-slot:default><slot name="default"></slot></template>
		<template v-slot:input>
				<div class="relative flex flex_grow">
					<input
                        :id="'input_'+id"
                        :name="'input_'+id"
                        class="br_2
							p-y_2
							br_solid
							flex_auto
							p-l_4
							lh_3
							br-tl_radius
							br-bl_radius
							bg_white"
						:type="type"
						:value="inputValue"
						:required="required"
						:placeholder="placeholder"
						:class="inputStyles"
						:disabled="thisState == 'disabled'"
						@input="onChange($event)"
			/>
					<Btn
						v-show="inputValue != null && inputValue.length > 0"
						class="absolute t_0 b_0 r_0"
						:state="'empty'"
						:shadow="false"
						@onClick="inputValue = ''"
					>
						<i class="far fa fa-times self_center"></i>
					</Btn>
				</div>
				<div class="flex flex_shrink">
					<Btn
						class="br-tl_square br-bl_square"
						:shadow="false"
						:isDisabled="
							thisState == 'disabled' || inputValue == ''
						"
						:state="btnState"
						:size="btnSize"
						@onClick="onSearch(inputValue)"
					>
						<i
							class="
								far
								fa fa-search
								self_center
								p-r_3:md
								font-size_down
							"
						></i>
						<span class="display_none inline:md font_bold"
							>{{ actionLabel }}</span
						>
					</Btn>
				</div>
		</template>
		<template v-slot:alertMessage>This is not an email</template>
		<template v-slot:warningMessage>
			<slot name="warningMessage"></slot
		></template>
		<template v-slot:successMessage>
			<slot name="successMessage"></slot
		></template>
		<template v-slot:infoMessage>
			<slot name="infoMessage"></slot
		></template>
		<template v-slot:accentMessage>
			<slot name="accentMessage"></slot
		></template>
		<template v-slot:hint> <slot name="hint"></slot></template>
	</Question>
</template>
<script>
import Question from "./subComponent/Question";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	mixins: [baseInputFunctions],
	components: { Btn,Question },
	props: {
		actionLabel: { type: String, default: 'Search' },
	},
	data() {
		return {
			thisInputType: this.inputType,
            inputValue: this.value,
		}
	},
	methods: {
		onChange(event) {
			this.inputValue = event.target.value;
			this.$emit('input',event.target.value);
		},
		onSearch(inputValue) {
			this.$emit("onSearch", inputValue);
		}
	},
	computed: {

	},
}
</script>

<style scoped>
</style>