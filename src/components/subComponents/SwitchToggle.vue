<template>
	<div class="flex flex_row flex_nowrap relative">
		<BtnToggle
			class="flex_none"
			@onClick="$emit('onClick', $event)"
			:size="size"
			:shape="shape"
			:corner="corner"
			:activeState="activeState"
			:notActiveState="notActiveState"
			:shadow="shadow"
			:insetShadow="insetShadow"
			:isActive="isActive"
		>
			<template v-slot:active
				><span class="flex flex_row justify_start w_100" v-html="switchHandle.activeLabel"
			/></template>
			<template v-slot:notActive
				><span class="flex flex_row justify_end w_100" v-html="switchHandle.notActiveLabel"
			/></template>
		</BtnToggle>
		<div class="flex_auto self_center p-l_3:lg p-l_2 lh_0"><slot></slot></div>
	</div>
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
		activeState: { type: String , default: "secondary" },
		notActiveState: { type: String, default:"secondary" },
        activeIcon:{type:String, default:null},
        notActiveIcon:{type:String, default:null},
		insetShadow: { type: Boolean, default: false },
		isActive: { type: Boolean, default: false },
	},
	data() {
		return {
			shape: "switch",
			shadow: false,
		};
	},
	computed: {
		switchLabel() {
			let style ="";
			switch (this.size) {
				case 'tiny':
					style = "font_n2";
					break;
				case 'small':
					style = "font-size_down";
					break;
				case 'large':
					style = "font-size_up";
					break;
				default:
					break;
			}
			return style;
		},
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
					offset.active = "vertical-align_middle self_center";
					offset.notActive = "vertical-align_middle self_center";
					break;
				case "small":
					offset.active = "vertical-align_middle self_center";
					offset.notActive = "vertical-align_middle self_center";
					break;
				case "large":
					offset.active = "vertical-align_middle self_center";
					offset.notActive = "vertical-align_middle self_center";
					break;
				default:
					offset.active = "vertical-align_middle self_center";
					offset.notActive = "vertical-align_middle self_center";
					break;
			}
			return {
				activeLabel:
					'<i class="fas fa-fw font-size_up ' +
					offset.active +
					" " +
					icon.active +
					'"></i>',
				notActiveLabel:
					'<i class="fas fa-fw font-size_up ' +
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
