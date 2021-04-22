<template>
	<article
		class="br_solid br-t_1 br_0 br_black-3 relative font_copy flex_column flex justify_start"
	>
		<header class="relative">
			<div class="">
				<div
					class="br_1 br-t_0 br_solid br_black-4 bg_cover font_4 h_lh_2 text-shadow_black-1 font_display p_3 c_white bg-blend_multiply bg_right"
					:style="'background-image:url(' + img + ');'"
				>
				<span class="uppercase font_xbold">{{title_1}}</span>
				<span class="uppercase font_light">{{title_2}}</span>
				</div>
			</div>
		</header>
		<main class="relative p-t_4">
			<div
				class="absolute r_4 r_5:lg t_0 text_center flex flex_column:md justify_end align-right font_1:md font_0 overflow_hidden transition_2 z_2"
			>
				<TabFlag
					v-show="purchased"
					:type="'purchased'"
					class="m-r_1:lg m-r_3 m-r_4"
				/>
			</div>
			<p
			v-if="shortText"
			class="font_0:lg font_n1 p-x_3 p-x_4:lg lh_2 m-b_0 m-t_4"
		>
			<span
				data-v-5294f1c2=""
				class="font_display c_accent-n1  font_medium font_n2 m-t_n3 uppercase block"
				>{{ productType }}</span
			>
			<span>{{ shortText }}</span>
		</p>
		<ul
			class="m-b_3:md m-b_2:md p-t_3 p-x_4:lg p-x_3 font_n1:lg font_n2 ul_none lh_3"
		>
			<li class="flex flex_row" v-if="credits.length > 0">
				<i class="fas font-size_up fa-award c_black-5 flex_none p-r_3"></i>
				<span class="flex flex_auto flex_row flex_wrap gap-x_2 gap-y_2 inline-block justify_start m-l_2 m-t_n2">
					<Credit
						class=""
						:type="credit.type"
						:value="credit.value"
						:styleCode="credit.type"
						:showValue="false"
						:size="'tiny'"
						v-for="(credit, index) in credits"
						:key="index"
					/>
				</span>
			</li>
		</ul>
		</main>
		<footer
			class="flex justify_around m-t_auto p-t_4 p-t_3:md p-x_3 p-b_4 font_ui"
		>
			<Btn
				class="flex_auto m-b_3 m-x_3 text_center max-w_10"
				:size="'small'"
				:corner="'radius'"
				:shadow="false"
				v-if="!purchased"
				:state="'secondary'"
				@onClick="onLearnMore(id)"
				><span class="flex_grow">Learn More</span></Btn
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
			</Btn>
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
            title_1: { type: String, default: 'Cardio' },
            title_2: { type: String, default: 'Source' },
            shortText: { type: String, default: '' },
            credits: { type: Array, default: () => [] },
            productType: { type: String },
            purchased: { type: Boolean, default: false },
            img: { type: String, default: undefined },
            purchaceUrl: { type: String, default: '#' },
            learnMoreUrl: { type: String, default: '#' },
            accessProductUrl: { type: String, default: '#' }
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
            onPurchase(id) {
                parent.location = this.purchaceUrl;
            },
            onNavigateTo(id) {
                parent.location = this.accessProductUrl;
            },
            onLearnMore(id) {
                parent.location = this.learnMoreUrl;
            }
        }
};
</script>

<style scoped></style>
