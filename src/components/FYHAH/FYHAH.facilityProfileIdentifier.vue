<template>
	<div class="br_radius max-w_25 p_4 shadow_overlap-bold">
		<header class="br-b_1 br_secondary-5 br_solid flex m-b_4 p-b_4">
			<h1 class="font_3 font_display m_0">
				<span>{{facility.brandedName}}</span>
				<small class="font_n1 c_primary" v-if="facility.distance != null">{{facility.distance}} miles</small>
			</h1>
		</header>
		<address class="m-t_3">
			<!-- http://microformats.org/wiki/hcard -->
			<ul class="ul_none lh_1 font_0">
				<li class="m-b_1 m-b_3:md facility-address font_1">
					<div class="block" v-if="facility.address1!==''">
						<span class="street-address">{{facility.address1}}</span>
					</div>
					<div class="block" v-if="facility.address2!=''">
						<span class="street-address">{{facility.address2}}</span>
					</div>
					<div class="block">
						<span class="locality" v-if="facility.city!=''">{{facility.city}}</span>,
						<span class="state-name">
							<abbr>{{facility.state}}</abbr>
						</span>
						<span class="postal-code">{{facility.zip}}</span>
					</div>
				</li>
				<li class="m-b_1 m-b_2:md facility-google-map">
					<a
						class="block c_secondary h:c_primary h:underline"
						:href="'https://www.google.com/maps/place/'+facility.googleAddress"
						target="_blank"
					>
						<i class="fa-fw fa-map-marker fa-pin fas"></i>Get
						Directions
					</a>
				</li>
				<li class="m-b_1 m-b_2:md facility-web-URL" v-if="facility.webURL!= ''">
					<a class="website c_secondary h:c_primary h:underline" target="_blank" :href="facility.webURL">
						<i class="fas fa-fw fa-globe"></i>
						website
					</a>
				</li>
				<li class="m-b_1 m-b_3:md facility-phone" v-if="facility.phone !=''">
					<a
						tel="+18002574737"
						:href="'tel:+'+facility.phone"
						class="tel c_secondary h:c_primary h:underline"
					>
						<i class="fas fa-fw fa-phone"></i>
						<span class="text">{{facility.phone}}</span>
					</a>
				</li>
			</ul>
		</address>
		<div class="font_0 font_bold">
			Cardiac Services
			<a
				href="https://www.cardiosmart.org/resources/pr-glossary"
				target="_blank"
				class="c_secondary h:c_primary h:underline"
			>
				<i class="fas fa-fw fa-question-circle"></i>
			</a>
		</div>
		<ul class="font_n1 gap-x_4 ul_none">
			<li
				class="facility-service text-indent_n1 p-l_4 lh_1 m-t_2 m-b_2"
				v-for="(service, index) in services"
				:key="'service_'+index"
			>{{service}}</li>
		</ul>
		<p class="c_primary font_italic font_n2 lh_2 m-t_3 subtle">
			Cardiac data registries are national databases that collect information
			on specific heart conditions or procedures performed in hospitals.
			Quality improvement programs give hospitals the tools and resources they
			need to improve how they deliver care.
		</p>
	</div>
</template>

<script>
export default {
	props: {
		facility: {
			type: Object,
			required: true
		},
		services: {
			type: Array,
			required: true
		},
	},
	data() {
		return {

		}
	},
}
</script>

<style scoped>
</style>