<template>
	<BtnToggle
		@onClick="$emit('onClick', $event)"
		:size="size"
		:shape="shape"
		:corner="corner"
		:activeState="activeState"
		:notActiveState="notActiveState"
		:shadow="shadow"
		:insetShadow="insetShadow"
	>
		<template v-slot:active
			><span v-html="switchHandle.activeLabel"
		/></template>
		<template v-slot:notActive
			><span v-html="switchHandle.notActiveLabel"
		/></template>
	</BtnToggle>
</template>

<script>
import BtnToggle from "./BtnToggle";
export default {
	components: {
		BtnToggle,
	},
	props: {
		size: { type: String, default: "medium" },
		corner: {
			type: String,
			default: "round",
			validator: function (value) {
				return ["round", "square", "radius"].indexOf(value) !== -1;
			},
		},
		activeState: { type: String },
		notActiveState: { type: String },
        activeIcon:{type:String, default:null},
        notActiveIcon:{type:String, default:null},
		insetShadow: { type: Boolean, default: false },
	},
	data() {
		return {
			shape: "switch",
			shadow: false,
		};
	},
	computed: {
		switchHandle() {
			let icon = { active: "", notActive: "" };
            if(!this.activeIcon || !this.notActiveIcon ){
			switch (this.corner) {
				case "square":
					icon.active = " fa-square-full ";
					icon.notActive = " fa-square-full ";
					break;
				case "radius":
					icon.active = " fa-square ";
					icon.notActive = " fa-square ";
					break;

				default:
					icon.active = " fa-circle ";
					icon.notActive = " fa-circle ";
					break;
			}}
            if(this.activeIcon){
                icon.active = this.activeIcon
            }
            if(this.notActiveIcon){
                icon.notActive = this.notActiveIcon
            }
			let offset = { active: "", notActive: "" };
			switch (this.size) {
				case "tiny":
					offset.active = " m-r_n3 m-l_3 m-t_1 ";
					offset.notActive = " m-l_n3 m-r_3 m-t_1 ";
					break;
				case "small":
					offset.active = " m-r_n3 m-l_4 ";
					offset.notActive = " m-l_n3 m-r_4 ";
					break;
				case "large":
					offset.active = " m-r_n5 p-r_3 m-l_5  m-y_n3";
					offset.notActive = " m-l_n5 p-l_3 m-r_5 m-y_n3 ";
					break;
				default:
					offset.active = " m-r_n4 m-l_4 ";
					offset.notActive = " m-l_n4  m-r_4 ";
					break;
			}
			return {
				activeLabel:
					'<i class="fas fa-fw font-size_up' +
					offset.active +
					" " +
					icon.active +
					'"></i>',
				notActiveLabel:
					'<i class="fas fa-fw font-size_up' +
					offset.notActive +
					" " +
					icon.notActive +
					'"></i>',
			};
		},
	},
};
</script>

<style scoped></style>
