<template>
  <div>
    <b-card no-body v-if="cars">
     
      <b-card-body>
        <b-row class="my-2" >
           <!-- Left: Product Image Container -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
            >
           <div class="d-flex align-items-center justify-content-center">
            <!-- getImage(cars.car_img) -->
            <b-img :src="`../../${cars.car_img}`" style="height:440px;width:510px"/>
           
          </div>
        </b-col>
        
            <!-- Right: Product Details -->
           <b-col
           cols="12"
           md="6"
        
          
          >
        
         
            <h4>{{ cars.car_model}}</h4> 
         
            <h4  style="color:blueviolet">by {{ cars.car_title }}</h4>
        
   
         <span></span> 
         
         
        <div class='d-flex'  style="color:blueviolet">
         <b-card-text>
          {{ new Intl.NumberFormat("en-IN").format(cars.avg_km) }} km
         </b-card-text>
         <b-card-text class="ml-2">
          {{ cars.car_fuel_type }}
         </b-card-text>
        </div>
        <b-card-text>{{ cars.car_desc }}</b-card-text>
      
          <div>
          <b-link>
        <b-card-text>
         
          <feather-icon icon="MapPinIcon" />&nbsp;&nbsp;{{ cars.location }}
        </b-card-text>
        </b-link>
      </div>
      <div>
        <span></span>
        <b-card-text  class="mt-2" style="color:silver">
          <feather-icon icon="MapHome" />&nbsp;&nbsp; Home Test Drive : 
          Available
        </b-card-text>
      </div>
      
     
      
        <div class="d-flex flex-wrap mt-1">
          <h4 class="mr-1" style="color:blueviolet">
            ₹ {{ new Intl.NumberFormat("en-IN").format(cars.car_price) }}
          </h4>
          
        </div>
        <div>
        <b-link :to="{name:'home'}"  >
        <b-button style="color:blue" class="mt-2">View All Cars</b-button>
        </b-link>
        </div>
         </b-col>
          </b-row>
      </b-card-body>
    </b-card>
   
    
  </div>
</template>

<script>

import {
  BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BButton, BDropdown, BDropdownItem, BAlert,
} from 'bootstrap-vue'
import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";

import Ripple from 'vue-ripple-directive'
import axios from 'axios'


export default {
  directives: {
    Ripple,
  },
  props:["id"],
  components: {
   
    BCard,
    BCardBody,
    BRow,
    BCol,
    BImg,
    BCardText,
    BLink,
    BButton,
    BDropdown,
    BDropdownItem,
    BAlert,
    FeatherIcon,
  },
  data(){
    return{
      cars:[],
      imgurl:null,
    }
  },
  async mounted() {

  try {
    const res = await axios.get(`http://localhost:3000/cars/`+this.$route.params.id);
    this.cars = res.data;
    
    console.log(this.cars,'edit');
  } catch (error) {
    console.log(error);
  }

  },
  

}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce-details.scss";
</style>



