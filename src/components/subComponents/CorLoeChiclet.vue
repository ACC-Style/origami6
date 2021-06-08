<template>
	<div
		class="br_2 br_black-2 br_radius br_solid flex float_right font_display font_bold lh_0"
	>
		<div
			class="flex_shrink p_3 m-r_1"
			:class="[corStyle, 'br-bl_' + radius + ' br-tl_' + radius]"
		>
			{{ coreComputed.label }}
		</div>
		<div
			class="flex_shrink p_3 br-tr_radius br-br_radius"
			:class="[loeStyle, 'br-br_' + radius + ' br-tr_' + radius]"
		>
			{{ loe }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		radius: { type: String, default: 'radius',validator: function (value) {
				return ['radius', 'square', 'round'].indexOf(value) !== -1;
			}, },
		loe: {
			type: String,
			default: "C",
			validator: function (value) {
				return ['A', 'B-R', 'B-NR', 'C-EO','C-LD'].indexOf(value) !== -1;
			},
		},
		cor: {
			type: String,
			default: "harm",
			validator: function (value) {
				return ['1', '2a','2b', '3', 'harm', 'no-benefit'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		coreComputed() {
			let cor = { label: "", value: '' };
			switch (this.cor) {
				case "1":
					cor.label = '1';
					cor.value = 'I';
					break;
				case "2b":
					cor.label = '2b';
					cor.value = 'IIB';
					break;
				case "2a":
					cor.label = '2A';
					cor.value = 'IIA';
					break;
				case "3":
					cor.label = '3';
					cor.value = 'III';
					break;
				case "harm":
					cor.label = '3: Harm';
					cor.value = 'III-HARM';
					break;
				case "no-benefit":
					cor.label = '3: NO BENEFIT';
					cor.value = 'III-NOBENEFIT';
					break;
				default:
					break;
			}
			return cor;
		},
		loeStyle() {
			return "bg_loe-" + this.loe;
		},
		corStyle() {
			return "bg_cor-" + this.coreComputed.value;
		}
	}

}
</script>

<style scoped>
</style>