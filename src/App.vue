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
            label="City">
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
            label="First Name">
          </v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            name="input-1"
            label="Last Name">
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
        scope: 'email,user_likes,user_posts',
        return_scopes: true
      }
    }
  },
  name: 'App',
  components: {
  },
  methods: {
    onSignInSuccess (response) {
      console.log(response)
      console.log('hello')
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
