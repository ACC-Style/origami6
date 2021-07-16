<template>
    <div class="flex flex_row">
        <div class="flex_none self_center p-l_3"><i class="far fa-envelope flex_none p-y_3"></i></div>
        <div class="flex_auto self_center"><a :href="email" class="link c_primary h:c_primary-n2 p_3">{{fullName}}</a></div>
        <div class="flex_none self_center c_primary h:c_accent-n2 h:bg_accent-4 br_radius" v-if="showEdit" @click="$emit('onEdit',id)"><i class="far fa-pencil p_3"></i></div>
        <div class="flex_none self_center c_primary h:c_alert-n2 h:bg_alert-4 br_radius" v-if="showRemove" @click="$emit('onDelete',id)"><i class="far fa-times p_3"></i></div>
    </div>
</template>

<script>
    export default {
        name: 'UserEmailListItem',
        props: {
            id:{type:String},
            email:{type:String, default:null},
            fullName:{type:String},
            showEdit:{type:Boolean, default:false},
            showRemove:{type:Boolean,  default:false}
        }
        
    }
</script>

<style scoped>

</style>