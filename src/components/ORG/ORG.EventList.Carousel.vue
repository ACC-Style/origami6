<template>
	<carousel :responsive="responsiveOptions"  :nav="false" class="flex flex_row">
		<EventCard
			v-for="(item, index) in events"
			:key="index + '_card'"
			v-bind="item"
            @onRegister="$emit(onRegister,$event)"
            @onNavigateTo="$emit(onNavigateTo,$event)"
            @onLearnMore="$emit(onLearnMore,$event)"
            class="self_stretch"
            
		>
			<h2
				class="
					font_display font_2:lg font_1 font_bold
					c_primary-n2
					m-b_3
					m-t_3
				"
				v-html="item.title"
			>
				COVID-19 Hub
			</h2>
			<p
				class="font_0:md font_n1 font_copy m-t_0 m-b_4 p-b_3"
				v-html="item.shortText"
			>
				Comprehensive compilation of ACC content related to COVID-19
			</p>
		</EventCard>
    </carousel>
</template>

<script>
// documentation around the import https://github.com/s950329/vue-owl-carousel

import EventCard from "./ORG.EventCard.vue";
import carousel from 'vue-owl-carousel'
import { ResponsiveMixin } from "vue-responsive-components";
import ResponsiveBreakpoints from "../Helpers/Breakpoint.vue"
export default {
    name: "EventListCarousel",
	mixins: [ResponsiveBreakpoints, ResponsiveMixin],
	components: { EventCard, carousel },
	props: {
		events: { type: Array },
		corner: {
			type: String,
			default: "radius",
			validate: (value) => {
				["radius", "round", "square"].indexOf(value) !== -1;
			},
		},
		url: { type: String, default: "#" },
		shadow: { type: Boolean, default: true },
	},
	data() {
		return {
            cards: this.events
		}
	},
	breakpoints: {
		sm: el => el.width < 480,
		md: el => el.width >= 480 && el.width <= 767,
		lg: el => el.width >= 768 && el.width <= 1024,
		xl: el => el.width >= 1025 && el.width <= 1200,
		xxl: el => el.width >= 1201
	},
	methods: {
		responsiveOption(maxNumberofCards ) {
			return  {items: this.cards.length >= maxNumberofCards ? maxNumberofCards : this.cards.length} ; 
			}
	
	},
	computed: {
		responsiveOptions:function() {
			let obj= {};
			obj[this.smMinWidth] = this.responsiveOption(1);
			obj[this.mdMinWidth] = this.responsiveOption(2);
			obj[this.lgMaxWidth] = this.responsiveOption(3);
			obj[this.xlMaxWidth] = this.responsiveOption(4);
			return obj;
			},
		gridSize: function () {
			let styles = "";
			switch (this.cards.length) {
				case 1:
					styles = "";
					break;
				case 2:
					styles = "gap-x_3  gap-y_3 gap-x_4:md gap-y_4:md grid template-x_2x";
					break;
				default:
					styles = "gap-x_3 gap-y_3 gap-x_4:md gap-y_4:md grid template-x_3x";
					break;
			}
			return styles;
		}
	},
};
</script>

<style >
.owl-stage {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
}

.owl-item {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}

.owl-item > * {
    align-self: stretch;
    height: 100%;
}


.template-x_3x,
.template-x_2x {
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

@media screen and (min-width: 22rem) {
	.template-x_2x {
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	}
	.template-x_3x {
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
	}
}

</style>
