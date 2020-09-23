<template>
	<div class="">
		<header
			data-attr="accordion-header"
			@click="onClick"
			:class="[{'is-active': expanded}, headerStyles ]"
			class="flex"
		>
			<div :class="toggleStyles"
				class="flex_shrink flex column justify_center "
			>
				<i
					class="flex_auto self_center fas fa-fw"
					:class="[toggleIcon, toggleIconStyles]"
				></i>
			</div>
			<div class="flex_auto w_100 p-y_3 p-x_2 p-l_3">
				<slot class name="header">No Content Passed</slot>
			</div>
		</header>
		<transitionExpand>
			<article
				:class="contentStyles"
				v-if="expanded"
				data-attr="accordion-content"
				class="transition_2 origin_tl"
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
	},
	data() {
		return {
			expanded: false,
		};
	},
	computed: {
		headerStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					styles = " c_primary h:c_primary-n2";
					break;
				case "child":
					styles = "br_black-3 br_solid br_1 bg_black-1 ";
					break;
				default:
					styles = "br_black-3 br_solid br_1 bg_black-1 ";
					break;
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
					styles = "  p-x_3 p-x_4:md bg_shade-4 br_black-2 br_solid br-r_1";
					break;
				default:
					styles = "font-size_up p-x_3 p-x_4:md bg_primary-4 br_black-2 br_solid br-r_1";
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
					styles = " a:c_shade-n4 c_shade-n1";
					break;
				default:
					styles = "a:c_primary-n4 c_primary-n1";
					break;
			}
			return styles;
		},
		contentStyles() {
			let styles = "";
			switch (this.type) {
				case "grandchild":
					if (this.expanded) {
					styles = "br-t_1 br_solid br_primary";
					} else {
					styles = "";
					}
		
					break;
				default:
					styles = "br_black-3 br_solid br_1 p_4";
					break;
			}
			return styles;
		},
		toggleIcon() {
			let styles = "";
			if (this.expanded) {
				styles = "fa-minus-square";
			} else {
				styles = "fa-plus-square";
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


