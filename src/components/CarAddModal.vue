<template>
    <div>
            
            <b-row>
            <b-modal 
                :id="modalId" 
                ref="my-modal" 
                title="Add Data"
                ok-title="Submit"
                @ok="handleAddSubmit"
               
               >
               
             
                <validation-observer ref="simpleRules">
                  <!-- car details form -->
                <form ref="form" @submit="handleAddSubmit"  >

                  <b-col
                   
                  class="mb-1"
                >
                  <b-form-group 
                    label="Enter CarId" 
                    label-for="car_price" 
                    invalid-feedback="price is required">

                    <validation-provider
                      #default="{ errors }"
                      rules="required|integer"
                      name="Number"
                  >
                  <b-form-input
                    id="name-input" 
                    :state="errors.length > 0 ? false:null"
                    v-model="carId"
                    required
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                  </b-form-group>
                  </b-col>
               
                  <!-- car name input -->
                <b-col
                  
                  class="mb-1">
                 
                    <b-form-group 
                      label="Enter Car Name" 
                      label-for="car_title"
                      >
                     
                      <validation-provider
                        #default="{ errors }"
                        rules="required"
                        name="Car Name"
                      >
                    <b-form-input 
                      id="name-input" 
                      v-model="car_title" 
                      :state="errors.length > 0 ? false: null"
                      required /> 
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>

                  </b-col>
                      <!-- car model input -->
                  <b-col
                     
                     class="mb-1">
                    <b-form-group 
                      label="Enter Car Model" 
                      label-for="car_model" 
                      invalid-feedback="Model Name is required">

                      <validation-provider
                      #default="{ errors }"
                      rules="required"
                      name="Car Model"
                    >
                    <b-form-input 
                      id="name-input" 
                      v-model="car_model" 
                      required />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    </b-col>
                     <!-- car fuel type input -->
                    <b-col
                     
                      class="mb-1">
                    <b-form-group 
                      label="Enter Car Fuel Type" 
                      label-for="car_fuel_type" 
                      invalid-feedback="Name is required">

                      <validation-provider
                      #default="{ errors }"
                      rules="required"
                      name="Car Model"
                    >
                    <!-- {{ selected }} -->
                    <b-form-select 
                      v-model="selected" 
                      :options="options" />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                     <!-- car price input -->
                    <b-col
                   
                    class="mb-1"
                  >
                    <b-form-group 
                      label="Enter Car Price" 
                      label-for="car_price" 
                      invalid-feedback="price is required">

                      <validation-provider
                        #default="{ errors }"
                        rules="required|integer"
                        name="Number"
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

                     <!-- car manufacturer input -->
                    <b-col
                   
                  >
                    <b-form-group 
                     label="Enter Car Manufacturer Year" 
                     label-for="make_year" 
                     invalid-feedback="Year is required">

                     <validation-provider
                        #default="{ errors }"
                        rules="required|integer"
                        name="Number"
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
                    <b-col
                   >
    
                    <b-form-group 
                     label="Enter Car Location" 
                     label-for="location" 
                     invalid-feedback="Year is required">
                     
                     <validation-provider
                     #default="{ errors }"
                     rules="required|integer"
                     name="Number"
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
                     invalid-feedback="Year is required">

                     <validation-provider
                     #default="{ errors }"
                     rules="required|integer"
                     name="Number"
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
                      invalid-feedback="Image is required"
                    
                    >
                  
                      <b-form-file
                      id="extension"
                      accept=".jpg, .png, .gif, .jpeg"
                      v-model="car_img"
                      :src="car_img"
                      @change="handleImage"
                      />
                      <b-img :src="car_img" fluid />
                      
                    </b-form-group>
                  
                
                    </b-col>
                       <!-- Car singal Image Input Close-->

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
                        <b-img :src="image" fluid thumbnail/>
                       </div>
                      </b-form-group>

                    </b-col>
                         <!-- Car multiple Image Input Close-->

                    <b-col
                    >
     
                     <b-form-group 
                      label="Enter Car Description" 
                      label-for="location" 
                      invalid-feedback="Description is required">
                      
                      <validation-provider
                      #default="{ errors }"
                      rules="required|"
                      name="description"
                  >
                     <b-form-input
                      lazy-formatterid="name-input" 
                      v-model="car_desc"
                      required
                     /><small class="text-danger">{{ errors[0] }}</small></validation-provider>
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
    
    
    
               
                </form>
              </validation-observer>
               
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
    import BCardCode from '@core/components/b-card-code'
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import {
  required ,alpha, integer, min, digits, length,
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
            BCol,
            BImg,
          
    
          
           
        },
        props:{
          modalId:String,
          modeltitleProps: String,
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
                    dialog:true,
                    required,
                    alpha, 
                    integer, 
                    min, 
                    digits, 
                    length,
                    alert:false,
                    car_title:'',
                    car_model:'',
                    car_fuel_type:'',
                    car_price:null,
                    make_year:null,
                    location:'',
                    car_desc:'',
                    avg_km:null,
                    carId:'',
                    images:[],
                    files:[],
                    img:false,
                    // car_title:this.editcarpropdata.car_title,
                    // car_model:this.editcarpropdata.car_model,
                    // car_fuel_type:this.editcarpropdata.car_fuel_type,
                    // car_price:this.editcarpropdata.car_price,
                    // make_year:this.editcarpropdata.make_year,
                    // location:this.editcarpropdata.location,
                    // avg_km:this.editcarpropdata.avg_km,
                    car_img:[],
                    selectedImage:null,
                    //multipleImages:null,
                    
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
                    formTitle: this.modeltitleProps,
            }
        },
        
        methods:{

          /*** single image input ***/
          handleImage(e){
            console.log(e,'e');
            const selectedImage = e.target.files[0];
            this.createBase64Image(selectedImage);
            console.log(selectedImage,'images');
          },
          createBase64Image(fileObject){
            const reader = new FileReader();
            reader.onload = (e) =>{
              this.car_img = e.target.result;
            };
            reader.readAsDataURL(fileObject);
            //reader.readAsBinaryString(fileObject);
            console.log(this.car_img,'car image');
          },




          /*****  multiple image input *****/


          createBase64Image1(fileObject){

            const reader = new FileReader();
            console.log(reader);
                 reader.onload = (e) => {
                  console.log(e.target.result,'hsjkhfjksdhfjkdsfhjkdshfjsfhkjshfjks')
                  this.files.push(e.target.result);
                };
                reader.readAsDataURL(fileObject); 
                console.log(this.files,'images');
          },


          handleMultipleImage(e){
            //console.log(this.$refs.images.files[0],'d');
            console.log(e.target.files);
            console.log(e.target.files,'dsds');
            const multipleImages = e.target.files;

            this.images=[];

            for(let i=0 ;i < multipleImages.length ; i++ ){
             console.log('fetch files',e.target.files[i])
                //multipleImages.push(e.target.files[i]);
                this.createBase64Image1(multipleImages[i]);
           }
             //this.createBase64MultipleImage(multipleImages);
            // console.log(this.images,'multiple images');

          },
        
          makeToast(variant = null) {
           this.$bvToast.toast('you Successfully added car details', {
           title: `Added ${variant || 'default'}`,
           variant,
           solid: false,
          })
           },

          handleAddSubmit(){
            console.log('handle submit call');
           
              //alert('hadle submit called');
              //console.log(this.car_img,'dsdsd');
             
              let data = {
                carId:Number(this.carId),
              car_title:this.car_title,
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
            
            console.log(data.images);
              this.$store.dispatch("addCars",data);
              this.makeToast('success');   
        
           
             
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
     
        
        
    }
    
    </script>
    
    <style scoped>
    
    </style>
    