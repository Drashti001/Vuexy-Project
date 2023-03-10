<!-- modal -->
   <template>
<b-row>
    <b-modal :id="modalId" ref="my-modal" title="Edit Data" ok-title="Submit" @ok="handleEditSubmit">

     
        <validation-observer ref="simpleRules">
            <!-- car details form -->
            <form ref="form" @submit="handleEditSubmit">

                <!-- car name input -->
                {{ editCarProps.car_fuel_type }}
                <b-col class="mb-1">

                    <b-form-group label="Enter Car Name" label-for="car_title">

                        <validation-provider #default="{ errors }" rules="required" name="Car Name">
                            <b-form-input id="name-input" v-model="editCarProps.car_title" :state="errors.length > 0 ? false: null" required />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>

                </b-col>
                <!-- car model input -->
                <b-col class="mb-1">
                    <b-form-group label="Enter Car Model" label-for="car_model" invalid-feedback="Model Name is required">

                        <validation-provider #default="{ errors }" rules="required" name="Car Model">
                            <b-form-input id="name-input" v-model="editCarProps.car_model" required />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
                <!-- car fuel type input -->
                <b-col class="mb-1">
                    <b-form-group label="Enter Car Fuel Type" label-for="car_fuel_type" invalid-feedback="Name is required">

                        <validation-provider #default="{ errors }" rules="required" name="Car Model">
                            <!-- {{ selected.car_fuel_type }} -->
                            <!-- <b-form-select v-model="editCarProps.selected.options" :options="options" /> -->
                            <b-form-select v-model="fuel_type" :options="options" />
                            <!-- <b-form-select v-model="editCarProps.selected" :options="options" />
                            <b-form-select v-model="editCarProps.options" :options="options" /> -->
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
                <!-- car kilometer input -->
                <b-col>
                    <b-form-group label="Enter Car Average Km" label-for="avg_km" invalid-feedback="Year is required">

                        <validation-provider #default="{ errors }" rules="required|integer" name="Number">
                            <b-form-input id="name-input" v-model="editCarProps.avg_km" required /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                    </b-form-group>
                </b-col>
                <!-- Car Image Input -->
                <b-col>
                    <b-form-group label="Choose Car Image" label-for="car_img">
                        <b-form-file id="extension" accept=".jpg, .png, .gif, .jpeg" v-model="editCarProps.car_img" />
                    </b-form-group>
                </b-col>
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
        modeltitleProps: String,
        editCarProps: Array

    },
    //   props: {
    //      editcarpropdata: {
    //       type: [Array, Object, String],
    //       default: {},
    //       },
    //      
    //       modalId:String
    // },
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    data() {
        return {
            //alert:false,
            cars: [],
            // dialog:true,
            fuel_type: this.editCarProps.car_fuel_type,
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
            car_img: null,
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
                    value: 'Pertrol',
                    text: 'Pertrol'
                },
                {
                    value: 'CNG',
                    text: 'CNG'
                }

            ]
            
    }},

    // async created() {

    //     try {
    //         const res = await axios.get(`http://localhost:3000/cars/` + this.$route.params.id);
    //         console.log(res, 'res');
    //         this.cars = res.data;
    //         //this.imgurl = `./../../public/${this.cars.car_img}`
    //         console.log(this.cars, 'edit modal called');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    methods: {

        handleEditSubmit() {
            //alert('edit');
            //alert('hadle submit called');
         
            let data = {
                car_title: editCarProps.car_title,
                car_model: editCarProps.car_model,
                car_fuel_type: editCarProps.selected,
                car_price: editCarProps.car_price,
                make_year: editCarProps.make_year,
                location: editCarProps.location,
                avg_km: editCarProps.avg_km,
                car_img: editCarProps.car_img.name,
                id:editCarProps.id
            }

           this.$store.dispatch("updateCars", data);
            //this.dialog =false;
            //this.$emit("close-event",false);
            //  this.alert=true;
            console.log('data edited', this.$store.state.cars);

        },
        // handleEditSubmit(){
        //   let data ={
        //     car_title:this.car_title,
        //     car_model:this.car_model,
        //     car_fuel_type:this.car_fuel_type,
        //     car_price:this.car_price,
        //     make_year:this.make_year,
        //     location:this.location,
        //     avg_km:this.avg_km,
        //     car_img:this.car_img.name,
        //     id:this.editcarpropdata.id,
        //   }

        //   console.log(data.car_img,'dddd');
        //     this.$store.dispatch("updateCars",data);
        //     this.dialog =false;
        //     this.$emit("close-event",false);

        // },
        // watch: {
        //   dialog(val) {
        //     val || this.close() || this.$emit("close-event", false);
        //   },
    },

    // },

}
</script>

<style scoped>

</style>
