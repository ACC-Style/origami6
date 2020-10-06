<template>
	<!-- eslint-disable -->
	<section
		class="h:bg_black-1 bg_white unbreakable-row:print"
	>
		<div class="a:bg_primary-5" :class="{'display_none:screen block:print' : itemIndex >= itemLoadLimit}">
			<header class="font_ui p_3 p-x_4 p-b_0 print-p_0 relative">
				<section id="label" class="print-flex_row max-w_50 lh_2">
					<div
						class="flex justify_between c_shade-3 font_n2:lg font_n1 uppercase font_bold"
						:class="{'bg_warning-2 c_black-7 p-l_3 br_radius' : isExternal, 'w_40:md w_20:print' : isExternal && !isLegacyExternal, 'w_20:md w_20:print' : isLegacyExternal}"
					>
						<div
							class="flex_shrink p-y_2 p-x_2 font_italic vertical-align_middle self_center"
							:class="{'p-b_0' : !isExternal}"
						>
							<span v-if="isExternal">External&nbsp;</span>
							<span>Activity</span>
						</div>
						<div
							v-if="isExternal && !isLegacyExternal"
							class="flex_shrink flex font_n2:lg m-l_3 m-r_n1 font_n1 uppercase font_bold c_black inline-block display_none:print"
						>
							<span
								@click="editExternalActivity"
								class="flex_auto p-y_2 p-x_4 br-l_1 br_solid br_black-3 bg_shade-4 h:bg_shade-n5 h:c_white"
							>
								<i class="fa fas fa-edit"></i>
								<span class="inline:md">&nbsp;Edit</span>
							</span>
							<span
								@click="$emit('deleteExternal')"
								class="flex_auto p-y_2 p-x_4 br-l_1 br_solid br_black-3 bg_shade-4 h:bg_shade-n5 h:c_white br-tr_radius br-br_radius"
							>
								<i class="fa fas fa-trash"></i>
								<span class="inline:md">&nbsp;Delete</span>
							</span>
						</div>
					</div>

					<div class="block c_shade-n4 font_1:md font_0" :class="{'p-t_3' : isExternal}">
						<span>
							{{activity}}
						</span>
					</div>
				</section>
			</header>
			<div class="br-b_1 br_primary-3 br_dotted font_ui print-p_0 p-y_3 p-x_4 relative flex">
				<div class="flex_auto self_end">
					<div class="font_italic font_n3">
						<div class="m-t_n3 m-b_2 print-m_0">
							<span>Date Claimed:</span>&nbsp;
							<span>{{activityDateClaimed | dateNumber}}</span>
						</div>
					</div>
					<div 
						v-if="!isLegacyExternal && ((!isExternal && credits.some(cred => creditsAvailableForCert.includes(cred.type))) || (isExternal && credits.some(cred => cred.certId != undefined)))"
						v-on:click="certDownload(credits.length == 1 ? credits[0] : null)" 
						class="download font_n2 c_primary undecorated h:underline display_none:print sm_button"
					>
						<i class="fa fas fa-download m-r_2"></i> Download Certificate
					</div>
				</div>
				<div class="flex_shrink w-grid_4 w-grid_3:md self_end">
					<ul class="ul_none flex flex_wrap flex_row-reverse:md flex_row-reverse:print flex_column font_n2 font_n1:md font_n1:print self_end">
						<li
							v-for="(credit, index) in credits"
							:key="'credit_'+index"
							:class="creditDecoration(credit.type)"
							class="br_radius p-y_1 p-x_2 p-y_2:md p-x_3:md block inline-block:md inline-block:print m-x_2 flex_shrink text_center m-t_2 transition_2"
						>
							<span v-html="getCreditShortName(credit)"></span>
							<span class="font_bold m-l_3 p-l_3 br-l_1 br_solid br_white">{{credit.amount}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<modal id="creditCertSelection" v-if="showModal_CertSelection" @close="showModal_CertSelection = false" maxWidthClass="max-w_40">
			<h4 slot="header">What type of Credit Certificate do you need to download?</h4>
			<div slot="body">
				<ul class="ul_none m-b_4 lh_4 scrollbar-mini overflow_auto scroll-window-size">
					<li
						class="flex flex_row flex_nowrap"
					>
						<div class="w_30 p-x_3 p-y_2 font_n1 c_warning">
							Type
						</div>
						<div class="w_40 p-x_3 p-y_2 font_n1 c_warning">
							Claimed
						</div>
					</li>
					<li
						class="flex flex_row flex_nowrap"
						v-for="(credit, index) in credits"
						:key="'credit_'+index"
					>
						<div
							class="w_30 p-x_3 p-y_2 br-t_1 br_solid br_black-2 font_bold"
							v-html="getCreditShortName(credit)"
						></div>
						<div class="w_40 p-x_3 p-y_2 br-t_1 br_solid br_black-2 font_italic">
							{{credit.creditDateClaimed | dateString}}
						</div>
						<div 
							v-if="(isExternal && credit.certId) || (!isExternal && creditsAvailableForCert.includes(credit.type))"
							class="w_30 p-y_2 br-t_1 br_black-2 br_solid c_primary download h:underline sm_button undecorated"
							@click="certDownload(credit)"
						>
							<i class="fa fas fa-download m-r_2"></i>Download Certificate
						</div>
						<div
							v-else
							class="w_30 p-x_4 p-y_2 br-t_1 br_black-2 br_solid font_italic c_black-4"
						>
							{{isExternal ? "No Attachment" : "Not Applicable"}}
						</div>
					</li>
				</ul>
			</div>
			<div
				slot="footer"
				class="text_right br-t_1 br_primary br_solid p_3 p-x_4 bg_secondary-5 shadow_n2 texture_light"
			>
				<button
					class="font_ui bg_primary h:bg_primary-n2 c_white br_none br_radius p-x_4 p-y_2 text_center inline-block font_0"
					@click="showModal_CertSelection = false"
				>Cancel</button>
			</div>
		</modal>
		<modal
			v-if="showModal_ExternalActivityData"
			@close="showModal_ExternalActivityData = false;editableObject = null;"
		>
			<h3 slot="header" class="w_100 max-w_40 m_auto p-t_5">Edit External Activity</h3>
			<div slot="body" class="m-b_5 ">
				<p class="lh_2 font_n1 c_black-8 font_medium font_italic w_100 max-w_40 m_auto">Adding an External credit allows you to centralize your credits in one transcript. It should be used to add records of credits you have already claimed. Adding an External credit <strong class="font_bold c_warning">DOES NOT</strong> submit credits to any organization or any accrediting body.</p>	
				<div class="flex flex_column font_ui w_100 max-w_40 m_auto">
					<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
						<label class="block" for="Program Title">
							Program Title
							<i class="c_warning m-t_2 vertical-align_top fa fas fa-asterisk font_n3" />
						</label>
					</div>
					<div class="flex_auto relative flex_row flex_nowrap br_secondary-4 br_solid br_1">
						<input
							class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3 w-grid_12"
							name="Program Title"
							type="text"
							placeholder="Enter Program Title"
							v-model="editableObject.activity"
						/>
					</div>
				</div>
				<div class="flex flex_column font_ui w_100 max-w_40 m_auto">
					<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
						<label class="block" for="Location">
							Location
							<i class="c_warning m-t_2 vertical-align_top fa fas fa-asterisk font_n3" />
						</label>
					</div>
					<div class="flex_auto relative flex_row flex_nowrap br_secondary-4 br_solid br_1">
						<input
							class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3 w-grid_12"
							name="Location"
							type="text"
							placeholder="Enter Location"
							v-model="editableObject.activityLocation"
						/>
					</div>
				</div>
				<div class="flex flex_column font_ui w_100 max-w_40 m_auto">
					<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
						<label class="block" for="Date Claimed">
							Date Claimed
							<i class="c_warning m-t_2 vertical-align_top fa fas fa-asterisk font_n3" />
						</label>
					</div>
					<div class="flex flex_auto relative flex_row flex_nowrap br_secondary-4 br_solid br_1">
						<DatePicker
							name="Date Claimed"
							class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3 w-grid_12"
							:popover="{ visibility: 'click' }"
							:input-props="{
											class: 'vc-appearance-none vc-w-full p_0 font_1 br_none vc-leading-tight focus:vc-outline-none',
											placeholder: 'Select Date Claimed'
										}"
							v-model="editableObject.activityDateClaimed"
						/>
					</div>
				</div>
				<div class="flex flex_column font_ui w_100 max-w_40 m_auto">
					<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
						<label class="block" for="creditList">
							Credit
							<i class="c_warning m-t_2 vertical-align_top fa fas fa-asterisk font_n3"></i>
						</label>
						<span class="font_n1 c_black-8 font_medium font_italic m-t_1 block m-b_2">Manage as many credits as needed and optionally attach certificate(s) <span class="c_warning">[Allowed types: doc, pdf & images, Allowed size: 3MB]</span></span>
					</div>
					<div id="creditsListDiv" class="scroll-window-size overflow_auto scrollbar-mini">
						<div
							class="flex_auto relative "
							v-for="(activityCredit, index) in editableObject.credits"
							:key="'activityCredit_'+index"
						>
							<div class="flex flex flex_row p-y_2 flex_nowrap">
								<select
								class="box_border-box inline-block flex_auto font_1 br_none lh_2 w_30 m-b_1 p_2 p-x_3 br_secondary-4 br_solid br_1 auto-stack"
								:name="'creditListItem'+index"
								v-model="activityCredit.type"
								>
									<option disabled :value="null">Please select a credit type:</option>
									<option
										:value="credit.styleCode"
										v-for="(credit, index) in creditTypesForExternalCreditSelection(activityCredit.type)"
										:key="'creditOption_'+index"
									>{{activityCredit.type && activityCredit.type === credit.styleCode ? activityCredit.type : credit.fullName}}</option>
								</select>
								<input
									class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3 w_20 br_secondary-4 br_solid br_1 m-l_3"
									type="number"
									name="CreditAmount"
									placeholder="Amount"
									:value="activityCredit.amount"
									@input="activityCredit.amount = parseFloat($event.target.value); activityCredit.maxAmount = parseFloat($event.target.value);"
								/>
								<label
									class="custom-file-input bg_primary box_border-box inline-block flex_auto p-x_3 p-y_2 font_0 m-l_3 c_white h:bg_primary-n2 text_center w_35"
									v-if="!activityCredit.certFileName"
								>
									<input type="file" class="display_none" accept="image/*,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" @change="onFileChange($event, activityCredit, index)" />
									<i class="fa fas fa-plus p-r_2"></i> Attach Certificate
								</label>
								<button
									class="bg_success box_border-box inline-block flex_auto lh_1 p-x_3 p-y_2 font_0 m-l_3 c_white h:bg_success-n2 text_center w_35"
									v-if="activityCredit.certFileName"
									@click="index === creditIndexSelectedForAttachment ? creditIndexSelectedForAttachment = -1 : creditIndexSelectedForAttachment = index"
								>
									<i class="fa fas fa-check p-r_2"></i> {{index === creditIndexSelectedForAttachment ? "Hide" : "Show"}} Certificate Details
								</button>
								<button
									class="bg_alert box_border-box inline-block flex_none lh_1 p-x_3 p-y_2 font_0 m-l_3 c_white h:bg_alert-n2 text_center"
									v-on:click="deleteCredit(activityCredit)"
								>
									<i class="fa fas fa-times fa-fw"></i>
								</button>
							</div>
							<div v-if="activityCredit.certFileName && index === creditIndexSelectedForAttachment" class="flex font_0 c_primary m-b_4">
								<span class="m-l_2">{{activityCredit.certFileName}}</span>
								<span class="c_alert-n3 h:c_alert h:underline p-l_3" @click="removeFile(activityCredit, index)"><i class="fas fa fa-times p-x_2"></i>Remove Certificate</span>
							</div>
						</div>
					</div>
					<button
					class="bg_primary box_border-box lh_1 p-x_3 p-y_3 m-t_3 w_30 font_0 c_white h:bg_primary-n2 text_center"
					v-on:click="addEmptyCredit"
					>
					<i class="fa fas fa-plus p-r_2"></i> Add New Credit
					</button>
				</div>
			</div>
			<div
				slot="footer"
				class="text_right br-t_1 br_primary br_solid p_3 p-x_4 bg_secondary-5 shadow_n2 texture_light"
			>
				<button
					class="font_ui font_1 bg_secondary-1 h:bg_secondary-n1 shadow_1 c_white p-x_4 p-y_2 text_center inline-block m-r_3"
					@click="showModal_ExternalActivityData = false;editableObject = null;"
				>Cancel</button>
				<button
					class="font_ui font_1 bg_success h:bg_success-n2 shadow_1 c_white p-x_4 p-y_2 text_center inline-block"
					:class="{'opacity_3' : !areExternalActivityRequiredFieldsPopulated}"
					@click="saveExternalActivity"
				>Save</button>
			</div>
		</modal>
	</section>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import modal from "./modal.vue";
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import clonedeep from "lodash.clonedeep";

export default {
	name: "TranscriptItem",
	data: () => ({
		creditsAvailableForCert: ["CME", "CPE", "COP", "ECME", "CNE"],
		showModal_CertSelection: false,
		showModal_ExternalActivityData: false,
		creditAmountRepeats: 1,
		editableObject: null,
		creditIndexSelectedForAttachment: -1
	}),
	props: {
		id: { type: Number, default: -1 },
		isExternal: { type: Boolean, default: false },
		isLegacyExternal: { type: Boolean, default: false },
		activityFormat: { type: String, default: undefined },
		activity: { type: String, default: "activity" },
		activityDateClaimed: { type: Date },
		vnrNumber: { type: String, default: undefined },
		credits: { type: Array },
		activityLocation: { type: String, default: undefined },
		selectedCreditFilters: {
			type: Array,
			default: () => {
				["None"];
			}
		},
		creditTypes: { type: Array },
		selectedSort: { type: String, default: "Date" },
		originalObject: { type: Object, default: () => ({})},
		customerId: { type: String, default: undefined },
		itemLoadLimit: { type: Number, default: 0 },
		itemIndex: { type: Number, default: 0 },
		transcriptsApiUrl: { type: String, default: undefined }
	},
	components: {
		modal,
		DatePicker
	},
	computed: {
		areExternalActivityRequiredFieldsPopulated: function() {
			if (this.editableObject &&
				this.editableObject.activity && 
				this.editableObject.activityLocation && 
				this.editableObject.activityDateClaimed) {
				for (const credit of this.editableObject.credits) {
					if (!credit.type || !credit.amount || !credit.maxAmount) {
						return false;
					}
				}
				return true;
			}
			else {
				return false;
			}
		}
	},
	methods: {
		creditDecoration: function(type) {
			return this.selectedCreditFilters.includes(type) || this.selectedCreditFilters.includes("None")
				? "order_0 c_white bg_" +type +" br_solid br_1 block:print br_" +type 
				: "order_last br_shade-4 bg_shade-5 c_shade-3 br_1 br_dashed display_none:print";
		},
		certDownload: function(creditToDownload) {
			if (!creditToDownload && this.credits.length > 1) {
				// Launch Modal dialog for credit selection
				this.showModal_CertSelection = true;
				return;
			}

			if (this.showModal_CertSelection) {
				this.showModal_CertSelection = false;
			}
			if (creditToDownload) {
				if (this.isExternal) {
					if (creditToDownload.certId) {
						document.body.style.cursor='wait';

						let getExternalAttachmentUrl = "http://localhost:63683/api/Transcripts/GetCustomerTranscriptAttachment"
						//let getExternalAttachmentUrl = this.transcriptsApiUrl + "GetCustomerTranscriptAttachment";
						axios
							.get(
								getExternalAttachmentUrl,
								{
									headers: {
										vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
									},
									params: {
										attachmentId: creditToDownload.certId
									},
									responseType: "blob"
								}
							)
							.then((response) => {
								const url = window.URL.createObjectURL(new Blob([response.data]));
								const link = document.createElement('a');
								link.href = url;
								link.setAttribute('download', creditToDownload.certFileName);
								document.body.appendChild(link);
								link.click();
								document.body.style.cursor='default';
							})
							.catch((error) => {
								console.log(error);
								document.body.style.cursor='default';
							});
					}
				}
				else if (this.creditsAvailableForCert.includes(creditToDownload.type)) {
					document.body.style.cursor='wait';

					let certUrl = window.location.href.replace(/\/$/g, "") + "/certificate";
					// Remove later
					//certUrl = "http://local.acc.org/education-and-meetings/transcripts/certificate";

					axios
						.get(certUrl, {
							params: {
								creditType: creditToDownload.type,
								activityTitle: this.activity,
								dateClaimedStr: this.$options.filters.dateString(creditToDownload.creditDateClaimed),
								creditAmtStr: creditToDownload.amount.toString(),
								creditMaxAmtStr: creditToDownload.maxAmount.toString(),
								activityFormat: this.activityFormat || "Internet Enduring Material",
								vnrNumber: this.vnrNumber
							},
							responseType: "blob"
						})
						.then((response) => {
							const url = window.URL.createObjectURL(new Blob([response.data]));
							const link = document.createElement('a');
							link.href = url;
							link.setAttribute('download', creditToDownload.type + '_certificate.pdf');
							document.body.appendChild(link);
							link.click();
							document.body.style.cursor='default';
						})
						.catch((error) => {
							console.log(error);
							document.body.style.cursor='default';
						});
				}
			}
		},
		getCreditShortName: function(credit) {
			let creditType = this.creditTypes.find(type => type.styleCode === credit.type);
			if (creditType) {
				return creditType.shortName;
			}
			else {
				return "";
			}
		},
		addEmptyCredit: function() {
			let creditObj = {
				type: null,
				amount: null,
				maxAmount: null,
				creditDateClaimed: this.editableObject.activityDateClaimed
			};
			this.editableObject.credits.push(creditObj);
			this.$nextTick(() => {
				var creditsDiv = document.getElementById("creditsListDiv");
				creditsDiv.scrollTop = creditsDiv.scrollHeight;
			});
		},
		deleteCredit: function(credit) {
			// We won't delete the first row
			if (this.editableObject.credits.length === 1) {
				return;
			}
			let index = this.editableObject.credits.indexOf(credit);
			if (index !== -1) {
				this.editableObject.credits.splice(index, 1);
			}
		},
		editExternalActivity: function() {
			this.editableObject = clonedeep(this.originalObject);
			this.showModal_ExternalActivityData = true;
			this.creditIndexSelectedForAttachment = -1;
		},
		saveExternalActivity: function() {
			if (!this.areExternalActivityRequiredFieldsPopulated) {
				return;
			}

			let hasObjectChanged = false;
			document.body.style.cursor='wait';
			let savePromises = [];
			let addOrUpdatePromise = undefined;
			let addAttachmentPromise = undefined;
			let deletePromise = undefined;
			let deleteAttachmentPromise = undefined;
			let deleteIds = [];
			let deleteAttachmentIds = [];

			// First add or edit the credits in the editableObject
			for (const credit of this.editableObject.credits) {
				if (this.hasCreditChanged(credit)) {
					addOrUpdatePromise = undefined;
					addAttachmentPromise = undefined;
					let attachmentIdThatWasReplaced = undefined;

					if (this.hasCreditAttachmentChanged(credit)) {
						// Call api to save the credit attachment, and retrieve the certId
						// There are 3 scenarios here: 
						// 1. Add: Add a new attachment and update the transcript record with new attachment id
						// 2. Replace: Delete old attachment(push to deleteAttachmentIds[]), Add new attachment, update transcript record with new attachment id
						// 3. Delete: Delete old attachment, update transcript record with null attachment id

						// When an attachment was deleted from the original credit
						if (credit.id && this.originalObject.credits.some(cred => cred.id === credit.id)) {
							let origCredit = this.originalObject.credits.find(cred => cred.id === credit.id);
							if (origCredit.certId && !credit.certId) {
								attachmentIdThatWasReplaced = origCredit.certId;
							}
						}

						// When a new attachment has been added
						if (!credit.certId && credit.certFileName) {
							let formData = new FormData();
							formData.append("customerId", this.customerId);
							formData.append("fileName", credit.certFileName);
							formData.append("fileExtension", credit.certFileType);
							formData.append("file", credit.certFile);

							let addAttachmentUrl = "http://localhost:63683/api/Transcripts/AddCustomerTranscriptAttachment";
							//let addAttachmentUrl = this.transcriptsApiUrl + "AddCustomerTranscriptAttachment";
							addAttachmentPromise = axios.post(
															addAttachmentUrl,
															formData,
															{
																headers: {
																	vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
																}
															}
														);
							addAttachmentPromise
								.catch((error) => {
									console.log(error);
								});
							
							savePromises.push(addAttachmentPromise);
						}
					}

					// Add attachment first and then corresponding credit for DB referential integrity
					if (addAttachmentPromise) {
						addAttachmentPromise.then((response) => {
							if (Number.isInteger(response.data)) {
								credit.certId = response.data;
							}

							/*******************************************************/
							// The code is repeated here, so refactor later
							// Call api to save the credit, and retrieve the credit id for a new one
							let addOrUpdateUrl = "http://localhost:63683/api/Transcripts/UpdateCustomerTranscript";
							//let addOrUpdateUrl = this.transcriptsApiUrl + "UpdateCustomerTranscript";
							addOrUpdatePromise = axios.post(
														addOrUpdateUrl, 
														{
															transcriptid: credit.id,
															customerid: this.customerId,
															programtitle: this.editableObject.activity,
															// CE is the old/retired code for CNE. We will show CNE on the frontend but will store it as CE in the DB.
															cecredittypecode: credit.type === "CNE" ? "CE" : credit.type,
															cecredits: credit.amount,
															maxcredits: credit.maxAmount,
															cecreditdate: this.editableObject.activityDateClaimed,
															activityLocation: this.editableObject.activityLocation,
															attachmentId: credit.certId
														},
														{
															headers: {
																vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
															}
														}
													);
							addOrUpdatePromise
								.then((response) => {
									if (Number.isInteger(response.data)) {
										credit.id = response.data;
									}

									// For an existing credit, if the attachment was replaced, then delete the old attachment at this point
									// when the credit record is updated to point to the new attachment
									// This ensures DB referential integrity
									if (attachmentIdThatWasReplaced) {
										let deleteAttachmentUrl = "http://localhost:63683/api/Transcripts/DeleteCustomerTranscriptAttachments"
										//let deleteAttachmentUrl = this.transcriptsApiUrl + "DeleteCustomerTranscriptAttachments";
										deleteAttachmentPromise = axios.get(
																			deleteAttachmentUrl,
																			{
																				headers: {
																					vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
																				},
																				params: {
																					attachmentIds: attachmentIdThatWasReplaced
																				}
																			}
																		);
										deleteAttachmentPromise
											.catch((error) => {
												console.log(error);
											});
										
										savePromises.push(deleteAttachmentPromise);
									}
								})
								.catch((error) => {
									console.log(error);
								});
						});
					}
					else {
						// Call api to save the credit, and retrieve the credit id for a new one
						let addOrUpdateUrl = "http://localhost:63683/api/Transcripts/UpdateCustomerTranscript";
						//let addOrUpdateUrl = this.transcriptsApiUrl + "UpdateCustomerTranscript";
						addOrUpdatePromise = axios.post(
													addOrUpdateUrl, 
													{
														transcriptid: credit.id,
														customerid: this.customerId,
														programtitle: this.editableObject.activity,
														// CE is the old/retired code for CNE. We will show CNE on the frontend but will store it as CE in the DB.
														cecredittypecode: credit.type === "CNE" ? "CE" : credit.type,
														cecredits: credit.amount,
														maxcredits: credit.maxAmount,
														cecreditdate: this.editableObject.activityDateClaimed,
														activityLocation: this.editableObject.activityLocation,
														attachmentId: credit.certId
													},
													{
														headers: {
															vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
														}
													}
												);
						addOrUpdatePromise
							.then((response) => {
								if (Number.isInteger(response.data)) {
									credit.id = response.data;
								}
							})
							.catch((error) => {
								console.log(error);
							});
					}

					savePromises.push(addOrUpdatePromise);

					if (!hasObjectChanged) {
						hasObjectChanged = true;
					}
				}
			}

			// Then delete any credits and respective attachments that shouldn't be in the originalObject
			// Capture all the credit ids to be deleted first
			for (const origCredit of this.originalObject.credits) {
				if (!this.editableObject.credits.some(cred => cred.id === origCredit.id)) {
					deleteIds.push(origCredit.id);
					if (origCredit.certId) {
						deleteAttachmentIds.push(origCredit.certId);
					}

					if (!hasObjectChanged) {
						hasObjectChanged = true;
					}
				}
			}
			// Delete Transcript records before attachments for DB referential integrity
			deletePromise = undefined;
			if (deleteIds.length > 0) {
				// Call Api and pass a list of delimited ids
				let deleteUrl = "http://localhost:63683/api/Transcripts/DeleteCustomerTranscripts"
				//let deleteUrl = this.transcriptsApiUrl + "DeleteCustomerTranscripts";
				deletePromise = axios.get(
										deleteUrl,
										{
											headers: {
												vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
											},
											params: {
												transcriptIds: deleteIds.join()
											}
										}
									);
				deletePromise
					.catch((error) => {
						console.log(error);
					});
				
				savePromises.push(deletePromise);
			}
			// Delete Transcript Attachment records
			deleteAttachmentPromise = undefined;
			if (deletePromise) {
				if (deleteAttachmentIds.length > 0) {
					deletePromise.then(() => {
						let deleteAttachmentUrl = "http://localhost:63683/api/Transcripts/DeleteCustomerTranscriptAttachments"
						//let deleteAttachmentUrl = this.transcriptsApiUrl + "DeleteCustomerTranscriptAttachments";
						deleteAttachmentPromise = axios.get(
															deleteAttachmentUrl,
															{
																headers: {
																	vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
																},
																params: {
																	attachmentIds: deleteAttachmentIds.join()
																}
															}
														);
						deleteAttachmentPromise
							.catch((error) => {
								console.log(error);
							});
						
						savePromises.push(deleteAttachmentPromise);
					});
				}
			}
			else if (deleteAttachmentIds.length > 0) {
				let deleteAttachmentUrl = "http://localhost:63683/api/Transcripts/DeleteCustomerTranscriptAttachments"
				//let deleteAttachmentUrl = this.transcriptsApiUrl + "DeleteCustomerTranscriptAttachments";
				deleteAttachmentPromise = axios.get(
													deleteAttachmentUrl,
													{
														headers: {
															vendorauthid: "5890F255-4081-44D0-B80D-EEE8E31CFD05"
														},
														params: {
															attachmentIds: deleteAttachmentIds.join()
														}
													}
												);
				deleteAttachmentPromise
					.catch((error) => {
						console.log(error);
					});
				
				savePromises.push(deleteAttachmentPromise);
			}

			// Check to see when all the promises are resolved, and then change the cursor accordingly
			// If Object has changed at all, then assign the edited object to the original
			// This will also reflect changes on the main transcripts page 
			if (savePromises.length > 0 && hasObjectChanged) {
				Promise.allSettled(savePromises).then(() => {
					this.$emit("saveExternal", this.originalObject.activity, this.editableObject);
					document.body.style.cursor='default';
					this.showModal_ExternalActivityData = false;
					this.editableObject = null;
				});
			}
			else {
				document.body.style.cursor='default';
				this.showModal_ExternalActivityData = false;
				this.editableObject = null;
			}
		},
		hasCreditChanged: function(credit) {
			if (!credit.id || !this.originalObject.credits.some(cred => cred.id === credit.id)) {
				return true;
			}

			let origCredit = this.originalObject.credits.find(cred => cred.id === credit.id);

			if (this.editableObject.activity === this.originalObject.activity && 
				this.editableObject.activityLocation === this.originalObject.activityLocation && 
				this.editableObject.activityDateClaimed.valueOf() === this.originalObject.activityDateClaimed.valueOf() && 
				credit.type === origCredit.type && 
				credit.amount === origCredit.amount && 
				credit.maxAmount === origCredit.maxAmount &&
				credit.certId === origCredit.certId &&
				credit.certFileName === origCredit.certFileName) {
				return false;
			}
			else {
				return true;
			}
		},
		hasCreditAttachmentChanged: function(credit) {
			if (!credit.id || !this.originalObject.credits.some(cred => cred.id === credit.id)) {
				return true;
			}

			let origCredit = this.originalObject.credits.find(cred => cred.id === credit.id);

			if (credit.certId === origCredit.certId &&
				credit.certFileName === origCredit.certFileName) {
				return false;
			}
			else {
				return true;
			}
		},
		onFileChange: function(e, activityCredit, index) {
			let file = e.target.files[0];

			if (this.isFileValid(file)) {
				activityCredit.certFileName = file.name;
				let splitFileName = file.name.split('.');
				activityCredit.certFileType = splitFileName[splitFileName.length - 1];
				activityCredit.certFile = file;
				this.creditIndexSelectedForAttachment = index
                this.$forceUpdate();
			}
			else {
				// Code for modal that shows message of invalid file
			}
		},
		isFileValid: function(file) {
			if ((file.type.startsWith("image/") || 
				 file.type.toLowerCase() === "application/pdf" || 
				 file.type.toLowerCase() === "application/msword" || 
				 file.type.toLowerCase() === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
				) && 
				 file.size <= 3000000 &&
				 file.name.length <= 100) {
				return true;
			}
			else {
				return false;
			}
		},
		removeFile: function(activityCredit, index) {
			activityCredit.certId = undefined;
			activityCredit.certFileName = undefined;
			activityCredit.certFileType = undefined;
			activityCredit.certFile = undefined;
			this.creditIndexSelectedForAttachment = -1;
		},
		creditTypesForExternalCreditSelection: function(selectedType) {
			if (this.editableObject && this.editableObject.credits && this.editableObject.credits.length > 0) {
				return this.creditTypes.filter(cred => !this.editableObject.credits.some(editableCred => editableCred.type === cred.styleCode) || (selectedType && cred.styleCode === selectedType));
			}
			else {
				return this.creditTypes;
			}
		}
	}
};
</script>

<style>

</style>