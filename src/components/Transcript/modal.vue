<template>
	<transition name="modal">
		<div class="modal-mask z_5 bg_black-5 fixed t_0 l_0 r_0 b_0">
			<div class="modal-wrapper p_4">
				<div
					class="modal-container shadow_3 m_auto p-x_4 p-y_3 font_ui transition bg_white relative br_solid br-t_3 br_primary"
                    :class="maxWidthClass"
				>
					<button
						class="bg_primary c_white-7 h:c_white absolute t_0 r_0 p_2 p-x_3 font_n2 br_0 br_none br_square text_center inline-block h:br_none"
						@click="$emit('close')"
					>
						<i class="fa font_1 fas fa-times"></i>
					</button>
					<div class="font_1 font_display m-x_2 m-x_3:md m-y_2 m-y_4 modal-header">
						<slot name="header">default header</slot>
					</div>

					<div class="modal-body font_0 m-x_2 m-x_3:md">
						<slot name="body">default body</slot>
					</div>

					<div class="modal-footer m-x_n4 m-b_n3">
						<slot name="footer" class="p-x_2 p-x_3:md p-b_3">
							<button
								class="bg_secondary c_white br_none br_radius p-x_4 p-y_2 text_center inline-block font_0"
								@click="$emit('close')"
							>OK</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
    name: "modal",
    props: {
        maxWidthClass: { type: String, default: "max-w_50" }
    }
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