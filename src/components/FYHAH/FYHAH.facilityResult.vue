<template>
	<article
		class="br_1 br_black-2 br_solid font_0 font_ui p_4 shadow_overlap-light m-b_4"
	>
		<header class="flex justify_between">
			<h1 class="font_2 font_display m_0 flex_auto">
				<span>{{ facility.brandedName }}</span>
				<small
					class="font_n1 c_primary"
					v-if="facility.distance != null"
					>{{ facility.distance }} miles</small
				>
			</h1>
			<a
				class="bg_shade-5 br_2 br_solid br_white-3 c_black flex_shrink h:bg_primary h:c_white h:underline-none inline-block m-r_2   text_center flex shadow_overlap-light br_radius"
				@click="compareToggle()"
				v-bind:class="{
					'is-active active': compareActive
				}"
			>
				<span class="lh_0 flex_auto add alt-short-text a:_none p-y_3 p-x_3 p-r_4">Add To Compare</span>
				<!-- <span class="flex_auto remove alt-short-text display_none a:_inline-block p-y_2 p-x_3 p-r_4"
					>Remove</span
				> -->
				<span class="flex_grow p-y_3 p-x_3 text_center br_radius a:bg_accent-n1 flex" v-bind:class="{
					'is-active active': compareActive
				}">
					<i
						class="fas a:c_white c_shade-3 fa-fw icon-toggle_check-sqaure icon-toggle_check-square self_center"
					></i>
				</span>
			</a>
		</header>
		<div class="flex flex_column flex_row:md">
			<div class="br-r_1 flex_grow font_0 m-r_4:md w_30:md w_20:lg max-w_30">
				<address class="m-t_3">
					<!-- http://microformats.org/wiki/hcard -->
					<ul class="ul_none lh_1 font_0">
						<li class="m-b_1 m-b_3:md facility-address font_1">
							<div class="block" v-if="facility.address1 !== ''">
								<span class="street-address">{{
									facility.address1
								}}</span>
							</div>
							<div class="block" v-if="facility.address2 != ''">
								<span class="street-address">{{
									facility.address2
								}}</span>
							</div>
							<div class="block">
								<span
									class="locality"
									v-if="facility.city != ''"
									>{{ facility.city }}</span
								>,
								<span class="state-name">
									<abbr>{{ facility.state }}</abbr>
								</span>
								<span class="postal-code">{{
									facility.zip
								}}</span>
							</div>
						</li>
						<li class="m-b_1 m-b_2:md facility-google-map">
							<a
								class="block c_secondary h:c_primary h:underline"
								:href="
									'https://www.google.com/maps/place/' +
										facility.googleAddress
								"
								target="_blank"
							>
								<i class="fa-fw fa-map-marker fa-pin fas"></i
								>Get Directions
							</a>
						</li>
						<li
							class="m-b_1 m-b_2:md facility-web-URL"
							v-if="facility.webURL != ''"
						>
							<a
								class="website c_secondary h:c_primary h:underline"
								target="_blank"
								:href="facility.webURL"
							>
								<i class="fas fa-fw fa-globe"></i>
								website
							</a>
						</li>
						<li
							class="m-b_1 m-b_3:md facility-phone"
							v-if="facility.phone != ''"
						>
							<a
								tel="+18002574737"
								:href="'tel:+' + facility.phone"
								class="tel c_secondary h:c_primary h:underline"
							>
								<i class="fas fa-fw fa-phone"></i>
								<span class="text">{{ facility.phone }}</span>
							</a>
						</li>
					</ul>
				</address>
			</div>
			<div class="flex_auto m-t_0:md m-t_4">
				<div
					class="font_0 font_bold br-b_1 br_solid br_primary-3 p-b_2 m-b_3"
				>
					Cardiac Services
					<a
						href="https://www.cardiosmart.org/resources/pr-glossary"
						target="_blank"
						class="c_secondary h:c_primary h:underline"
					>
						<i class="fas fa-fw fa-question-circle"></i>
					</a>
				</div>
				<ul
					class="font_n1 gap-x_4 gap-y_2 grid lh_2 template-x_15 ul_none "
				>
					<li
						class="facility-service p-l_4 p-r_3 text-indent_n1"
						v-for="(service, index) in services"
						:key="'service_' + index"
					>
						{{ service }}
					</li>
				</ul>
			</div>
		</div>
		<footer
			class="br-t_1 br_secondary-5 br_solid flex justify_between m-t_3 p-t_3 result-footer flex_row-reverse"
		>
			<a
				class="a:bg_accent bg_shade-5 br_2 br_solid br_white-3 c_black flex_grow h:bg_primary h:c_white h:underline-none inline-block m-r_2 p-y_2 p_4 shadow_overlap-light text_center br_radius"
				@click="GoToProfile"
			>
				<span class="add alt-short-text">Profile</span>
				<i class="fa fa-fw icon-toggle_arrow-circle"></i>
			</a>
		</footer>
	</article>
</template>

<script>
export default {
	props: {
		id:{type:Number,required:true},
		facility: {
			type: Object,
			required: true
		},
		services: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			compareActive: false
		};
	},
	methods: {
		compareToggle() {
			this.compareActive = !this.compareActive;
			if(this.compareActive){
				this.$emit('AddToCompare',this.id, this.facility);
			}else{
				this.$emit('RemoveFromCompare', this.id, this.facility);
			}
		},
		GoToProfile(){
			this.$emit('GoToProfile', this.id);
		}
	}
};
</script>

<style scoped></style>
