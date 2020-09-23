<template>
	<div>
        <div v-if="groups == undefined">
                <GroupLoading/>
        </div>
        <div v-else-if="groups.length > 0">
        		<ul
        			data-target="group-container"
        			class="ul_none "
        			v-for="(group, index) in groups"
        			:key="index"
        		>
        			<GroupOverview
        				:name="group.name"
        				:admin="group.admin"
                        :id="group.id"
        				:bundles="group.bundles"
        			/>
        		</ul>
        	</div>
            <div v-else class="reading-typography max-w_55"><h3>You don't seem to have any Groups.</h3><p>You can use groups to divide your bundles of products and delegate their management to appropriate admin or team leaders. You can always move seats from one group to another as long as the seat is empty.</p>
			<Btn :size="'large'" >Create a group</Btn>
			 </div>
    </div>
</template>

<script>
import GroupOverview from "./Group/Seat.Group.Overview.vue";
import GroupLoading from "./Group/Seat.Group.Loading.vue";
import Btn from "../../subComponents/Btn.vue"
export default {
    components:{GroupOverview,GroupLoading,Btn },
    props:{
        groups: {
        type: Array,
        default: undefined 
    },
    },
	data() {
		return {
			
		};
	},
};
</script>
