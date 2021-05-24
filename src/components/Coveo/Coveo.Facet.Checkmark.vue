<template>
	<div class="input flex user-select_none relative h:bg_black-1 br_radius">
		<div class="flex_none p-l_3 p-r_3 self_center">
			<input
				type="checkbox"
				:name="'check' + id"
				:id="'check' + id"
				:disabled="excluded"
				@change="$emit('input', $event.target.checked)"
                class="font-size_up"
			/>
		</div>
		<div class="flex_auto self_center p-l_2">
			<label
				:for="'check' + id"
				class="font-size_up lh_2"
				:class="{ 'line-through': excluded }"
			>
				<span class="font_regular p-y_2 inline-block p-y_1:md">
                    {{ label }}
                    <small
					class="flex_auto p-l_2 font_light opacity_6 c_accent-n2"
					>{{ resultCount }}</small
				></span>
				
			</label>
		</div>
		<div
			class="flex_none m-l_auto self_stretech justify_center flex flex_column relative p_2 p_0:md h:bg_white"
			:class="{ 'bg_white': excludeToggleHover }"
			@mouseenter="excludeToggleHover = true"
			@mouseleave="excludeToggleHover = false"
			@click="$emit('onExcludeToggle', !excluded)"
			v-if="canExcludeFacets"
		>
			<span
				class="p_3 c_primary bg_white absolute t_n3 vertical-align_middle b_n3 r_4 nowrap self_center justify_center flex flex_column"
				v-show="excludeToggleHover"
				>{{ excludeToggleLabel }}</span
			><i class="fas" :class="excludeToggleStyles"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			default: 0,
			required: true
		},
		canExcludeFacets: {
			type: Boolean,
			default: true,
		},
		label: { type: String, default: 'checkmark label' },
		resultCount: { type: Number, default: 0 },
		excluded: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: true
		},
	},
	data() {
		return {
			excludeToggleHover: false,

		}
	},
	computed: {
		excludeToggleLabel() {
			return !this.excluded ? "exclude from results" : "remove exclution";
		},
		excludeToggleStyles() {
			return this.excluded ? this.excludeToggleHover ? "c_alert h:c_alert-n3 fa-times" : "c_alert h:c_alert-n3 fa-ban" : this.excludeToggleHover ? "opacity_9 fa-ban" : "opacity_2  fa-ban";
		}
	},
	methods: {
		onExcludeToggleClick() {
			this.$emit("onExcludeToggleClick");
		}
	},

}
</script>

<style scoped>
.line-through {
	text-decoration: line-through;
}
</style>