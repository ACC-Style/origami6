<template>
	<article
		class="br_solid br-t_1 br_0  br_black-3 relative font_copy flex_column flex justify_start"
	>

		<div class="relative">
			<aside
				data-type="date"
				class="float_left m-l_4 m-l_5:lg bg_primary-5 z_3"
                style="width:60px"
			>
            <div class="br_1 br-t_0  br_solid br_black-8 bg_cover aspect_1x1 bg-blend_multiply"
            :style="'background-image:url('+img+')'"></div>
			</aside>
			<div
				class="absolute r_4 r_5:lg t_0 text_center flex flex_column:md justify_end align-right font_1:md font_0 overflow_hidden transition_2 z_2"
			>
				<TabFlag
					v-show="purchased"
					:type="'purchased'"
					class="m-r_1:lg m-r_3 m-r_4"
				/>
			</div>
		</div>
		<header class="clear_both p-x_3 p-x_4:lg p-t_2 font_display font_medium font_3:lg font_2:md font_1 c_primary-n1 m-t_2 m-t_4:lg m-t_3:md m-b_1 lh_1 cursor_pointer h:underline" >
				{{ title }}
		</header>
		<p v-if="shortText" class="font_0:lg font_n1 p-x_3 p-x_4:lg lh_2 m-b_0 m-t_3">
			<span data-v-5294f1c2="" class="font_ui c_accent-n1 font_medium font_n2 m-t_n2 uppercase block">{{ productType }}</span>
			<span>{{ shortText }}</span>
		</p>
		<ul
			class="m-b_3:md m-b_2:md p-t_3 p-x_4:lg p-x_3 font_n1:lg font_n2 ul_none lh_3"
		>
			<li v-if="credits.length > 0">
				<i class="fas font-size_up fa-award c_black-5"></i>
				<span class="m-l_2 m-t_n2 inline-block">
					<Credit
						class="m-r_3"
						:type="credit.type"
						:value="credit.value"
						:styleCode="credit.type"
						:size="'tiny'"
						v-for="(credit, index) in credits"
						:key="index"
					/>
				</span>
			</li>
		</ul>
		<footer
			class="flex justify_around m-t_auto p-t_4 p-t_3:md p-x_3 p-b_4 font_ui"
		>
			<Btn
				class="flex_auto m-b_3 m-x_3  text_center max-w_10"
				:size="'small'"
				:corner="'radius'"
				:shadow="false"
				v-if="!purchased"
				:state="'secondary'"
				@onClick="onLearnMore(id)"
				><span class="flex_grow "
					>Learn More</span
				></Btn
			>
			<Btn
				class="flex_auto m-b_3 m-x_3 text_center max-w_10"
				:size="'small'"
				:corner="'radius'"
				:shadow="true"
				v-if="!purchased"
				@onClick="onPurchase(id)"
				><span class="flex_grow">Purchase</span></Btn
			>
			<Btn
				class="flex_auto text_center m-x_3 max-w_10 m-b_3"
				:size="'small'"
				:corner="'radius'"
				:shadow="true"
				v-if="purchased"
				@onClick="onNavigateTo(id)"
				>
				<span class="flex_grow">Access</span>
				</Btn
			>
		</footer>
	</article>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import TabFlag from "../subComponents/TabFlag";

export default {
	props: {
		id: { type: Number },
		title: { type: String, default:'' },
		shortText: { type: String, default:'' },
		credits: { type: Array, default: () => [] },
		productType: { type: String },
		purchased: { type: Boolean, default: false },
		img: { type: String, default: undefined },
		
	},
	components: {
		Btn,
		Credit,
		TabFlag
	},
	data() {
        return {}
	},
	computed: {
    },
	methods: {
		onPurchase(id){
			this.$emit('onPurchase', id)
		},
		onNavigateTo(id){
			this.$emit('onNavigateTo', id)
		},
		onLearnMore(id){
			this.$emit('onLearnMore', id)
		}
	},
};
</script>

<style scoped></style>
