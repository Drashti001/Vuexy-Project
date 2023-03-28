<template>
    <div>
       
        <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
            
              <h5 class="mb-0">
               Confirmation Page
              </h5>
              <small class="text-muted">
                Please Confirm Your Details
              </small>
            </b-col>
        
            <div class="border-3 border-black p-2 rounded row w-100 position-relative my-1"  >
              <h5 class="position-absolute" style="top: -9px; background-color:#f8f8f8; padding:0 16px;">Owner Details</h5>
            
            <b-col md="6">
              <b-form-group
                label="Confirm Username"
                label-for="username"
                >
                <b-form-input
                    v-model="ownerData.username"
                >
              
    
                </b-form-input>
              </b-form-group>
              
            </b-col>
           <b-col md="6">
              <b-form-group
                label="Confirm Your Email"
                label-for="email"
              >
                  <b-form-input
                    id="email"
                    type="email"
                    v-model="ownerData.emailValue"
                    />
                 
           
              </b-form-group>
            </b-col>
       
            <b-col md="6">
                <b-form-group
                  label="Confirm Your Position at Organization"
                  label-for="position"
                >
                    <b-form-select 
                    v-model="ownerData.selectedPosition"
                    :options="companyPosition">
                  </b-form-select>
                 
                
                </b-form-group>
              </b-col>
              
              <b-col md="6">
              <b-form-group
                label="Password"
                label-for="password"
              >
                  <b-form-input
                    id="password"
                    v-model="ownerData.PasswordValue"
                    />
               
              </b-form-group>
            </b-col>
          <!-- </div> -->
          </div>
            <div class="border-3 border-black p-2 rounded row w-100 position-relative my-2"  >
              <h5 class="position-absolute" style="top: -9px; background-color:#f8f8f8; padding:0 16px;">Company Details</h5>
             <b-col md="6">
                <b-form-group
                  label="Company Name"
                  label-for="company-name"
                >
                    <b-form-input
                      id="company-name"
                      v-model="companyData.company_name"
                      />
                    
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Company Address"
                  label-for="comapny-address"
                >
                 <b-form-input
                      id="comapny-address"
                      v-model="companyData.company_address"
                    />
                    
          
                </b-form-group>
              </b-col>
              <b-col md="6">
              
                  <b-form-group
                    label="Country"
                    label-for="country"
                >
                  <b-form-select 
                  v-model="companyData.selectedCountry"
                    :options="countryName"
                >
                  </b-form-select>
                  </b-form-group>
              </b-col>
              <b-col md="6">
                  <b-form-group
                    label="Confirm Your Language"
                    label-for="language"
                  
                  >
                  <b-form-select 
                  v-model="companyData.selectedLanguage"
                      :options="languageName"
                    >
                    </b-form-select>
                  </b-form-group>
             
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Confirm Company Contact Number"
                  label-for="comapny-contact-number"
                >
                 
                    <b-form-input
                    v-model="companyData.company_contact"
                      id="comapny-contact"
                     
                      type="number"
                      max=10
                     
                    />
                  
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Company Website"
                  label-for="comapny-website"
                >
                    <b-form-input
                      id="website"
                      v-model="companyData.company_website"
                    />
                
                </b-form-group>
              </b-col>
              </div>
              <!-- Members details -->
              <div class="border-3 border-black p-2 rounded row w-100 position-relative my-0" v-for="(i, index) in memberData" :key="index">
                <h5 class="position-absolute" style="top: -9px; background-color:#f8f8f8; padding:0 16px;">Member Details</h5>
    
              <b-col md="6">
                <b-form-group
                  label="Confirm Member Name"
                  label-for="m-name"
                >
                  <b-form-input
                    v-model="i.m_name"
                    id="mname"
                  
                  />
                </b-form-group>
              </b-col>
    
              <b-col md="6">
                <b-form-group
                  label=" Confirm Member Address"
                  label-for="m-address"
                >
                  <b-form-input
                  v-model="i.m_address"
                    id="maddress"
                    
                  />
                </b-form-group>
              </b-col>
    
              <b-col md="6">
                <b-form-group
                  label=" Confirm Member Profile at Company"
                  label-for="m-profile"
                >
          
                  <b-form-input
                  v-model="i.m_profile"
                    id="profile"
                     />
      
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Confirm Member City"
                  label-for="m-city"
                >
                  <b-form-input
                  v-model="i.m_city"
                    id="mcity"
                   
                  />
                 
                </b-form-group>
              </b-col>
    
              <!-- Member contact -->
              <b-col md="6">
                <b-form-group
                  label="Confirm Member Contact Number"
                  label-for="m-contact"
                >
                  <b-form-input
                    id="contact"
                    v-model="i.m_contact"
                    type="number"
                 />
                  
                </b-form-group>
              </b-col>
    
              <!-- Member Email address-->
              <b-col
                md="6"
              >
                <b-form-group
                  label="Confirm Member Email"
                  label-for="m-email"
                >
                  <b-form-input
                    id="memail"
                    v-model="i.m_email"
                  />
                </b-form-group>
              </b-col>
              </div>
              <div class="border-3 border-black p-2 rounded row w-100 position-relative my-2"  >
                <h5 class="position-absolute" style="top: -9px; background-color:#f8f8f8; padding:0 16px;">Selected Package Details</h5>
              <b-col
                md="6"
              >
                <b-form-group
               
                  label="Confirm Your selected Monthly/Yearly(USD $)"
                  label-for="package"
                >
                  <b-form-input
                  v-model="priceMain.price"
                  />
                </b-form-group>
               
              </b-col>
             
              </div>
    

          </b-row>
    </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BFormSelect,
  BForm,
  BButton,
  BFormCheckbox,
  BCard, BImg, BCardText, BListGroup, BListGroupItem,BBadge
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { codeIcon } from './code'
// import { integer } from 'vee-validate/dist/rules'
import { heightTransition } from '@core/mixins/ui/transition'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import Ripple from 'vue-ripple-directive'
    export default {
        components: {
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormCheckbox,
    BForm,
    BButton,
    vSelect,
    BCardCode,
    BFormInvalidFeedback,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    AppCollapseItem,
    AppCollapse,
    BCard, BImg, BCardText, BListGroup, BListGroupItem,
    BBadge

    },
    directives: {
    Ripple,
    },
    mixins: [heightTransition], 
    
    data(){
        return{
         
          memberData:this.mainData[2],
          ownerData:this.mainData[0],
          companyData:this.mainData[1],
          priceMain:this.mainData[3],
            required,
            email,
            codeIcon,
            countryName: [
        { value: null, text: 'Select Value' },
        { value: 'India', text: 'India' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
       
      ],
      languageName: [
        { value: null, text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Russian', text: 'Russian' },
      ],
      companyPosition:[
        { value: null, text: 'Nothing Selected' },
        { value: 'C.E.O', text: 'C.E.O' },
        { value: 'C.T.O', text: 'C.T.O' },
        { value: 'H.R', text: 'H.R' },
        { value: 'Employee', text: 'Employee' },
        ],
        }
    },
    props:["mainData"], 
    mounted()
  {
    console.log(this.mainData,'price');
  },
  watch:{
        mainData(val){
           
            this.ownerData = val[0];
            this.companyData = val[1];
            this.memberData = val[2];
            this.priceMain= val[3];
            
        }
        
    }}
 
</script>

<style lang="scss" scoped>

</style>