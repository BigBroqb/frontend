<template>
  <v-app>
    <v-container fluid>
      <v-layout row style="color: #8a94a3">
        <v-flex xs6 offset-xs1>
	  <fb-signin-button
	    :params="fbSignInParams"
	    @success="onSignInSuccess"
	    @error="onSignInError">
	    Sign in with Facebook
	  </fb-signin-button>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <h2>Address</h2>
      <v-layout row>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="Street Address">
          </v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="Apt/Unit #">
          </v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="ZIP code">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="City"
            v-model="fbData.location.name">
          </v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="Years lived at this address">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs3>
          <v-checkbox
            label="This is my mailing address">
          </v-checkbox>
        </v-flex>
        <v-flex xs4>
          <v-checkbox
            label="I currently live here">
          </v-checkbox>
        </v-flex>
      </v-layout>
      <h2>Your Info</h2>
      <v-layout row>
        <v-flex xs6>
          <v-text-field
            name="input-1"
            label="First Name"
            v-model="fbData.first_name">
          </v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            name="input-1"
            label="Last Name"
            v-model="fbData.last_name">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-date-picker :landscape="true" :reactive="true"></v-date-picker>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'user_birthday,user_location,user_likes,user_friends,user_posts,email,public_profile',
        return_scopes: true
      },
      fbData: {
        first_name: '',
        last_name: '',
        gender: '',
        location: {
          name: ''
        }
      }
    }
  },
  name: 'App',
  components: {
  },
  created: function() {
    console.log('created main');
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '216064342468691',
        xfbml      : true,
        version    : 'v2.12'
      });

      //This function should be here, inside window.fbAsyncInit
      FB.getLoginStatus(function(response) {
        console.log(response);
     });

   };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  methods: {
    onSignInSuccess (response) {
      console.log(response)
      console.log('hello')
      this.$http.get(`https://bigbro.ml/user/${response.authResponse.accessToken}`).
        then(userDataResponse => {
          console.log(userDataResponse)
          this.$set(this.$data, 'fbData', userDataResponse.body)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
  .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
    cursor: pointer;
  }
</style>
