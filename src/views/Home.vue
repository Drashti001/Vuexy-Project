<template>
<div>
    <car-modal modalId="addcar"></car-modal>
    <!-- :modeltitleProps="modalTitle" -->
    <car-edit-modal modalId="editcar" :editCarProps="editcardata"></car-edit-modal>
    <!--  -->

    <home-side-bar class="mr-1" @car-year-event="fetchYear($event)" @car-kms-event="fetchKms($event)" @car-fuel-event="fetchFuel($event)">
    </home-side-bar>

    <div>
        <b-row>
            <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.addcar variant="outline-primary">
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
            <b-card no-body class="grid-view-item">
                <b-card-body>
                    <b-card-title>{{ car.car_title }}</b-card-title>
                    <b-card-sub-title>{{ car.car_model }}</b-card-sub-title>
                </b-card-body>
                <div class="item-img text-center">
                    <b-link class="text-body" :to="{ name: 'car-details', params: { id:car.id} }">
                        <b-img :src="car.car_img" fluid class="grid-view-img " />
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

                <b-card-body>
                    <b-row>
                        <b-button class="ml-2" v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.editcar variant="outline-primary" @click="editCar(car)">
                            Edit Car
                        </b-button>

                        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" @click="confirmText(car.id)" class="ml-2">
                            Delete Car </b-button>

                    </b-row>
                </b-card-body>

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
    directives: {
        Ripple,
    },
    data() {
        return {
            //openModal:false,
            cars: [],
            carsDuplicate: [],
            carsData: [],
            search: '',
            editcardata: [],
            modalTitle: '',
            editedIndex: -1,
            editedCar: {
                car_title: '',
                car_model: '',
                car_fuel_type: '',
                car_price: '',
                make_year: '',
                location: '',
                avg_km: '',
                car_img: '',
                car_desc: ''
            },
            dialogDelete: false,
            boxTwo: ''
            // editedCar:{

            // },
            // defaultItem:{

            // }
        };
    },
    created() {
        //alert('created called');
        this.$store.dispatch("getCars");
        console.log(this.$store.state.cars, 'data get');
        this.cars = this.$store.state.cars;
        this.carsDuplicate = this.$store.state.cars;
    },
    computed: {
        filteredCar: function () {

            return this.cars.cars.filter((item) => {
                let data = this.search;
                console.log(data, 'data')
                return ((item.car_title).toUpperCase()).indexOf(data.toUpperCase()) !== -1;
                // return item.car_title.match(this.search);

            });

        }

    },
    methods: {

        confirmText(id) {
           // alert(id)
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        this.$store.dispatch("deleteCars",id);
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
            alert('dsds');
            //   this.swal({
            //     title: 'Are you sure?',
            //     text: "You won't be able to revert this!",
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonText: 'Yes, delete it!',
            //     customClass: {
            //       confirmButton: 'btn btn-primary',
            //       cancelButton: 'btn btn-outline-danger ml-1',
            //     },
            //     buttonsStyling: false,
            //   }).then(result => {
            //     if (result.value) {
            //       this.$swal({
            //         icon: 'success',
            //         title: 'Deleted!',
            //         text: 'Your file has been deleted.',
            //         customClass: {
            //           confirmButton: 'btn btn-success',
            //         },
            //       })
            //     }
            //   })
        },
        // closeModel(value) {
        //   this.opneModel = value;
        // },
        // openModel() {

        // },
        editCar(car) {
            //alert('sassa');
            console.log(car, 'car');
            // this.openModal = !this.openModal;
            this.editcardata = car;
            // this.modalTitle = "Edit";
        },
        deleteCar(car) {
            // alert('rerere');
            // console.log(car,'delete');
            this.editedIndex = this.cars.cars.indexOf(car);
            //console.log(this.editedIndex, 'delete called');
            this.editedCar = Object.assign({}, car);
            console.log(this.editedCar, 'get specific index data');
            this.dialogDelete = true;

        },
        // },
        // addCars(){
        //     alert('dsd');
        //     this.opneModel = !this.opneModel;
        //   //this.modalTitle = "Add Car Details";
        //     this.editcardata = [];
        // },

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
            console.log(value.length, 'length');
            //console.log(this.carsDuplicate,'fdfd');
            if (value && value.length) {

                value.forEach(async (element) => {

                    console.log(element, 'element');
                    let res = await axios.get(`http://localhost:3000/cars?car_fuel_type=${element}`

                    );

                    console.log(res, 'res')
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
            } else {

                // this.cars.cars = res.data;
            }

        }

    },

};
</script>

<style lang="scss">
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 25px 0px rgba(0, 0, 0, .50);

        .grid-view-img {
            opacity: 0.9;
        }
    }
}
</style>
