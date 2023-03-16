<!-- modal -->
   <template>
<b-row>
  {{ editCarProps}}
    <b-modal :id="modalId" ref="my-modal" title="Edit Data" @ok="handleEditSubmit">

      
        <validation-observer ref="simpleRules" >
            <!-- car details form -->
            <form ref="form" @submit.stop.prevent="handleEditSubmit">

                <!-- car name input -->
                <!-- {{ editCarProps.car_desc}}--> 
                 <!-- {{ editCarProps.car_fuel_type }}  -->
                <b-col class="mb-1">

                    <b-form-group label="Enter Car Name" label-for="car_title">

                        <validation-provider #default="{ errors }" rules="required" >
                            <b-form-input id="name-input" v-model="editCarProps.car_title" :state="errors.length > 0 ? false: null" required />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>

                </b-col>
                <!-- car model input -->
                <b-col class="mb-1">
                    <b-form-group label="Enter Car Model" label-for="car_model" invalid-feedback="Model Name is required">

                        <validation-provider #default="{ errors }" rules="required" >
                            <b-form-input id="name-input" v-model="editCarProps.car_model" required />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
                <!-- car fuel type input -->
                <b-col class="mb-1">
                    <b-form-group label="Enter Car Fuel Type" label-for="car_fuel_type" invalid-feedback="Name is required">

                        <validation-provider #default="{ errors }" rules="required" >
                            <!-- {{ selected.car_fuel_type }} -->
                            <!-- <b-form-select v-model="editCarProps.selected.options" :options="options" /> -->
                            <b-form-select v-model=" editCarProps.car_fuel_type" :options="options" />
                           
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <!-- car price input -->
                <b-col class="mb-1">
                    <b-form-group label="Enter Car Price" label-for="car_price" invalid-feedback="price is required">

                        <validation-provider #default="{ errors }" rules="required|integer" name="Number">
                            <b-form-input id="name-input" :state="errors.length > 0 ? false:null" v-model="editCarProps.car_price" required />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <!-- car manufacturer input -->
                <b-col>
                    <b-form-group label="Enter Car Manufacturer Year" label-for="make_year" invalid-feedback="Year is required">

                        <validation-provider #default="{ errors }" rules="required|integer" name="Number">
                            <b-form-input id="name-input" v-model="editCarProps.make_year" required /><small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
                <!-- car location input -->
                <b-col>

                    <b-form-group label="Enter Car Location" label-for="location" invalid-feedback="Year is required">

                        <validation-provider #default="{ errors }" rules="required|" name="Number">
                            <b-form-input lazy-formatterid="name-input" v-model="editCarProps.location" required /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                    </b-form-group>
                </b-col>
                
                <b-col>
                    <b-form-group label="Enter Car Average Km" label-for="avg_km" invalid-feedback="Year is required">

                        <validation-provider #default="{ errors }" rules="required|integer" name="Number">
                            <b-form-input id="name-input" v-model="editCarProps.avg_km" required /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                    </b-form-group>
                </b-col>
               {{ editCarProps.car_img }}
               
                <b-col>
                    <b-form-group label="Choose Car Image" label-for="car_img">
                        <b-form-file id="extension" accept=".jpg, .png, .gif, .jpeg" v-model="editCarProps.car_img" />
                    </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group label="Description" label-for="car_desc">
                      <b-form-input id="car-desc" v-model="editCarProps.car_desc" />
                  </b-form-group>
               </b-col>
              
                <!-- <b-col><b-button @click="handleEditSubmit1">Ok</b-button></b-col> -->
                <!-- <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>-->
                <!-- <b-button 
              v-if="modelProps == 'Edit Car Details'"
              color="blue darken-1"
              text
              @click="handleEditSubmit">Save</b-button>

            <b-button 
              v-if="modelProps == 'Add Car Details'"
              color="blue darken-1"
              text
              @click="handleAddSubmit">Save</b-button>  -->

                <!-- <b-card-text>
              <div class="image">
             <img v-bind:src="car_img">
            {{ car_img }}
             </div>
            </b-card-text> -->

            </form>
        </validation-observer>

    </b-modal>
</b-row>
</template>

<script>
import {
    BButton,
    BFormGroup,
    BFormInput,
    BModal,
    VBModal,
    BCardText,
    BForm,
    BFormSelect,
    BFormFile,
    BAlert,
    BRow,
    BCol
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import BCardCode from '@core/components/b-card-code'
import {
    ValidationProvider,
    ValidationObserver
} from 'vee-validate'
import {
    required,
    alpha,
    integer,
    min,
    digits,
    length,
} from '@validations'

export default {
    components: {

        BButton,
        BFormGroup,
        BFormInput,
        BModal,
        BForm,
        BCardCode,
        BCardText,
        BFormSelect,
        ValidationProvider,
        ValidationObserver,
        BFormFile,
        BRow,
        BAlert,
        BCol

    },
    props: {
        modalId: String,
       
        editCarProps: [Array,String,Object]

    },
    
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    data() {
        return {
            //alert:false,
            cars: [],
            // dialog:true,
            //fuel_type: this.editCarProps.car_fuel_type,
            required,
            alpha,
            integer,
            min,
            digits,
            length,
            // alert:false,
            // car_title:'',
            // car_model:'',
            // car_fuel_type:'',
            // car_price:'',
            // make_year:'',
            // location:'',
            // avg_km:'',
            // car_title:this.editcarpropdata.car_title,
            // car_model:this.editcarpropdata.car_model,
            // car_fuel_type:this.editcarpropdata.car_fuel_type,
            // car_price:this.editcarpropdata.car_price,
            // make_year:this.editcarpropdata.make_year,
            // location:this.editcarpropdata.location,
            // avg_km:this.editcarpropdata.avg_km,
            //car_img: null,
            selected: null,
            options: [{
                    value: null,
                    text: 'Select Fuel Type'
                },
                {
                    value: 'Diesel',
                    text: 'Diesel'
                },
                {
                    value: 'Petrol',
                    text: 'Petrol'
                },
                {
                    value: 'CNG',
                    text: 'CNG'
                }

            ]
            
    }},
    methods: {

        handleEditSubmit() {
            alert('hadle submit called');
         
            var cardata = {
                car_title:this.editCarProps.car_title,
                car_model: this.editCarProps.car_model,
                car_fuel_type: this.editCarProps.selected,
                car_price: this.editCarProps.car_price,
                make_year: this.editCarProps.make_year,
                location: this.editCarProps.location,
                avg_km: this.editCarProps.avg_km,
                car_img: this.editCarProps.car_img.name,
                car_desc:this.editCarProps.car_desc,
                id:this.editCarProps.id,
                carId:this.editCarProps.carId
            }
           console.log(cardata,'car data');

           this.$store.dispatch("updateCars",cardata);
            //this.dialog =false;
            //this.$emit("close-event",false);
            //  this.alert=true;
            console.log('data edited', this.$store.state.cars);

        },
      
       
    },

    // },

}
</script>

<style scoped>

</style>
