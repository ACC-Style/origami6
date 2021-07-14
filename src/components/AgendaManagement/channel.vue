<template>
	<HoverContainer :actionIcon="actionIcon" :actionColor="actionColor">
		<div class="flex flex_row flex min-h_4rem relative">
			<div class="flex_auto self_center p-y_3 p-x_3">
				<h3 class="c_primary m_0 font_2">
					Label of the Channel
					<small class="c_black-8 block">Start End Date Time</small>
				</h3>
			</div>
			<ul
				class="ul_none flex_auto m-l_auto flex flex_row-reverse self_stretch font_0 align_center"
			>
            <li class="justify_center flex_column flex"  @mouseenter="
							() => {
								actionColor = 'alert';
								actionIcon = ' fa-trash-alt ';
							}
						"
						@mouseleave="
							() => {
								actionColor = undefined;
								actionIcon = undefined;
							}
						" >                 
                <Btn class="bg_white self_center h:bg_black-3 z_2 m-x_4" :state="'none'" :shadow="false" :size="'small'">Remove <i class="p-l_3 far fa-times"></i></Btn>
            </li>
            <li class="justify_center flex_column flex"  @mouseenter="
							() => {
								actionColor = 'success';
								actionIcon = ' fa-pencil ';
							}
						"
						@mouseleave="
							() => {
								actionColor = undefined;
								actionIcon = undefined;
							}
						" >                 
                <Btn class="bg_white self_center h:bg_black-3 z_2 m-x_4" :state="'none'" :shadow="false" :size="'small'">Edit </Btn>
            </li>
			</ul>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from "../../components/AdvancedContainers/hoverContainer.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	data() {
		return {
			actionIcon: undefined,
			actionColor: undefined,
		};
	},
	components: { HoverContainer, Btn },
};
</script>

<style scoped></style>
