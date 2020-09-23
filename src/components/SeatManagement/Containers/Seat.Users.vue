<template>
<div>		
<div  v-if="users == null">
	<SingleUserLoading />
</div>
<div v-else-if="users.length > 0" class="relative">
	<ul class="ul_none" v-for="(user, index) in users " :key="index">
		<SingleUser v-bind="user" v-if="user.status != 'empty'"/>
	</ul>
    <!-- <div class="sticky font_n2 b_4 l_auto float_right r_4 font_medium bg_white br_solid br_1 shadow_overlap-light br_black-3 br_round z_4 w_auto inline-block p-y_2 p-x_4"><strong>Legend:</strong>  <span><i class="fa fa-user-crown"></i> admin</span><strong>Legend:</strong>  <span><i class="fa fa-users-crown"></i> group admin</span><span><i class="fa fa-user"></i> subscription holder</span></div>    -->
</div>
<div v-else class="reading-typography max-w_65">
	<H3 class="font">You Currently Don't have any users for this product in this Group.</H3>
	<p class="font_copy"> You will need to add users to this group before you can proceed.  To add users you will need to pull empty users from the other groups. You can do by transfering empty users from another group. </p>
	<Btn :size="'large'">Transfer users</Btn>
	<h4>This seems to be in error.</h4>
	<p>If it has been longer or you know you have had users on this product before please refresh and if the problem persists please contact customer support. </p>
</div>
</div>
</template>

<script>
import Btn from '../../subComponents/Btn'
import SingleUser from "./User/Seat.SingleUser.Overview.vue";
import SingleUserLoading from "./User/Seat.SingleUser.Loading.vue";


export default {
	components: {
		SingleUser,SingleUserLoading,Btn
    },
    data() {
        return {

        }
    },
	props: {
		users:{type:Array}
	},
	methods: {
        action() { },
        compare(key, order = 'asc') {
            return function innerSort(a, b){
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }
                const varA = (typeof a[key] === 'string')? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')? b[key].toUpperCase() : b[key];
                let comparison = 0;
                if (varA > varB) {
                comparison = 1;
                } else if (varA < varB) {
                comparison = -1;
                }
                return (
                (order === 'desc') ? (comparison * -1) : comparison
                );
            }
        }
	},
	computed: {

	
	},
};
</script>

<style lang="css">

</style>
