<template>
	<div
		class="inline-block br_1"
		:class="['br_' + corners, fontColorStyle, backgroundStyles]"
	>
		<div class="flex flex_nowrap" :class="sizeStyles">
			<span
				class="flex_auto"
				:class="[
         { 'font-size_up': size == 'large' },
					{ 'font-size_down font_medium': size == 'tiny' },
				]"
				v-html="type"
			/>
			<span
				class="flex_shrink"
        v-if="showValue"
				:class="[{ 'font-size_down m-x_n2': size == 'tiny' },{ 'font-size_down m-x_n1': size == 'small' }]"
				><i
					class="fa-horizontal-rule fa-rotate-90"
          :class="[
            { 'fal font-size_down': size == 'tiny' || size == 'small' },
            { 'far': size == 'medium' },{ 'fas': size == 'large' }]"
				></i
			></span>
			<span
				class="flex_auto"
        v-if="showValue"
				:class="[
					{ 'font_medium font-size_up': size == 'large' },
					{ font_bold: size != 'large' },
					{ 'font-size_down': size == 'tiny' },
				]"
			>{{ valueTrim }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: { type: String, default: "CME" },
		styleCode: { type: String, default: "CME" },
		value: { type: Number, default: 0 },
		size: {
			type: String,
			default: "medium",
			validator: function (value) {
				return (
					["tiny", "small", "medium", "large"].indexOf(value) !== -1
				);
			},
    },
		corners: {
			type: String,
			default: "radius",
			validator: function (value) {
				return (
					["radius", "square", "round", "circle"].indexOf(value) !==
					-1
				);
			},
    },
    showValue:{type:Boolean,default:true},
    shadow:{type:Boolean,default:false},
    isDisabled:{type:Boolean,default:false}
	},
	computed: {
    valueTrim:function() {
      return Math.round(this.value * 100) / 100
    },
		fontColorStyle: function () {
			let code = this.styleCode,
				style = "c_white";
			if (code == "CE") {
				style = "c_black";
			}
			return style;
    },
    backgroundStyles:function(){
      let code = this.styleCode,
      styles = ''; 
      if(this.isDisabled){
        styles += ' br_black-3 br_dotted  bg_black-1 c_black-5 disabled ';
        if(this.shadow){styles += ' shadow_n1 ';}
      }else{

        styles += ' br_' + code +'-n1  bg_' + code + ' br_solid ';
        if(this.shadow){styles += ' shadow_1 '}
      }
      return styles;
    },
		sizeStyles: function () {
			let styles = "";
			switch (this.size) {
				case "large":
					styles +=
						"font-size_up lh_2 p-y_2 p-y_3:md p-x_3 p-x_4:md gap-x_3";
					break;
				case "small":
					styles += "font-size_down lh_1 p-y_2 p-x_2 gap-x_2";
					break;
				case "tiny":
					styles += "font-size_down lh_0 p-y_2 p-x_2 gap-x_1";
					break;
				default:
					styles += "p-y_1 p-x_2 p-y_2:md p-x_3:md lh_2";
					break;
			}
			return styles;
		},
	},
};
</script>

<style></style>
