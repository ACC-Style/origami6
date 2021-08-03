<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
		class="max-w_65"
	>
		<template v-slot:default><slot name="default">Email</slot> </template>
		<template v-slot:input>
			<div class="select-wrapper w_100 relative">
				<select
					:id="'input_' + id"
					:name="'input_' + id"
					class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
					:type="type"
					v-bind:value="value"
					v-on:input="$emit('input', $event.target.value)"
					:required="required"
					:class="inputStyles"
					:disabled="thisState == 'disabled'"
					v-if="!Array.isArray(options)"
				>
					<option
						v-for="(value, label) in options"
						:value="value"
						v-html="label"
						:key="'option_' + value"
					></option>
				</select>
				<select
					:id="'input_' + id"
					:name="'input_' + id"
					class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
					:type="type"
					v-bind:value="value"
					v-on:input="$emit('input', $event.target.value)"
					:required="required"
					:class="inputStyles"
					:disabled="thisState == 'disabled'"
					v-if="Array.isArray(options)"
				>
					<option
						v-for="label in options"
						:value="label"
						v-html="label"
						:key="'option_' + label"
					></option>
				</select>
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

	<!-- <div class="question font_ui">
		<label
			:for="inputId"
			v-bind:class="{
				'c_alert-n2': inputState == 'alert',
				'c_warning-n2': inputState == 'warning',
			}"
			class="label-holder flex font-size_up font_medium p-y_2"
		>
			<span class="text cell flex_shrink">
				<slot name="default"></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder flex self_end">
			<ValueIcon
				v-if="icon"
				class="flex_shrink"
				:state="(state == 'requiredAlert')?'alert':state"
				:icon="icon"
				inputNameTarget="inputId"
			/>
			<div class="select-wrapper flex flex_auto relative">
				<select
					ref="selectHTML"
					v-model="selected"
					:id="inputId"
					:name="inputId"
					v-on:change="onChange()"
					class="p-l_4 lh_3 flex_auto p-y_2 br_solid br_2"
					:required="required"
					:class="inputStyles"
					:disabled="state == 'disabled'"
				>
					<option disabled value="">select one</option>
					<option
						v-for="(op, index) in options"
						:key="'option_' + index"
						:value="op.value"
						:label="op.label"

					/>
				</select>
			</div>
			<div
				class="br_solid br_2 br-l_0 p-y_2 font_medium flex_none p-x_4 lh_3 flex flex_column "
				v-if="postLabel"
				:class="inputPrePostStyles"
			>
				{{ postLabel }}
			</div>
		</div>
		<div class="font-size_down">
			<messageHolder :state="'alert'" v-if="state == 'requiredAlert'"
			>This input is required.</messageHolder
		>
		<messageHolder :state="'alert'" v-if="state == 'alert'">
			<slot name="alertMessage"></slot>
		</messageHolder>
		<messageHolder :state="'warning'" v-if="state == 'warning'">
			<slot name="warningMessage"></slot>
		</messageHolder>
		<messageHolder :state="'success'" v-if="state == 'success'">
			<slot name="successMessage"></slot>
		</messageHolder>
		<messageHolder :state="'info'" v-if="state == 'info'">
			<slot name="infoMessage"></slot>
		</messageHolder>
		<messageHolder :state="'accent'" v-if="state == 'accent'">
			<slot name="accentMessage"></slot>
		</messageHolder>
		</div>
	</div> -->
</template>

<script>
import Question from "./subComponent/Question";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";

export default {
	name: "inputSelect",
	props: {
		options: { type: [Object, Array] },
	},
	mixins: [baseInputFunctions],
	components: { Question },
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}

select {
	/* Here's the code we need */
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
}
.select-wrapper{
	position: relative;
}
.select-wrapper:after {
	font-family: "Font Awesome 5 Pro";
	font-weight: 900;
	content: "\f107";
	position: absolute;
	color: currentColor;
	top: 0rem;
	right: 0.25rem;
	padding: 0.5rem;
	font-size: 1.25rem;
	pointer-events: none;
	display: inline-block;
	bottom: 0;
	line-height: 1.25;
}
.select-wrapper:focus-within:after {
	content: "\f106";
	
}
.question select:focus {
	outline: none;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}
</style>
