<template>
<div>
    <car-modal modalId="addcar"></car-modal>
    <!-- :modeltitleProps="modalTitle" -->
    <car-edit-modal modalId="editcar" :editCarProps="editcardata"></car-edit-modal>
    <!--  -->

    <home-side-bar class="mr-1" 
      @car-year-event="fetchYear($event)" 
      @car-kms-event="fetchKms($event)" 
      @car-fuel-event="fetchFuel($event)">
    </home-side-bar>

    <div>
        <b-row>
          <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.addcar  variant="outline-primary">
            Add Car
         </b-button>
         <!-- <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.addcar variant="outline-primary">
            Edit Car
         </b-button> -->
        
            <b-col>
             
                <b-input-group>

                    <b-form-input placeholder="Search By Car Name" v-model="search" />
                    <b-input-group-append is-text>
                        <feather-icon icon="SearchIcon" class="text-muted" />
                    </b-input-group-append>

                </b-input-group>
            </b-col>
        </b-row>

        <!-- <input v-model="search"/> -->
        <!-- <div  v-for="(car,index) in filteredCar" :key="index">
        {{ car.car_title }}
      </div> -->
    </div>

    <b-row class="mt-1">
       

        <b-col md="6" lg="4" v-for="car in this.search?filteredCar:(cars.cars = cars.cars ? cars.cars : cars)" :key="car.car_title">
            <!-- <b-col md="6" lg="4" v-for="car in (cars.cars = cars.cars ? cars.cars : cars)" :key="car.car_title"> -->
            <!-- {{ car }} -->
            <b-card no-body>
                <b-card-body>
                    <b-card-title>{{ car.car_title }}</b-card-title>
                    <b-card-sub-title>{{ car.car_model }}</b-card-sub-title>
                </b-card-body>
                <div class="item-img text-center">
                    <b-link class="text-body" :to="{ name: 'car-details', params: { id:car.id} }">
                        <b-img :src="car.car_img" fluid />
                    </b-link>
                </div>
    
                <b-card-body>
                    <b-card-text>₹ {{ new Intl.NumberFormat("en-IN").format(car.car_price) }}
                    </b-card-text>

                    <div class="d-flex">
                        <b-card-text>{{ car.car_fuel_type }} </b-card-text>

                        <b-card-text class="ml-2">{{ new Intl.NumberFormat("en-IN").format(car.avg_km) }} km
                        </b-card-text>
                    </div>
                    <b-card-text>
                        <feather-icon icon="MapPinIcon" /> {{ car.location }}
                    </b-card-text>
                </b-card-body>
                 <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.editcar variant="outline-primary"  @click="editCar(car)">
                    Edit Car
                 </b-button>

            </b-card>
        </b-col>
    </b-row>
</div>
</template>

<script>
import HomeSideBar from "@/components/HomeSideBar.vue";
import CarModal from "@/components/CarModal.vue";
import CarEditModal from "@/components/CarEditModal.vue";

import axios from "axios";
//import SideBar from './SideBar.vue'
import {
    BCard,
    BCardText,
    BButton,
    BRow,
    BCol,
    BImg,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BLink
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";

export default {
    components: {
        BCard,
        BCardText,
        BLink,
        BButton,
        CarModal,
        BRow,
        BCol,
        BImg,
        BCardBody,
        BCardTitle,
        BCardSubTitle,
        FeatherIcon,
        HomeSideBar,
        CarEditModal,
        BInputGroup,
        BFormInput,
        BInputGroupAppend
    },
    data() {
        return {
            //openModal:false,
            cars: [],
            carsDuplicate:[],
            carsData: [],
            search: '',
            editcardata: [],
            modalTitle:'',
            // editedCar:{

            // },
            // defaultItem:{

            // }
        };
    },
    created() {
        //alert('created called');
        this.$store.dispatch("getCars");
        console.log(this.$store.state.cars,'data get');
        this.cars = this.$store.state.cars;
        this.carsDuplicate =this.$store.state.cars;
    },
    computed: {
        filteredCar: function () {

            return this.cars.cars.filter((item) => {
                let data = this.search;
                console.log(data,'data')
                return ((item.car_title).toUpperCase()).indexOf(data.toUpperCase()) !== -1;
                // return item.car_title.match(this.search);

            });
            

        }

    },
    methods: {
        // closeModel(value) {
        //   this.opneModel = value;
        // },
        // openModel() {
         
        // },
        editCar(car){
            alert('sassa');
            console.log(car,'car');
            // this.openModal = !this.openModal;
            this.editcardata = car;
            // this.modalTitle = "Edit";
        },
        // },
        addCars(){
            alert('dsd');
            this.opneModel = !this.opneModel;
          //this.modalTitle = "Add Car Details";
            this.editcardata = [];
        },

        //fetching data from homesidebar component for specific car manufacturer data
        async fetchYear(value) {
            //alert(value);
            let response = await axios.get(
                `http://localhost:3000/cars?make_year=${value}`
            );
            this.cars = response.data;
            console.log(this.cars, "getting car manufacturer year");
        },
        //fetching data from homesidebar component for specific car kilometers
        async fetchKms(value) {
            //alert(value);
            let response = await axios.get(
                `http://localhost:3000/cars?avg_km=${value}`
            );
            if (response.data) this.cars = response.data;
            //console.log(this.cars, "get kms");
        },
        //fetching fuel type data from homesidebar component
        fetchFuel(value) {
            let data = [];
            console.log(value.length,'length');
            //console.log(this.carsDuplicate,'fdfd');
            if(value && value.length){
               
            value.forEach(async (element) => {

            console.log(element,'element');
                let res = await axios.get(`http://localhost:3000/cars?car_fuel_type=${element}`

                );

                console.log(res,'res')
                if (res && res.data && res.data.length) {
                    (res.data).forEach(element => {
                        data.push(element)
                    });
                    this.cars.cars = data;
                } else {
                    this.cars.cars = res.data;
                }

                //console.log(this.carsData, 'cars data');
            });
             }
            else{
              
            // this.cars.cars = res.data;
            }


        }

    },

    directives: {
        Ripple,
    },

};
</script>

<style scoped>
b-card {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
}
</style>
