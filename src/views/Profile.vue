<template>
  <div>
  <b-card
    class="profile-header mb-2 position-relative"
    :img-src="require('../../public/profile/timeline.jpg')"
    img-top
    alt="cover photo"
    body-class="p-0"
  >
    <!-- profile picture -->
    <div>
      <div class="profile-img-container d-flex align-items-center position-absolute" style="bottom: 12px; left:18px; z-index: 9;">
        <div class="profile-img" style="height: 150px; width: 150px;">
          <b-img
            :src="require('../../public/profile/user-03.jpg')"
            rounded
            fluid
            alt="profile photo"
          />
        </div>
        <!-- profile title -->
        <div class="profile-title ml-3">
          <h2 class="text-white">
            {{ userdata.user[0].username }}
          </h2>
          <p class="text-white">
            {{ userdata.user[0].designation }}
          </p>
        </div>
        <!--/ profile title -->
      </div>
    </div>
    <!--/ profile picture -->

    <!-- profile navbar -->
    <div class="profile-header-nav">
      <b-navbar
      
        toggleable="md"
        type="light"
      >
        <!-- toggle button -->
        <b-navbar-toggle
          class="ml-auto"
          target="nav-text-collapse"
        >
          <feather-icon
            icon="AlignJustifyIcon"
            size="21"
          />
        </b-navbar-toggle>
        <!--/ toggle button -->

        <!-- collapse -->
        <b-collapse
        class="justify-content-center"
          id="nav-text-collapse"
          is-nav
        >
          <b-tabs
            pills
            class="profile-tabs mt-1 mt-md-0"
            nav-class="mb-0"
          >
            <template #tabs-start>
              <b-nav-item
                role="presentation"
                active
                class="font-weight-bold"
              >
                <span class="d-none d-md-block">Feed</span>
                <feather-icon
                  icon="RssIcon"
                  class="d-block d-md-none"
                />
              </b-nav-item>
              <b-nav-item
                role="presentation"
                class="font-weight-bold"
              >
                <span class="d-none d-md-block">About</span>
                <feather-icon
                  icon="InfoIcon"
                  class="d-block d-md-none"
                />
              </b-nav-item>
              <b-nav-item
                role="presentation"
                class="font-weight-bold"
              >
                <span class="d-none d-md-block">Photos</span>
                <feather-icon
                  icon="ImageIcon"
                  class="d-block d-md-none"
                />
              </b-nav-item>
              <b-nav-item
                role="presentation"
                class="font-weight-bold"
              >
                <span class="d-none d-md-block">Friends</span>
                <feather-icon
                  icon="UsersIcon"
                  class="d-block d-md-none"
                />
              </b-nav-item>
            </template>

            <!-- edit buttons -->
            <template #tabs-end>
              <b-button
                variant="primary"
                class="ml-200"
              >
                <feather-icon
                  icon="EditIcon"
                  class="d-block d-md-none"
                />
                <span class="font-weight-bold d-none d-md-block">Edit</span>
              </b-button>
            </template>
            <!-- edit buttons -->
          </b-tabs>

        </b-collapse>
        <!--/ collapse -->
      </b-navbar>
    </div>
    <!--/ profile navbar -->
  </b-card>
  <b-card>
    <div v-for="(data,index) in userdata.user"
    :key="data.title"
    :class="index ? 'mt-2' : '' ">
    <b-card-body>
      <b-card-title >About: </b-card-title>
      <b-card-text class="ml-2">{{ data.about }}</b-card-text>
      <span></span>
      <b-card-title >Lives: </b-card-title>
      <b-card-text class="ml-2">{{ data.lives }}</b-card-text>
      <span></span>
      <b-card-title >Email: </b-card-title>
      <b-card-text class="ml-2">{{ data.email }}</b-card-text>
      <span></span>
      <b-card-title >WebSite: </b-card-title>
      <b-card-text class="ml-2">{{ data.website }}</b-card-text>
    </b-card-body>
      </div>
  </b-card>
  <!-- {{ userdata }} -->
  <!-- <b-button @click="deleteUser(id)">
    Delete
  </b-button> -->
  






  </div>
</template>

<script>
import {
    BCard,
    BImg,
    BNavbar,
    BNavbarToggle,
    BCollapse,
    BTabs,
    BNavItem,
    BButton,
    BCardText,
    BCardTitle,
    BCardBody
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
export default {
    components: {
        BCard,
        BTabs,
        BButton,
        BNavItem,
        BNavbar,  
        BNavbarToggle,
        BCollapse,
        BImg,
        BCardText,
        BCardTitle,
        BCardBody
    },
    data() {
        return {
            userdata: {},
        }
    },
    directives: {
        Ripple,
    },
    created() {

        //alert('created');
        this.$store.dispatch("getUser");

        this.userdata = this.$store.state.user;
        console.log(this.userdata, 'userdata get');
    },
    // methods:{
    //   deleteUser(id){
    //     console.log(id,'user id');
    //     this.$store.dispatch('deleteUser',id);

    //   }
    // }

}
</script>

<style scoped>

</style>
