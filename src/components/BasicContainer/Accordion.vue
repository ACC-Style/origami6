<template>
	<div class="relative">
		<header
			data-attr="accordion-header"
			@click="onClick"
			:class="[headerStyles]"
			class="flex t_0 r_0 l_0 z_2 bg_white shadow-clip"
		>
			<div :class="toggleStyles"
				class="flex_shrink flex column justify_center "
			>
				<i
					class="flex_auto self_center far fa-fw"
					:class="[toggleIcon, toggleIconStyles]"
				></i>
			</div>
			<div
			 class="flex_auto w_100 p-y_3 p-x_2 p-l_3"
			:class="headerLabel"
			>
				<slot class name="header">No Content Passed</slot>
			</div>
		</header>
		<transitionExpand>
			<article
				:class="contentStyles"
				v-if="expanded"
				data-attr="accordion-content"
				class="transition_2 origin_tl reading-typography  z_0"
			
			>
				<slot class="" name="content">No Content Passed</slot>
			</article>

		</transitionExpand>
	</div>
</template>

<script>
import transitionExpand from "../subComponents/TransitionExpand.vue";

export default {
	name: "Accordion",
	components: { transitionExpand },
	props: {
		type: {
			type: String,
			default: "parent",
			validator: function(value) {
				return ["parent", "child", "grandchild"].indexOf(value) !== -1;
			},
		},
		internalIsExpanded:{type:Boolean,default:false}
	},
	data() {
		return {
			expanded: false,
			
		};
	},
	computed: {
		headerLabel() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = " c_primary h:c_primary-n2";
					break;
				case "child":
					styles = "bg_black-2";
					break;
				default:
					styles = "bg_black-1";
					break;
			}
			
			return styles;
		},
		headerStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = "c_primary h:c_primary-n2 lh_0";
					styles =(this.expanded)?"br-b_1  br_solid br_primary":"";
					break;
				case "child":
					styles = "br_black-1 br_solid br_1 m-b_n1";
					if(this.expanded){
					 styles += ' shadow_1';}
					break;
				default:
					styles = "br_black-3 br_solid br_1 ";
					if(this.expanded){
					 styles += ' shadow_overlap-light';}
					break;
			}
			// {'is-active': expanded},{'sticky':!internalExapanded} , 
			if(this.expanded){
				styles += " is-active active sticky";
			}

			return styles;
		},
		toggleStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = "";
					break;
				case "child":
					styles = "font_1 p-x_3 p-y_2 bg_black-3 br_black-1 br_solid br-r_1";
					break;
				default:
					styles = "font_3 p-x_3  bg_primary-4 br_black-2 br_solid br-r_1";
					break;
			}
			return styles;
		},
		toggleIconStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = "";
					break;
				case "child":
					styles = "font_0 a:c_black-3 c_black-8";
					break;
				case "parent":
					styles = "font_1 a:c_primary-n4 c_primary-n1";
					break;
				default:
					break;
			}
			return styles;
		},
		contentStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					if (this.expanded) {
					styles = "p-t_3";
					} else {
					styles = "";
					}
		
					break;
				case "child":
					styles = "br_black-2 br_solid br-t_1 br-b_1 p_3 p_4:lg";
					break;
				default:
					styles = "br_black-3 br_solid br_1 p_3 p_4:lg";
					break;
			}
			return styles;
		},
		toggleIcon() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = (this.expanded)?"fa-chevron-down":"fa-chevron-right";
				break;
				case "child":
					styles = (this.expanded)?"fa-minus":"fa-plus";break;
				case "parent":
					styles = (this.expanded)?"fa-minus":"fa-plus";break;
			}
			return styles;
		},
	},
	methods: {
		onClick() {
			this.$emit("onClick");
			this.expanded = !this.expanded;
			if (this.expanded) {
				this.$emit("onExpand");
			} else {
				this.$emit("onCollapse");
			}
		},
		enter(element) {
			const width = getComputedStyle(element).width;

			element.style.width = width;
			element.style.position = "absolute";
			element.style.visibility = "hidden";
			element.style.height = "auto";

			const height = getComputedStyle(element).height;

			element.style.width = null;
			element.style.position = null;
			element.style.visibility = null;
			element.style.height = 0;

			// Force repaint to make sure the
			// animation is triggered correctly.
			getComputedStyle(element).height;

			// Trigger the animation.
			// We use `requestAnimationFrame` because we need
			// to make sure the browser has finished
			// painting after setting the `height`
			// to `0` in the line above.
			requestAnimationFrame(() => {
				element.style.height = height;
			});
		},
	},
};
</script>


<style>
	.shadow-clip{
	  clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0 120%);
}
</style>