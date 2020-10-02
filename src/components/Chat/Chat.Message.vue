<template>
    <div class='flex' :class="containerStyles">
        <div class="flex_shrink p-x_4"><img :src="avatar" :alt="fullName" class="max-w_5 w_100 w_5 br_circle shadow_overlap-light"></div>
        <div class="flex_auto">
            <p class="c_black-9 m-x_0">{{message}}</p>
            <div class="font-size_down m-t_2 c_primary-2">
                <span class="font-size_down ">{{fullName}}</span> | <span class="font-size_down">{{time}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import TimeConverter from "../subComponents/TimeConverter.js";
    export default {
        mixins: [TimeConverter],
        name:"ChatMessage",
        data() {
            return {
                messageSender:(this.userid == this.id )?"self":"others",
                avatar:'https://robohash.org/'+this.id+'.png">',
                time:this.dateToString(this.timestamp,'dd/mm/yyyy_h:m:s')
            }
        },
        props:{
            userid:{type:[String,Number]},
            id:{type:[String,Number]},
            timestamp:{type:[String,Number]},
            type:{type:String,validator: function (value) {
				return (
					[
						"user",
						"admin",
						"faculty",
					].indexOf(value) !== -1
				);
			},},
            fullName:{type:String},
            message:{type:String},
        },
        computed: {
            containerStyles(){
                let styles ="";
                styles =+ (this.messageSender== "self")?"flex_row":"flex_row-reverse";
                return styles;
            }
        },
    }
</script>
