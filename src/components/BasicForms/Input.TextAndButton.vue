<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
		@onClickPostLabel="$emit('onClickPostLabel')"
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
						:class="[{'disabled':isTextDisabled},inputStyles]"
						:type="type"
						:value="value"
						@input="$emit('input', $event.target.value)"
						@change="$emit('input', $event.target.value)"					
						:required="required"
						:placeholder="placeholder"

						:disabled="thisState == 'disabled' || isTextDisabled"
						:ref="'input_'+id"
						
			/>
					<Btn
						v-show="value != null && value.length > 0"
						class="absolute t_0 b_0 r_0"
						:state="'empty'"
						:shadow="false"
						@onClick="deleteValue()"
					>
						<i class="far fa fa-times self_center"></i>
					</Btn>
					<div class="absolute b_0 r_0 l_0 z_3"><div class="relative">
							<slot name='autoSuggestHolder'></slot>
						</div>
					</div>
					
				</div>
				<div class="flex flex_shrink">
					<Btn
						class="br-tl_square br-bl_square"
						:shadow="false"
						:state="btnState"
						:size="size"
						@onClick="onClick(value)"
						:isDisabled="thisState == 'disabled' || isBtnDisabled"
					>
						<slot name='btnLabel'><i
							class="
								far
								fa fa-search
								self_center
								p-r_3:md
								font-size_down
							"
						></i>
						<span class="display_none inline:md font_bold"
							>Search</span
						></slot>
					</Btn>
				</div>
		</template>
		<template v-slot:alertMessage><slot name="alertMessage"></slot
		></template>
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
		isTextDisabled:{type:Boolean,default:false},
		isBtnDisabled:{type:Boolean,default:false},
		value:{default:''},
		size: {default:''},
	},
	data() {
		return {
		}
	},
	computed: {

	},
	methods: {
		onClick(value) {
			this.$emit("onClick", value);
		},
		deleteValue() {			
			this.$refs['input_'+this.id].value = "";
			this.$emit("input", "");

		}
	},
}
</script>

<style scoped>
</style>