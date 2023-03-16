<template>
   <div class="reset-password">
    <!-- We need to listen to the emit on modal component || then bind modal message to modal component-->
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading"/>
    <div class="form-wrap">
    <form class="reset">
      <p class="login-register">
            Back to 
            <router-link class="router-link" :to="{ name: 'Login'}"> Login
            </router-link>
        </p>

        <h2> Reset Password </h2>
        <p>Forgot your password? Enter your Email to reset it</p>
        <div class="inputs">
            <div class="input">
                <input type="text" placeholder="Email" v-model="email" />
                <email class="icon" />
            </div>
        </div>
       
        <button @click.prevent="resetPassword">
            Reset
        </button>
        <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name: "ForgotPassword",
    data(){
        return {
          email: "",
          modalActive: false,
          modalMessage: "",
          loading: null,
        }
    },  
    components: { email,
                  Modal, 
                  Loading},
    methods: {
      resetPassword() {
          this.loading = true;
          firebase.auth().sendPasswordResetEmail(this.email).then(() => {
            this.modalMessage = "If your account exists, you will receieve an email";
            this.loading = false;
            this.modalActive = true;
          })
          .catch((err) => {
              this.modalMessage = err.message;
              this.loading = false;
              this.modalActive = true;
          });
        
      },
      closeModal() {
          this.modalActive = !this.modalActive;
          this.email = "";
      },
    },
    
}
</script>

<style lang="scss" scoped>
    .reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
    .router-link {
        text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 16px;
      margin: 16px 0 32px;
      border-bottom: 2px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #ff5e6c;
      }
    }
  }
} 
</style>