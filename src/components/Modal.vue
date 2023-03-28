<template>
<div>
    <b-row>
    <b-modal :id="modalId" ref="my-modal" hide-footer :title="title? 'Add Car' : 'Edit Car'">
       
        <div>
            <validation-observer ref="simpleRules">
                        
                    <!-- car Id input -->

                    <b-col class="mb-1">
                        <b-form-group 
                            label="Enter CarId" 
                            label-for="car_price" >

                            <validation-provider 
                                #default="{ errors }" 
                                rules="required|integer" 
                                name="CarId">
                            <b-form-input 
                                id="name-input" 
                                :state="errors.length > 0 ? false:null" 
                                v-model="carId" 
                                required />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- car name input -->

                    <b-col class="mb-1">
                 
                    <b-form-group 
                            label="Enter Car Name" 
                            label-for="car_title">
                     
                            <validation-provider
                                #default="{ errors }"
                                rules="required"
                                name="Car Name">
                            <b-form-input 
                                id="name-input" 
                                v-model="car_title" 
                                :state="errors.length > 0 ? false: null"
                                required /> 
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                    </b-form-group>

                    </b-col>

                    <!--car model name input  -->

                    <b-col class="mb-1">

                        <b-form-group 
                            label="Enter Car Model" 
                            label-for="car_model" 
                           >

                            <validation-provider 
                                #default="{ errors }" 
                                rules="required" 
                                name="Car Model">
                            <b-form-input 
                                id="name-input" 
                                v-model="car_model" 
                                required />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- car fuel type input -->

                    <b-col class="mb-1">
                        <b-form-group 
                            label="Enter Car Fuel Type" 
                            label-for="car_fuel_type" 
                            >

                            <validation-provider 
                                #default="{ errors }" 
                                rules="required" 
                                name="Car Model">
                                <!-- {{ selected }} -->
                            <b-form-select 
                                v-model="selected" 
                                :options="options" />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    
                    <!-- car price input -->
                    <b-col class="mb-1">
                        <b-form-group 
                            label="Enter Car Price" 
                            label-for="car_price" 
                        >

                        <validation-provider
                            #default="{ errors }"
                            rules="required|integer"
                            name="Price"
                        >
                        <b-form-input
                            id="name-input" 
                            :state="errors.length > 0 ? false:null"
                            v-model="car_price"
                            required
                    />
                        <small class="text-danger">{{ errors[0] }}</small>
                         </validation-provider>
                        </b-form-group>
                    </b-col>

                       <!-- Car Manufacturer Year input -->
                    <b-col class="mb-1">
                         <b-form-group 
                            label="Enter Car Manufacturer Year" 
                            label-for="make_year" 
                         >
     
                          <validation-provider
                             #default="{ errors }"
                             rules="required|integer"
                             name="Manufacture Year"
                         >
                         <b-form-input
                            id="name-input" 
                            v-model="make_year"
                            required
                         /><small class="text-danger">{{ errors[0] }}</small>
                         </validation-provider>
                         </b-form-group>
                         </b-col>

                          <!-- car location input -->
                    <b-col>
     
                    <b-form-group 
                        label="Enter Car Location" 
                        label-for="location" 
                        >
                      
                    <validation-provider
                        #default="{ errors }"
                        rules="required"
                        name="Location"
                  >
                    <b-form-input
                        lazy-formatterid="name-input" 
                        v-model="location"
                        required
                     /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                     </b-form-group>
                     
                    </b-col>

                       <!-- car kilometer input -->
                    <b-col
                    
                    >
                    <b-form-group 
                     label="Enter Car Average Km" 
                     label-for="avg_km" 
                     >

                     <validation-provider
                        #default="{ errors }"
                        rules="required|integer"
                        name="Average Kilometer"
                    >
                    <b-form-input
                        id="name-input" 
                        v-model="avg_km"
                        required
                    /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                    </b-form-group>
                    </b-col>

                    <!-- Car singal Image Input -->
                    <b-col>
                        <b-form-group
                          label="Choose Car Image"
                          label-for="car_img"
                        >
                      
                          <b-form-file
                            id="extension"
                            accept=".jpg, .png, .gif, .jpeg"
                            v-model="car_img"
                            :src="car_img"
                            @change="handleImage"
                          />
                          <b-img :src="car_img" fluid rounded/>
                          
                        </b-form-group>
                      
                    
                    </b-col>

                    <!-- Car multiple Image Input -->
                    <b-col>
                        <b-form-group
                            label="Choose Car Multiple Images"
                            label-for="images" 
                        >
                            <b-form-file
                              id="multipleimages"
                              accept=".jpg, .png, .gif, .jpeg"
                              v-model="images"
                              :src="images"
                              multiple 
                              @change="handleMultipleImage"
                              />
                             <div v-for="(image , index) in files" :key="index"> 
                              <b-img :src="image" fluid rounded/>
                             </div>
                            </b-form-group>
      
                    </b-col>

                    <!-- car Description input -->
                    <b-col
                    >
     
                     <b-form-group 
                        label="Enter Car Description" 
                        label-for="location" 
                      >
                      
                      <validation-provider
                        #default="{ errors }"
                        rules="required|"
                        name="Car Description"
                  >
                     <b-form-input
                        lazy-formatterid="name-input" 
                        v-model="car_desc"
                        required
                     /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
                     </b-form-group>
                     </b-col>

        </validation-observer>

        </div>
        <div class="float-right">
            <b-button variant="primary" @click="hideModal">Close Me</b-button>
            <b-button class="ml-2" variant="primary" @click="value? handleAddCar() : handleEditCar()">{{ value ? 'Add Car' : 'Edit Car' }}</b-button>
        </div>
    </b-modal>
</b-row>
</div>
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
    BCol,
    BImg,

} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
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
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    props: {
        modalId: String,
        modeltitleProps: String,
        title: Boolean,
        editCarProps: [String, Array, Object],
        value: Boolean

    },
    watch: {
        editCarProps(val) {
            if (val) {
                   console.log(val, 'ghfghffhgjh');
                   this.id=this.editCarProps.id,
                    this.car_title = this.editCarProps.car_title
                    this.car_model = this.editCarProps.car_model,
                    this.car_fuel_type = this.editCarProps.selected,
                    this.car_price = this.editCarProps.car_price,
                    this.make_year = this.editCarProps.make_year,
                    this.location = this.editCarProps.location,
                    this.avg_km = this.editCarProps.avg_km,
                    this.car_img = this.editCarProps.car_img,
                    this.car_desc = this.editCarProps.car_desc,
                    this.images = this.editCarProps.images,
                    this.carId = this.editCarProps.carId

            } else {
                    this.car_title = null,
                    this.car_model = '',
                    this.car_fuel_type = '',
                    this.car_price = null,
                    this.make_year = null,
                    this.location = '',
                    this.car_img = [],
                    this.car_desc = '',
                    this.avg_km = null,
                    this.carId = '',
                    this.images = []

            }
            
        }
    },
    data() {
        return {
            required,
            alpha,
            integer,
            min,
            digits,
            length,
            product: null,
            car_title: '',
            car_model: '',
            car_fuel_type: '',
            car_price: null,
            make_year: null,
            location: '',
            car_desc: '',
            avg_km: null,
            carId: '',
            car_img:null,
            images: [],
            files: [],
            img: false,
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

            ],
           
        }
    },
    components: {
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
        BCol,
        BImg,
        ValidationProvider,
        ValidationObserver,

    },

    methods: {
        
          /***** single image input *****/

        handleImage(e){
           
            const selectedImage = e.target.files[0];
            this.createBase64Image(selectedImage);
           
        },
        createBase64Image(fileObject){
            const reader = new FileReader();
            reader.onload = (e) =>{
              this.car_img = e.target.result;
            };
            reader.readAsDataURL(fileObject);
           
        },

            /*****  multiple image input *****/
        createBase64Image1(fileObject){

            const reader = new FileReader();
            reader.onload = (e) => {
              this.files.push(e.target.result);
            };
              reader.readAsDataURL(fileObject); 
              
        },


        handleMultipleImage(e){
                
            const multipleImages = e.target.files;
            this.images=[];
            for(let i=0 ;i < multipleImages.length ; i++ ){
                this.createBase64Image1(multipleImages[i]);
            }
                   
        },



        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        handleAddCar() {
           // alert('add');
            let data = {
                carId: Number(this.carId),
                car_title: this.car_title,
                car_model:this.car_model,
                car_fuel_type:this.selected,
                car_price:Number(this.car_price),
                make_year:Number(this.make_year),
                location:this.location,
                avg_km:Number(this.avg_km),
                car_img:this.car_img,
                images:this.files,
                car_desc:this.car_desc
            }

            this.$store.dispatch("addCars", data);
            this.makeToast('success');
            this.hideModal();
            this.$emit('reloadList');

        },

        makeToast(variant = null) {
            if(this.value == true){
            this.$bvToast.toast('you Successfully added car details', {
                title: `Added ${variant || 'default'}`,
                variant,
                solid: false,
            })}
            else{
                this.$bvToast.toast('you Successfully edited car details', {
                title: `Edited ${variant || 'default'}`,
                variant,
                solid: false,
            })
            }
          
        },
        handleEditCar() {
          
            var cardata = {
                id: this.id,
                car_title: this.car_title,
                carId: Number(this.carId),
                car_model:this.car_model,
                car_fuel_type:this.selected,
                car_price:Number(this.car_price),
                make_year:Number(this.make_year),
                location:this.location,
                avg_km:Number(this.avg_km),
                car_img:this.car_img,
                images:this.files,
                car_desc:this.car_desc
                

            }
          
            this.$store.dispatch("updateCars", cardata);
            this.hideModal();
            this.makeToast('success');
            this.$emit('reloadList');
        }
    }
}
</script>

<style scoped>

</style>
