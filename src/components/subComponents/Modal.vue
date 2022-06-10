<template>
	<transition name="modal">
		<div  class="modal modal-fade modal-mask z_5 bg_black-5 fixed t_0 l_0 r_0 b_0">
			<div class="modal-wrapper h_100 absolute m_auto overflow_auto p_4  t_0 l_0 r_0 b_0" @onClick="onClose" >
				<div
					class="modal-container  shadow_3 max-w_3 m_auto p-x_4 p-y_3 font_ui transition bg_white relative br_solid br-t_3 br_primary-n1"
					:class="'br_' + corner +' '+ maxWidthClasses"
				>
					<btn
						:size="'small'"
						class="absolute t_0 r_0 l_auto"
						:corner="'square'"
						:shadow="false"
						:type="'button'"
						@onClick="onClose"
					>
						<i class="fas fa-times"></i>
					</btn>
					<div class="font_3 font_bold font_display m-x_2 m-x_3:md m-y_2 m-y_4:md modal-header p-y_2 p-y_4:lg">
						<slot name="header">default header</slot>
					</div>

					<div class="modal-body font_0 m-x_2 m-x_3:md p-x_0">
						<slot name="default">default body</slot>
					</div>
					<div class="modal-footer p-x_0  m-b_n3 ">
						<slot name="footer" class="">
							<div class="p-x_2 p-x_3:md p-x_4:lg clear_fix"><Btn :size="'small'" :type="'button'" class="float_right "
								@onClick="onClose" :state="'secondary'"
							>{{cancelText}}</Btn></div>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Btn from "./Btn";
export default {
	props:{
		cancelText: {
			type: String,
			default: 'Cancel'
		},
		maxWidthClasses: {
			type: String,
			default: 'max-w_40'
		},
		id:{type:String, default:"ModalDefault"},
			corner: {
			type: String,
			default: "radius",
			validator: function (value) {
				return ['radius', 'round', 'square','circle'].indexOf(value) !== -1;
			},
		},
	},
	components:{Btn},
	methods: {
		onClose(){
			this.$emit('onClose')
		}
	},
};
</script>

<style >
.modal-mask {
	display: table;
	width: 100%;
	height: 100%;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	/* width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif; */
}

.modal-header h3 {
}

.modal-body {
}

.modal-default-button {
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>