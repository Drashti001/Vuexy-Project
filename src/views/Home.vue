<template>
<div>
    <car-add-modal modalId="addcar"></car-add-modal>
    <!-- :modeltitleProps="modalTitle" -->
    <car-edit-modal modalId="editcar" :editCarProps="editcardata"></car-edit-modal>

    <home-side-bar class="mr-1" @car-year-event="fetchYear($event)" @car-kms-event="fetchKms($event)" @car-fuel-event="fetchFuel($event)">
    </home-side-bar>

    <div>
        <b-row>
            <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-modal.addcar variant="outline-primary" v-b-tooltip.hover.v-primary title="Open Add Car Modal">
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

    </div>

    <b-row class="mt-1" id="my-card">

        <b-col md="6" lg="4" v-for="car in this.search?filteredCar:(cars.cars = cars.cars ? cars.cars : cars)" :key="car.car_title" >
            <!-- <b-col md="6" lg="4" v-for="car in (cars.cars = cars.cars ? cars.cars : cars)" :key="car.car_title"> -->
            <!-- {{ car }} -->
            <b-card no-body class="grid-view-item" style="height:500.28px;"  :per-page="perPage" :current-page="currentPage">
                <b-card-body>
                    <b-card-title>{{ car.car_title }}</b-card-title>
                    <b-card-sub-title>{{ car.car_model }}</b-card-sub-title>
                </b-card-body>
                <!-- {{ car.car_img }} -->
                <div class="item-img text-center">
                    <b-link class="text-body" :to="{ name: 'car-details', params: { id:car.id, carId:car.carId} }">
                        <b-img :src="car.car_img" fluid class="grid-view-img mb-2 " style=" height:227px; width:400px;" />
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
                    <b-link>
                        <b-card-text @click="openGoogleMap(item)">
                            <feather-icon icon="MapPinIcon" /> {{ car.location }}
                        </b-card-text>
                    </b-link>
                </b-card-body>

                <b-card-body>
                    <b-row>
                        <b-button class="ml-2" v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-tooltip.hover.v-primary title="Open Edit Car Modal" v-b-modal.editcar variant="outline-primary" @click="editCar(car)">
                            Edit Car
                        </b-button>

                        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-b-tooltip.hover.v-primary title="Delete Car" @click="confirmText(car.id)" class="ml-2">
                            Delete Car </b-button>

                    </b-row>
                    <b-button @click="deleteData(car.id)">Delete</b-button>
                </b-card-body>

            </b-card>
        </b-col>


      
    </b-row>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-card"
    ></b-pagination>{{ currentPage }}
    <!-- <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router ></b-pagination-nav> -->
  
</div>
</template>

<script>
import HomeSideBar from "@/components/HomeSideBar.vue";
import CarAddModal from "@/components/CarAddModal.vue";
import CarEditModal from "@/components/CarEditModal.vue";
import BCardCode from "@/@core/components/b-card-code";
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
    BPagination,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BLink,
    VBTooltip,
    BFormRadio,
    BFormRadioGroup,
    BNavItemDropdown,
    BDropdownItem,
    BPaginationNav
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";
import swal from 'sweetalert';
export default {
    components: {
        BCard,
        BCardText,
        BLink,
        BButton,
        CarAddModal,
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
        BInputGroupAppend,
        BPagination,
        VBTooltip,
        BCardCode,
        BFormRadio,
        BFormRadioGroup,
        BNavItemDropdown,
        BDropdownItem,
        BPaginationNav

    },
    directives: {
        Ripple,
        'b-tooltip': VBTooltip,
    },
    setup() {
        /* eslint-disable global-require */
        const locales = [{
                locale: 'en',
                img: require('../../public/logo/en.png'),
                name: 'English',
            },
            {
                locale: 'fr',
                img: require('../../public/logo/gr.png'),
                name: 'French',
            }
        ]

        /* eslint-disable global-require */

        return {
            locales,
        }
    },
    data() {
        return {
            //openModal:false,
            //locale: this.$i18n.locale,

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
                car_desc: '',

                carId: ''
            },
            dialogDelete: false,
            boxTwo: '',
            // editedCar:{

            // },
            // defaultItem:{

            // }
            currentPage: 1,
            perPage: 2,
            totalRows: 0
        };
    },
    watch: {
        locale(val) {
            this.$i18n.locale = val
        },
    },
    created() {
        //alert('created called');
        this.$store.dispatch("getCars");
        //console.log(this.$store.state.cars, 'data get');
        this.cars = this.$store.state.cars;
        //this.carsDuplicate = this.$store.state.cars;
    },
    computed: {
        filteredCar: function () {

            return this.cars.cars.filter((item) => {
                let data = this.search;
                //console.log(data, 'data')
                return ((item.car_title).toUpperCase()).indexOf(data.toUpperCase()) !== -1;
                // return item.car_title.match(this.search);

            });

        },
        rows() {
            return this.cars.length
        }
        // currentLocale() {

        //     return this.locales.find(l => l.locale === this.$i18n.locale)

        // }

    },
    methods: {
        deleteData(id){
            alert(id);
            this.$store.dispatch('deleteCars',id);
        },
        linkGen(pageNum) {
            return pageNum === 1 ? '?' : `?page=${pageNum}`
        },

        confirmText(id) {
            alert(id)
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        console.log(willDelete, 'delete');
                        this.$store.dispatch("deleteCars", id);
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
            //alert('dsds');

        },
        editCar(car) {
            alert('edit car called');
            console.log(car, 'car');
            // this.openModal = !this.openModal;
            this.editcardata = car;
            console.log(this.editcardata, 'edit data');
            // this.modalTitle = "Edit";
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

        },

        // openGoogleMap(item){
        //     alert('Open Google MAp method called');
        //     const urlSuffix = item["23.0376° N, 72.5278° E"]
        //   ? item["23.0376° N, 72.5278° E"]
        //   : item["Ahmedabad"] +
        //     ", " +
        //     item["Ahmedabad"] +
        //     ", " +
        //     item["Ahmedabad"] +
        //     ", " +
        //     item["320008"];

        //     window.open("https://www.google.com/maps/search/?api=1&query=" + urlSuffix,"_blank");

        // }

    }
}
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
