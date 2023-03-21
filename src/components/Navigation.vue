<template>
  <header>
    <nav class="container"> 
        <router-link :to="{ name: 'Home'}">
        <img src="../assets/logo.png" class="logo"> </router-link>
        <div class="branding">
            <!-- LINKS BACK TO THE HOME PAGE -->
          
            <router-link class="header" :to="{ name: 'Home'}">blogPrince</router-link> 
        </div>
        <div class="nav-links"> 
            <ul v-show="!mobile"> 
                <router-link class="link" :to ="{ name: 'Home'}"> Home </router-link>
                <router-link class="link"  :to ="{ name: 'Blogs'}"> Blogs</router-link>
                <router-link class="link" v-if="admin" :to ="{name: 'CreatePost'}"> Create Post </router-link>
                <router-link class="link" v-if="!user" :to ="{ name: 'Login' }"> Login </router-link>
            
            </ul>
            <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile"> 
                <span>{{  this.$store.state.profileInitials }}</span>
                <div v-show="profileMenu" class="profile-menu">
                    <div class="info">
                        <p class="initials">{{  this.$store.state.profileInitials }}</p>
                        <div class="right">
                            <p> {{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</p>
                            <p> {{ this.$store.state.profileUsername }}</p>
                            <p> {{ this.$store.state.profileEmail }}</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="option">
                            <router-link class="option" :to="{name: 'Profile'}">
                                <userIcon class="icon" />
                                <p>Profile</p>
                            </router-link>
                        </div>
                        <div v-if="admin" class="option">
                            <router-link class="option" :to="{ name: 'Admin' }">
                                <adminIcon class="icon" />
                                <p>Admin</p>
                            </router-link>
                        </div>
                        <div @click="signOut" class="option">
                           
                                <signOutIcon class="icon" />
                                <p>Sign Out</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
         <!-- <button @click="toggleMobileNav" class="menu-icon" v-show="mobile">nav</button> -->
           <menuIcon v-on:click.native="toggleMobileNav" class="menu-icon" v-show="mobile"/>  
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to ="{ name: 'Home'}"> Home </router-link>
                <router-link class="link" :to ="{ name: 'Blogs'}"> Blogs</router-link>
                <router-link v-if="admin" class="link" :to ="{name: 'CreatePost'}"> Create Post </router-link>
                <router-link v-if="!user" class="link" :to ="{ name: 'Login' }"> Login </router-link>
            </ul>
        </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import firebase from "firebase/app";
import "firebase/auth";


export default {
    name: "navigation",
    components: {
        menuIcon, 
        userIcon,
        adminIcon,
        signOutIcon,
    },
    data() {
        return {
            profileMenu: null,
            // indicate whether in mobile view or not
            mobile: null,
            //indicate whether mobile view is open
            mobileNav: null,
            //sttore window width
            windowWidth: null,
        };
    }, 
        // Listener
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            // console.log('clicked');
            this.mobileNav = !this.mobileNav;

        },
        toggleProfileMenu(e) {
            if (e.target === this.$refs.profile) {
                this.profileMenu = !this.profileMenu;
            }
           
        },

        signOut() {
            firebase.auth().signOut();
            window.location.reload('/home');
            
        }
    },
    computed: {
        //to toggle when to show a particular item depending whether the user is logged in or not.
        user() {
            return this.$store.state.user;
        },
        admin() {
            return this.$store.state.profileAdmin;
        },
    },
};
</script>

<style lang="scss" scoped>

header {
  background-color: #a7d5e1;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link{
    font-weight: 500;
    padding: 0 8px;
    transition: font-size 0.2s ease-in-out;

    &:hover{
        color:#ff5e6c;
        font-size: x-large;
    }
  }

  .logo {
        display: flex;
        width: auto;
        height: 40px;       
        
    }
    nav {
    display: flex;
    padding: 25px 0;

    .branding {
        display: flex;
        align-items: center;
        padding-left: 25px;
    

    .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
    }
    
}

    
        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;
        
            ul {
                margin-right: 32px;

                .link {
                    margin-right: 32px;
                }
                .link:last-child{
                    margin-right: 0;
                }         
            }

    .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-size: 24px;
        border-radius: 50%;
        color: #000;
        font-weight: 500;
        background-color: #f5dde9;
        transition: font-size 0.4s ease-in-out;

    &:hover{
        color: #000;
        font-size: xx-large;
        width: 50px;
        height: 50px;
    }
    span {
          pointer-events: none;
        }
        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 300px;
          background-color: #f5dde9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;
            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #a7d5e1;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
             
            }
            .right {
              flex: 1;
              margin-left: 24px;
              p:nth-child(1) {
                font-size: 24px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 14px;
              }
            }
          }
          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #000;
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 18px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
    .mobile-user-menu {
      margin-right: 40px;
    }
  }
            
        
    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #f5dde9;
        top: 0;
        left: 0;

        .link{
            padding: 15px 0;
            color: #000;
            transition: font-size 0.2s ease-in-out;

            &:hover{
            color: #a7d5e1;
            font-size: x-large;
                }

        }
 
    }

    

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

    .mobile-nav-enter {
        transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }

    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }
    }

</style>