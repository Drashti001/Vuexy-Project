<template>
<div>
    <b-card>
        <b-card-body>
            <b-row>
                <div style="position:relative;">
                    <img src="../../public/cars/aboutprofile.jpeg" class="img" style="width:100%;height: 550px;z-index: 0; ">
                    <p class="carousel-caption position-absolute">In it to drive it</p>
                    <p class="position-absolute" style="color:antiquewhite" >Four wheels fuel a billion dreams </p>
                </div>
            </b-row>

            <div class="row">
                <b-card class="col-6">
                    <div class=" align-items-center justify-content-center mb-2 mb-md-0 col text-center">
                        <div class=" align-items-center justify-content-center w-100">
                            <img src="../../public/cars/p4.webp" class="rounded mt-3" style="height:150px;width:265px " />
                            <h3 class="mt-3 text-justify" style="color:thistle"> We are about making car ownership accessible, simple and delightful</h3>
                            <p class="mt-2 text-justify">In a country where four wheels fuel dreams, less than two per cent of young Indians are satisfied with the used car experience. Our goal is for the country to trust our method, believe in and enjoy our cars. In this way we aim to propel a billion dreams.</p>
                            <b-link :to="{ name: 'home' }"> See Our Cars  >></b-link>
                        </div>
                    </div>
                </b-card>
                <b-card class="col-6">
                    <div class=" align-items-center justify-content-center mb-2 mb-md-0 col">
                        <div class=" align-items-center justify-content-center w-100 text-center">
                            <img src="../../public/cars/p3.jpeg" class="rounded mt-3" style="height:150px;width:265px " />
                            <h3 class="mt-3 text-justify" style="color:thistle">20,000 + happy customers, here’s what one has to say</h3>
                            <p class="mt-2 text-justify" >We are about making car ownership accessible, simple and delightful<br>
                                In a country where four wheels fuel dreams, less than two per cent of young Indians are satisfied with the used car experience. Our goal is for the country to trust our method, believe in and enjoy our cars. In this way we aim to propel a billion dreams.</p>
                            <b-link :to="{ name: 'home' }"> See Our Cars  >></b-link>
                            </div>
                    </div>
                </b-card>
            </div>
        </b-card-body>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BCardBody,
    BCardText,
    BLink,
   
} from 'bootstrap-vue'
export default {
    components: {

        BCard,
        BCardBody,
        BCardText,
        BLink,
      
    },
}
</script>

<style scoped>
.carousel-caption {

    position: absolute;
    font-family: Geneva;
    top: 60%;
    left: 50%;
    transform: translate(-40%, -50%);
    font-size: 70px;
    font-style: bold;
    line-height: 90px;
}
</style>
