<template>
	<transition name="slide" mode="out-in">
		<div
			class="flex flex_row justify_end transition_2 c_white"
			@mouseover="hover = true"
			@mouseleave="hover = false"
            @click="$emit('onClick')"
		>
			<span
				:class="[{ shadow_1: hover }, flagColor]"
				class="flex_shrink p-y_2 p-x_3 br_1 br_solid br_white-2 "
			>
				<span class="p-x_2 m-t_1 m-b_2" v-show="hover" v-html="flagText"> </span>
				<i class="fas fa-fw m-t_1 m-b_2" :class="flagIcon"></i>
			</span>
		</div>
	</transition>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
            required: false,
            default:'',
			validate: (value) => {
				[
					"featured",
					"upvoted",
					"downvoted",
					"bookmarked",
					"read",
					"registered",
					"purchased",
					"incart",''
				].indexOf(value) !== -1
			}
		},
		text: { type: String, default: undefined },
		icon: { type: String, default: undefined },
		color: { type: String, default: undefined }
	},
	data() {
		return {
			hover: false
		}
	},
	computed: {
		flagText() {
			let text = "";
			switch (this.type) {
				case "featured":
					text = "featured";
					break;
				case "bookmarked":
					text = "saved";
					break;
				case "upvoted":
					text = "editor's pick";
					break;
				case "downvoted":
					text = "down voted";
					break;
				case "read":
					text = "read";
					break;
				case "registered":
					text = "registered";
					break;
				case "purchased":
					text = "purchased";
                    break;
                case "incart":
					text = "in cart";
					break;
				default:
					break;
			}
			return (this.text) ? this.text : text;
		},
		flagIcon() {
			let icon = "";
			switch (this.type) {
				case "featured":
					icon = "fa-star";
					break;
				case "bookmarked":
					icon = "fa-bookmark";
					break;
				case "upvoted":
					icon = "fa-thumbs-up";
					break;
				case "downvoted":
					icon = "fa-thumbs-down";
					break;
				case "read":
					icon = "fa-check";
					break;
				case "registered":
					icon = "fa-check-circle";
					break;
				case "purchased":
					icon = "fa-check-circle";
					break;
				case "incart":
					icon = "fa-shopping-cart";
					break;
				default:
					break;
			}
			return (this.icon) ? this.icon : icon;
		},
		flagColor() {
			if (this.color) {
				return this.color
			}
			else {
				let color = "";
				switch (this.type) {
					case "featured":
						color = "primary";
						break;
					case "bookmarked":
						color = "accent";
						break;
					case "upvoted":
						color = "acc";
						break;
					case "downvoted":
						color = "secondary";
						break;
					case "read":
						color = "secondary";
						break;
						break;
					case "registered":
						color = "accent";
						break;
					case "purchased":
						color = "accent";
						break;
					case "incart":
						color = "highlight";
						break;
					default:
						break;
				}
				return 'bg_' + color + '-2 h:bg_' + color + '';
			}

		}
	}
}
</script>

<style scoped>
.slide-enter {
	opacity: 0;
	height: 0;
	box-shadow: 0 0 2px hsla(0, 0%, 100%, 0.05), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0);
}

.slide-enter-to {
	height: 35px;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.25s ease-in, box-shadow 0.1s ease-out;
}
.slide-leave {
	height: 35px;
}

.slide-leave-to {
	opacity: 0;
	height: 0;
	box-shadow: 0 0 2px hsla(0, 0%, 100%, 0.05), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0);
}
</style>