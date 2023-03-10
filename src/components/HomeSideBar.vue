<template>
    <div class=" sidebar-left">
      <div class="sidebar">
       
          <b-row>
            <b-col cols="12">
              <h6 class="filter-heading d-none d-lg-block">
                Filters
              </h6>
            </b-col>
          </b-row>
  
          <!-- Filters' Card -->
          
          
          
          <b-card style="height:100vh">
            

  
            <!-- Price Slider -->
            <!-- <div class="price-slider">
              <h6 class="filter-title mt-0">
                Price Range
              </h6> 
            <vue-slider
               class="mt-2"
               min=50000
               max=2000000
                v-model="priceRange"
                :direction="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              />
            </div>
            <span></span> -->

            <!-- Year -->
            <div  class="mt-4">
              <h6 class="filter-title">
                Year
              </h6>
              <b-form-radio-group
                v-model="car_year"
                @change="fetchYear(years)"
                class="year-radio-group mt-2"
                stacked
                :options="years"
              />{{ car_year }}
            </div> 

            <!-- Fuel Type -->
            <div  class="mt-4">
              <h6 class="filter-title">
                Fuel Type
              </h6>
              <b-form-group >

                <div class="mt-2">
                <b-form-checkbox
                  checked
                  v-for="option in options"
                  :key="option.value"
                  v-model="selectedFuleType"
                  @change="fetchFuel($event)"
                  class="mb-1"
                  :value="option.value">
                 
                  {{ option.text }}
                </b-form-checkbox>
              </div>
              </b-form-group>
     
              {{ selectedFuleType }}
            </div> 
            <!-- Kms Driven -->
            <div  class="mt-4">
              <h6 class="filter-title">
               Kms Driven
              </h6>
              <b-form-radio-group
                v-model="car_kms"
                class="year-radio-group mt-2"
                stacked
                @change="fetchKiloMeters(kilometers)"
                :options="kilometers"

              />{{ car_kms }}
            </div> 
            <div>
              <b-form-checkbox
              checked="true">

              </b-form-checkbox>
            </div>
            
          </b-card>
        </div>
      </div>

  </template>
  
  <script>
  import {
    BRow, BCol, BCard, BFormRadioGroup, BLink,BFormCheckbox,BFormCheckboxGroup,BFormGroup
  } from 'bootstrap-vue'
  import VueSlider from 'vue-slider-component'
import axios from 'axios'
  
  export default {
    data(){
        return{
          range:[10,100],
          selectedFuleType:[],
            checked:true,
            car_year:'',
            car_kms:'',
            cars:[],
            priceRange:[50000,2000000],
            years:[
              2022,
              2020,
              2018,
              2016,
              2014,
            ],
            options:[
                { text: 'Petrol', value: 'Petrol' },
                { text: 'Diesel', value: 'Diesel' },
                { text: 'CNG', value: 'CNG' }],
            kilometers:[
              
                10000,
                30000,
                50000,
                75000,
                100000
              
            ],
            models:'',
        }
    },
    
    components: {
      BRow,
      BCol,
      BFormRadioGroup,
      BLink,
      BCard,
      BFormCheckbox,
      BFormCheckboxGroup,
      BFormGroup,
  
      // 3rd Party
      VueSlider,
    },
    created(){
        this.$store.dispatch('getCars');
        this.cars = this.$store.state.cars;
        console.log(this.cars);

    },
    methods:{
      fetchYear(){
        this.$emit('car-year-event',this.car_year);

      },
      fetchKiloMeters(){
        
       
        console.log(this.car_kms,'kilometers');
        this.$emit('car-kms-event',this.car_kms);
       
      },
      fetchFuel(event){
          this.$emit('car-fuel-event',event);


        //console.log(event.target.checked,'event 2');
        //console.log("selectedFuleType", this.selectedFuleType)
        //alert('tttt');
        //  let result = ""
        // console.log(event.target.value,'value getting');
        // result= event.target.value;

       
          // if(this.selectedFuleType && this.selectedFuleType.length)
          // {
          //   this.$emit('car-fuel-event',this.selectedFuleType);
          // }
        
        
          // this.cars.push(response.data);
      }
    }
     
   
  }
  </script>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-slider.scss';
  </style>
  
  <style lang="scss" scoped>
  .categories-radio-group,
  .year-radio-group,
  .price-range-defined-radio-group {
      ::v-deep > .custom-control {
      margin-bottom: 0.75rem;
    }
  }
  </style>
  