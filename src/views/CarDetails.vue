<template>
  <div>
    <!-- id:{{ DataId}}
    car-id:{{ carFileId }}
   image: {{ img }} -->
<!--    
      <img
      v-for="(car,index) in cars.car_img"
      :src="getImgUrl(cars.car_i)"
      :key="x"
      
      /> -->



    
    <!-- {{ cars }} -->
    <b-card no-body v-if="cars">
     
      <b-card-body>
        <b-row class="my-2" >
           <!-- Left: Product Image Container -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
            >
           <div class="d-flex align-items-center justify-content-center w-100"   >
            
          
            <b-carousel
            id="carousel-example-generic"
            controls
            indicators
            class="w-100"
            style="height:420px;"
            >
          
             <b-carousel-slide style="height:500px" class="customCars" v-for="i in img" :key="i.id"  :img-src="require(`../../public/${i}`)" />
          </b-carousel>
            <!-- getImage(cars.car_img) -->
          <!-- <b-img :src="`../../${cars.car_img}`" />
            -->
          </div>
        </b-col>
        
            <!-- Right: Product Details -->
           <b-col
           cols="12"
           sm="6"
        
          
          >
      <!-- {{ cars.images }} -->
         
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
  BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BButton, BDropdown, BDropdownItem, BAlert,BCarousel, BCarouselSlide
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
    BCarousel, BCarouselSlide
  },
  data(){
    return{
      
      cars:[],
      getCarInfo:this.cars,
      DataId:this.$route.params.id,
      carFileId : this.$route.params.carId,
      imgurl:null,
    }
  },

  methods:{
  },
  async mounted() {

  try {
    //console.log(this.$route,params.id,'id');
    //console.log(this.$route.params.id,'carId');
    //console.log(this.$route.params.carId,'carId2');
    const res = await axios.get(`http://localhost:3000/cars/`+this.$route.params.id);

    //console.log(this.$route.params.id,'carId');
    this.cars = res.data;
    if(this.cars.carId == this.carFileId){
      this.img = this.cars.images;
    }
    console.log(this.img,'image');
    console.log(this.cars,'edit');
  } catch (error) {
    console.log(error);
  }

  },
  

}
</script>

<style lang="scss">
.customCars{
  .img-fluid{
    height: 400px;
  }
}
@media only screen and (max-width: 600px) {
  .customCars{
    .img-fluid{
      height: 300px;
    }
  }
}
</style>



