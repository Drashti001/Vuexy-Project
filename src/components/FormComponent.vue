<template>
    <div>
        <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        shape="square"
        finish-button-text="Submit"
        back-button-text="Previous"
        class="mb-3"
         @on-complete="formSubmitted"
    >

      <!-- profile details tab -->
      <tab-content
        title="Own Profile/Register"
       :before-change="validationForm"
      >
      
        <validation-observer
          ref="accountRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Own Profile / Register
              </h5>
              <small class="text-muted">
                Enter Your Details
              </small>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Username"
                label-for="username"
              >
               <validation-provider
                  #default="{ errors }"
                  name="username"
                  rules="required"
                > 
                  <b-form-input
                    id="name"
                    v-model="register.username"
                    :state="errors.length > 0 ? false:null"
                    placeholder="johndoe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Email"
                label-for="email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="email"
                    v-model="register.emailValue"
                    type="email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john.doe@email.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group
                  label="Position at Organization"
                  label-for="position"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="position"
                    rules="required"
                  >
                    <b-form-select 
                        v-model="register.selectedPosition" 
                        :options="companyPosition">
                    </b-form-select>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Company Name"
                  label-for="company"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="company"
                    rules="required"
                  >
                    <b-form-input
                      id="company"
                      v-model="register.companyName"
                      :state="errors.length > 0 ? false:null"
                      placeholder="ZignutsTechnolab"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                   </validation-provider>
                </b-form-group>
              </b-col>
            <b-col md="6">
              <b-form-group
                label="Password"
                label-for="password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="Password"
                  rules="required|password"
                >
                  <b-form-input
                    id="password"
                    v-model="register.PasswordValue"
                    type="password"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Password"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Confirm Password"
                label-for="c-password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password Confirm"
                  rules="required|confirmed:Password"
                >
                  <b-form-input
                    id="c-password"
                    v-model="register.passwordCon"
                    type="password"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Re-type Password"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!--Company Details-->
      <tab-content
      title="Company Details"
      :before-change="validationFormInfo" 
    >
   
      <validation-observer
        ref="infoRules"
        tag="form"
      >
        <b-row>
          <!-- {{mainData }} -->
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Company Details
            </h5>
            <small class="text-muted">Add Company Details</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Company Name"
              label-for="company-name"
            >
              <validation-provider
                #default="{ errors }"
                name="Company Name"
                rules="required"
              >
                <b-form-input
                  id="company-name"
                  v-model="company.company_name"
                  placeholder="Zinguts Technolab"
                  :state="errors.length > 0 ? false:null"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Company Address"
              label-for="comapny-address"
            >
              <validation-provider
                #default="{ errors }"
                name="Company Address"
                rules="required"
              >
                <b-form-input
                  id="comapny-address"
                  v-model="company.company_address"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Doe"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <validation-provider
              #default="{ errors }"
              name="Country"
              rules="required"
            >
              <b-form-group
                label="Country"
                label-for="country"
                :state="errors.length > 0 ? false:null"
              >
              <b-form-select 
              v-model="company.selectedCountry" 
              :options="countryName"
              placeholder="Select Country">
                </b-form-select>
               
                <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col md="6">
            <validation-provider
              #default="{ errors }"
              name="Language"
              rules="required"
            >
              <b-form-group
                label="Language"
                label-for="language"
                :state="errors.length > 0 ? false:null"
              >
              <b-form-select 
                  v-model="company.selectedLanguage" 
                  :options="languageName"
                  placeholder="Select Country">
                </b-form-select>
                <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>

          <b-col md="6">
            <b-form-group
              label="Company Contact Number"
              label-for="comapny-contact-number"
            >
              <validation-provider
                #default="{ errors }"
                name="Company Contact Number"

                rules="required"
              >
                <b-form-input
                  id="comapny-address"
                  v-model="company.company_contact"
                  type="number"
                  max=10
                  :state="errors.length > 0 ? false:null"
                  placeholder="1234567890"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group
              label="Company Website"
              label-for="comapny-website"
            >
              <validation-provider
                #default="{ errors }"
                name="Company Website"
                rules="required|url"
              >
                <b-form-input
                  id="facebook"
                  v-model="company.company_website"
                  :state="errors.length > 0 ? false:null"
                  placeholder="https://facebook.com/abc"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
       
        </b-row>
      </validation-observer>
    </tab-content>

     <!-- Add Team Member -->
     <tab-content
      title="Add Team Member"
      :before-change="validationFormTeam">
   >
  
     <validation-observer
       ref="addteamrules"
       tag="form"
     >
       <b-row>
        <!-- {{mainData}} -->
         <b-col
           cols="12"
           class="mb-2"
         >
           <h5 class="mb-0">
            Add Team Member
           </h5>
           <small class="text-muted"> Add Team Members Details</small>
         </b-col>
         <b-col md="12">
          <b-card-code 
            title="Add Team Members" 
            name="add team">
            <div>
              <b-form
                ref="form"
                class="repeater-form"
                >
                <!-- @submit.prevent="repeateAgain" -->
        
                <!-- Row Loop -->
                <b-row
                  v-for="(item, index) in member"
                  :id="item.id"
                  :key="item.id"
                  ref="row"
                >
        
                  <!-- Member Name -->
                  <b-col md="4">
                    <b-form-group
                      label="Member Name"
                      label-for="m-name"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="Member Name"
                      rules="required"
                    >
                      <b-form-input
                        id="mname"
                        v-model="item.m_name"
                        :state="errors.length > 0 ? false:null"
                        placeholder=" Enter Member Name"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    </b-form-group>
                  </b-col>
        
                  <!-- Member Address -->
                  <b-col md="4">
                    <b-form-group
                      label="Member Address"
                      label-for="m-address"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="Member Address"
                      rules="required"
                    >
                      <b-form-input
                        id="maddress"
                        v-model="item.m_address"
                        :state="errors.length > 0 ? false:null"
                        placeholder=" Enter Member Address"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    </b-form-group>
                  </b-col>

                   <!-- Member Profile -->
                  <b-col md="2">
                    <b-form-group
                      label=" Member Profile at Company"
                      label-for="m-profile"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="Profile"
                    rules="required"
                  >
                      <b-form-input
                        v-model="item.m_profile"
                        id="profile"
                        placeholder="Your status at Company"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    </b-form-group>
                  </b-col>

                   <!-- Member City -->
                  <b-col md="2">
                    <b-form-group
                      label="Member City"
                      label-for="m-city"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="Member City"
                    rules="required"
                  >
                      <b-form-input
                        v-model="item.m_city"
                        id="mcity"
                        placeholder="City Name"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- Member contact -->
                  <b-col md="2">
                    <b-form-group
                      label="Member Contact Number"
                      label-for="m-contact"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="Member Contact"
                    rules="required"
                  >
                      <b-form-input
                        id="contact"
                        v-model="item.m_contact"
                        type="number"
                        placeholder="2222222222"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
        
                  <!-- Member Email address-->
                  <b-col
                    lg="2"
                    md="1"
                  >
                    <b-form-group
                      label="Member Email"
                      label-for="m-email"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="Member Contact"
                    rules="required|email"
                  >
                      <b-form-input
                        id="memail"
                        placeholder="abc@gmail.com"
                        v-model="item.m_email"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
        
                  <!-- Remove Button -->
                  <b-col
                    lg="2"
                    md="3"
                    class="mb-50"
                  >
                    <b-button
                      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                      variant="outline-danger"
                      class="mt-0 mt-md-2"
                      @click="removeItem(index)"
                     
                    >
                      <feather-icon
                        icon="XIcon"
                        class="mr-25"
                      />
                      <span>Delete</span>
                      </b-button>

                      <b-button
                      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                      variant="outline-success"
                      class="mt-0 mt-md-2 ml-2"
                      @click="addTeam(item)"
                     
                    >
                      <feather-icon
                        icon="DoneIcon"
                        class="mr-25"
                      />
                      <span>Done</span>
                    </b-button>
                  </b-col>
                  <b-col cols="12">
                    <hr>
                  </b-col>
                </b-row>
        
              </b-form>
            </div>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              @click="repeateAgain"
            >
              <feather-icon
                icon="PlusIcon"
                class="mr-25"
              />
              <span>Add New</span>
            </b-button>
          </b-card-code>
         </b-col>
         
       </b-row>
     </validation-observer>

     </tab-content>
       <!-- Select Package and Pricing -->
      <tab-content
          title="Select Package/Pricing"
          :before-change="validationFormPrice"
        > 
      
        <!-- title text and switch button -->
        <div class="text-center">
         <!-- {{ mainData }} -->
          <h1 class="mt-5">
            Pricing Plans
          </h1>
          <p class="mb-2 pb-75">
            All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
          </p>
          <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
            <h6 class="mr-1 mb-0">
              Monthly
            </h6>
            <b-form-checkbox
              id="priceSwitch"
              v-model="status"
              name="price-switch"
              value="annually"
              unchecked-value="monthly"
              switch
              @input="tooglePlan"
            />
            <h6 class="ml-50 mb-0">
              Annually
            </h6>
          </div>
        </div>
        <b-row class="pricing-card">
              <b-col md="4">
                <b-card
                  align="center"
                  ml="5"
                >
                  <!-- img -->
                  <b-img
                   
                    src="../../public/form/content-img-2.jpg"
                    class="mb-2 mt-5 w-100 h-100"
                    alt="basic svg img"
                  

                  />
                  <!--/ img -->
                  <h3>Basic Plan</h3>
    
                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price mt-2">
                      <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                      <span class="pricing-basic-value font-weight-bolder text-primary">0$</span>
                      <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                    </div>
                    <small
                      v-show="!monthlyPlanShow"
                      class="annual-pricing text-muted"
                    >USD 0$ / year</small>
                  </div>
                  <!--/ annual plan -->
    
                  <!-- plan benefit -->
                  <b-list-group class="list-group-circle text-left">
                 
                    <li>
                      <ol>100 responses a month</ol>
                      <ol>Unlimited forms and surveys</ol>
                      <ol>Unlimited fields</ol>
                      <ol>Basic form creation tools</ol>
                      <ol>Up to 2 subdomains</ol>
                    </li>
                    
                  </b-list-group>
                  <!--/ plan benefit -->
    
                  <!-- buttons -->
                  <b-button
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    block
                    class="mt-2"
                    variant="outline-success"
                  >
                    Your current plan
                  </b-button>
                </b-card>
              </b-col>
              <b-col md="4">
                <b-card
                  align="center"
                >
                  <!-- img -->
                  <b-img
                   
                    src="../../public/form/content-img-2.jpg"
                    class="mb-2 mt-5 w-100 h-100"
                    alt="basic svg img"
                  

                  />
                  <!--/ img -->
                  <h3>Standard Plan</h3>

    
                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price mt-2">
                      <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                      <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? monthlyPrice : yearlyPrice }}</span>
                      <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                    </div>
                    <small
                      v-show="!monthlyPlanShow"
                      class="annual-pricing text-muted"
                    >USD {{yearlyPrice}}/ year</small>
                  </div>
                  <!--/ annual plan -->
    
                  <!-- plan benefit -->
                  <b-list-group class="list-group-circle text-left">
                    <li>
                      <ol>Unlimited responses</ol>
                      <ol>Instagram profile page</ol>
                      <ol>Google Docs integration</ol>
                      <ol>Custom “Thank you” page</ol>
        
                    </li>
                  </b-list-group>
                  <!--/ plan benefit -->
                </b-card>
              </b-col>
            
            </b-row>

  


      
      </tab-content>
  
    <!-- Select Package and Pricing -->
      
    <!-- start confirmation page -->
    <tab-content
        title="Confirmation Page"
      >
      <form-confirmation :mainData="mainData"></form-confirmation>
      
     </tab-content>


    </form-wizard>
    </div>
</template>

<script>
import FormConfirmation from './FormConfirmation.vue'
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { codeBasic } from './code'
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
    BBadge,
    FormConfirmation

    },
    directives: {
    Ripple,
    },
    mixins: [heightTransition],
    data(){
        return{
          mainData:[],
          registerOwner:{},
          register:{
            username:'',
            emailValue: '',
            selectedPosition:'',
            companyName:'',
            PasswordValue: '',
            passwordCon: ''
          },
          ownerData:{},
          companyData:{},
          pricedata:{
            price:''

            
          },
          company:{
            company_name:'',
            company_address:'',
            selectedCountry:'',
            selectedLanguage:'',
            company_contact:null,
            company_website:''
          },
          memberData:[],
          member:[{
            m_id:0,
            m_name:'', 
            m_address:'',
            m_city:'',
            m_contact:'',
            m_email:'',
            m_profile:'',
          }],
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
        items: [{
            id: 1,
          selected: 'male',
          selected1: 'designer',
          prevHeight: 0,
        }],
      nextTodoId: 2,
      codeBasic,
      status: 'monthly',
     
      monthlyPlanShow: true,
      monthlyPrice:49,
      yearlyPrice:40
    }},
    mounted() {
      this.initTrHeight();
     //this.$store.dispatch("getOwner");
    
   
  },
  created() {
    window.addEventListener('resize', this.initTrHeight);
    this.$store.dispatch("getOwner");
    this.registerOwner = this.$store.state.owner;
   
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
    methods:{
      addTeam(item){
      
        //console.log('add item called',item);
        var data3={
          m_name:item.m_name, 
          m_address:item.m_address,
          m_city:item.m_city,
          m_contact:item.m_contact,
          m_email:item.m_email,
          m_profile:item.m_profile,  
        }
        this.memberData.push(data3);
        this.$store.dispatch('addTeam',data3);
      },
    formSubmitted() {
     // console.log('feffdfd');
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
      this.$router.push('/');

    },
    validationForm() {
      
      return new Promise((resolve, reject) => {
        this.$refs.accountRules.validate().then(success => {
          if (success) {
            var data = {
              username:this.register.username,
              emailValue:this.register.emailValue,
              selectedPosition:this.register.selectedPosition,
              companyName:this.register.companyName,
              PasswordValue: this.register.PasswordValue,
              passwordCon: this.register.passwordCon,

              }
              this.mainData.push(data);
              this.$store.dispatch("addOwner",data);
              this.registerOwner=this.$store.state.owner
         
           resolve(true)
        
          } else {
            reject()
          }
        })
      })
    },
    validationFormInfo() {
      return new Promise((resolve, reject) => {
        this.$refs.infoRules.validate().then(success => {
          if (success) {
            var data2 = {
            company_name:this.company.company_name,
            company_address:this.company.company_address,
            selectedCountry:this.company.selectedCountry,
            selectedLanguage:this.company.selectedLanguage,
            company_contact:Number(this.company.company_contact),
            company_website:this.company.company_website
            }
            this.mainData.push(data2);
              this.$store.dispatch("addCompany",data2);
              this.companyData=this.$store.state.company
              //console.log(this.companyData,'companyData');
              resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormTeam() {
      return new Promise((resolve, reject) => {
        this.$refs.addteamrules.validate().then(success => {
          if (success) {
            this.mainData.push(this.memberData)
           resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormPrice() {
      return new Promise((resolve, reject) => {
        this.$refs.addteamrules.validate().then(success => {
          if(success) {
            this.tooglePlan();
            console.log(this.pricedata,'price data')
            this.mainData.push(this.pricedata)
           resolve(true)
          } else {
            reject()
          }
        })
      })
    },
   
    repeateAgain() {
      console.log('repeateAgain:');
      this.member.push({
            m_id:'',
            m_name:'', 
            m_address:'',
            m_city:'',
            m_contact:'',
            m_email:'',
            m_profile:''
      })
     

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.member.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true
        this.pricedata.price=this.monthlyPrice
      

      } else {
        this.monthlyPlanShow = false
        this.pricedata.price=this.yearlyPrice
      }
    },
  },
    }
</script>

<style lang="scss" scoped>
@import '@core/scss/vue/pages/page-pricing.scss';
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>