<template>
    <div>
     <!-- {{ userdata }}  -->
         
    <b-card
    class="profile-header mb-2"
    :img-src="require(`../../public/timeline.jpg`)" 
    img-top
    alt="cover photo"
    body-class="p-0"
  >

  <div class="position-relative">
    <div class="profile-img-container d-flex align-items-center">
      <div class="profile-img">
        <b-img
          :src="require(`../../public/profile.png`)"
          rounded
          fluid
          alt="profile photo"
          style="height:200px;width:200px"
        />
      </div>
      <!-- profile title -->
      <div class="profile-title ml-3">
        <h2 class="text-white">
          {{ userdata.username }}
        </h2>
        <p class="text-white">
          {{ userdata.designation }}
        </p>
      </div>
      <!--/ profile title -->
    </div>
  </div>
</b-card>

    </div>
</template>

<script>
import {
  BCard, BImg, BNavbar, BNavbarToggle, BCollapse, BTabs, BNavItem, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
    export default {
        components: 
            { 
                BCard,
                BTabs,
                BButton,
                BNavItem,
                BNavbar,
                BNavbarToggle,
                BCollapse,
                BImg, 
            },
            data(){
                return{
                    userdata:[],
                }
            },
            directives: {
                Ripple,
            },
            created() {
               
                alert('created');
                this.$store.dispatch("getUser");
                console.log(this.$store.state.user, 'userdata get');
                this.userdata = this.$store.state.user;
               
                },
        
    }
</script>

<style scoped>

</style>