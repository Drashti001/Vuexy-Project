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
          
          
          <!-- {{ cars.cars }} -->
          <b-card style="height:200vh">
            

  
            <!-- Price Slider -->
            <div class="price-slider">
              <h6 class="filter-title mt-0">
                Price Range
              </h6> 
              
          
              <vue-slider v-model="sliderValue" :min="minPrice" :max="maxPrice" :interval="50000"></vue-slider>
              <!-- {{ minPrice }}
              {{ maxPrice }} -->
              <!-- <b-form-input type="number" v-model="minPrice" placeholder="Min Price"></b-form-input>
              <b-form-input type="number" v-model="maxPrice" placeholder="Max Price"></b-form-input> -->
             
              
            <!-- <vue-slider
               class="mt-2"
               :min="min"
               :max="max"
          
                v-model="priceRange"
                :direction="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              /> -->
              <div v-for="car in filteredCars" :key="car" >
                <!-- <h3>{{ car.car_title }}</h3>
                <p>{{ car.car_price }}</p> -->
              </div>
            </div>
            <span></span>

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
              />
              {{ car_year }}
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
     
              <!-- {{ selectedFuleType }} -->
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

              />
              <!-- {{ car_kms }} -->
            </div> 
            <!-- <div>
              <b-form-checkbox
              checked="true">

              </b-form-checkbox>
            </div> -->
            
          </b-card>
        </div>
      </div>

  </template>
  
  <script>
  import {
    BSlider,BFormInput,BRow, BCol, BCard, BFormRadioGroup, BLink,BFormCheckbox,BFormCheckboxGroup,BFormGroup
  } from 'bootstrap-vue'
  import VueSlider from 'vue-slider-component'

  
  export default {
    data(){
        return{
          range:[10,100],
          selectedFuleType:[],
            checked:true,
            car_year:'',
            car_kms:'',
            cars:[],
            min:50000,
            max:2000000,
            minPrice:50000,
            maxPrice:2000000,
            sliderValue:[50000,20000000],
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
      BSlider,BFormInput,
      // 3rd Party
      VueSlider,
    },
    created(){
        this.$store.dispatch('getCars');
        this.cars = this.$store.state.cars;
        console.log(this.cars.cars,'cars');

    },
    watch:{
      minPrice:function(val){
        this.sliderValue[0] = val
      },
      maxPrice:function(val){
        this.sliderValue[1] = val
      },
      sliderValue: function (val) {
      console.log(this.sliderValue,'slidervalue')
      this.minPrice = val[0]
      this.maxPrice = val[1]
      this.fetchPrice();
      
      }
      }
      
    ,
    computed:{
      filteredCars() {
     
       // alert('ee')
       // console.log(this.minPrice,'price');
        return (this.cars.cars).filter(cars => {
          return cars.car_price >= this.sliderValue[0] && cars.car_price <= this.sliderValue[1]
      })
    }
    },
    methods:{
      fetchPrice(){
        console.log(this.filteredCars,'filter')
        this.$emit('car-range-event',this.filteredCars);
      },
      fetchYear(){
        this.$emit('car-year-event',this.car_year);

      },
      fetchKiloMeters(){
        
       
        console.log(this.car_kms,'kilometers');
        this.$emit('car-kms-event',this.car_kms);
       
      },
      fetchFuel(event){
        console.log(event);
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
  