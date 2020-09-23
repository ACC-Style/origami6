<template>
	<article
		class="br_1 br_black-2 br_dashed br_radius font_0 font_ui p_4 m-b_4"
	>
		<header class="flex justify_between">
			<h1 class="font_2 font_display m_0 flex_auto lorem-loader br_radius inline w_auto" v-bind:style="{maxWidth:calcMaxWidth()+30+'%'}">Company Name</h1>
			<div class=" flex_shrink lorem-loader br_radius lorem-button br_radius"></div>
		</header>
		<div class="flex flex_column flex_row:md">
			<div
				class="br-r_1 flex_grow font_0 m-r_4:md w_30:md w_20:lg max-w_30"
			>
				<address class="m-t_3">
					<!-- http://microformats.org/wiki/hcard -->
					<ul class="ul_none lh_1 font_0">
						<li
							class="m-b_1 m-b_3:md facility-address font_1 lorem-loader br_radius" v-bind:style="{maxWidth:calcMaxWidth()+80+'%'}"
						>Address 1</li>
						<li
							class="m-b_1 m-b_3:md facility-address font_1 lorem-loader br_radius" v-bind:style="{maxWidth:calcMaxWidth()+80+'%'}"
						>CITY STATE ZIP</li>
						<li
							class="m-b_1 m-b_3:md facility-address font_0 lorem-loader br_radius" v-bind:style="{maxWidth:calcMaxWidth()+60+'%'}"
						>Web</li>
						<li
							class="m-b_1 m-b_3:md facility-address font_0 lorem-loader br_radius" v-bind:style="{maxWidth:calcMaxWidth()+60+'%'}"
						>Phone</li>
                        <li
							class="m-b_1 m-b_3:md facility-address font_0 lorem-loader br_radius" v-bind:style="{maxWidth:calcMaxWidth()+60+'%'}"
						>Email</li>
					</ul>
				</address>
			</div>
			<div class="flex_auto m-t_0:md m-t_4">
				<div
					class="font_0 font_bold br-b_1 br_solid br_primary-3 p-b_2 m-b_3 m-t_3"
				>
					<div  v-bind:style="{maxWidth:calcMaxWidth()+60+'%'}" class="font_0 lorem-loader br_radius max-w_10 ">Cardiac Services</div>
				</div>
				<ul
					class="font_n1 gap-x_4 gap-y_2 grid lh_2 template-x_15 ul_none "
				>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
					<li  v-bind:style="{maxWidth:calcMaxWidth()+70+'%'}"
						class="m-b_1 m-b_3:md facility-address font_n1 br_radius lorem-loader br_radius"
					>services</li>
				</ul>
			</div>
		</div>
		<footer
			class="br-t_1 br_secondary-5 br_solid flex justify_between m-t_3 p-t_3 result-footer flex_row-reverse"
		>
			<div class=" flex_shrink lorem-loader br_radius lorem-button font_2 br_radius">Button</div>
		</footer>
	</article>
</template>

<script>
export default {
	name: "ResultLoading",
	methods: {
		calcMaxWidth() {
			return Math.random() * 20;
		},
	},
};
</script>

<style lang="css" scoped>
.lorem-status {
	width: 2.5rem;
}
.lorem-button {
	width: 8rem;
}

</style>
