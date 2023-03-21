<template>
  <div class="blog-wrapper" :class=" {'no-user': !user}"> 
    <div class="blog-content"> 
    <div>
        <h2 v-if="post.welcomeScreen"> {{ post.title }} </h2>
        <h2 v-else> {{ post.blogTitle }} </h2>
        <p v-if="post.welcomeScreen"> {{ post.blogPost }}</p>
        <p class="content-preview" v-else v-html="post.blogHTML"></p>
        <router-link v-if="post.welcomeScreen" to="#">
          Login  <Arrow class="arrow-arrow-light" />
        </router-link>
        <router-link v-else :to="{name: 'ViewBlog', params: {blogid: this.post.blogID}} ">
          View The Post  <Arrow class="arrow" />
        </router-link>
    </div>
    </div>
    <div class="blog-photo">
        <img class="welcome" v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt=""/>
        <img class="post" v-else :src="post.blogCoverPhoto" alt=""/>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    },
    computed: {
        //to toggle when to show a particular item depending whether the user is logged in or not.
        user() {
            return this.$store.state.user;
        }
    },

};
</script>

<style lang="scss" scoped>
    .blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 620px;
    max-height: 620px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    

    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }
    .arrow-arrow-light {
        margin-left: 8px;
            width: 12px;
        
        }
    .arrow {
            width: 12px;
      height: 12px;
        }

    

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }
      h2 {
        font-size: 35px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
      } 

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        font-weight: bolder;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }  
      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;
        &:hover {
          border-bottom-color: #303030;
        }
      }
      .link-light {
        &:hover {
          border-bottom-color: #ffff;
        }
      }
    }
  }
  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }
    .welcome {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: shake 10.0s infinite;
      &:hover {
        @keyframes shake {
  0% { transform: translate(0, 0); }
  10% { transform: translate(-5px, 0); }
  20% { transform: translate(5px, 0); }
  30% { transform: translate(-5px, 0); }
  40% { transform: translate(5px, 0); }
  50% { transform: translate(-5px, 0); }
  60% { transform: translate(5px, 0); }
  70% { transform: translate(-5px, 0); }
  80% { transform: translate(5px, 0); }
  90% { transform: translate(-5px, 0); }
  100% { transform: translate(0, 0); }    
      }
      }
    }
    .post {
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
      animation: up-down 2s infinite;

      &:hover {
        transform: translateY(-10px);}
          @keyframes up-down {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
      }
    }


  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
}
}

.no-user:first-child {
  .blog-content {
    background-image: url('../assets/backg.jpg');
  background-position: center;
  background-size: cover;
    // background-color: #ffa6ad;
    color: #000;
    font-weight: bolder;
    
  }
}
</style>