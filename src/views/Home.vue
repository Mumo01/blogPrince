<template>
  <div class="home">
   <BlogPost v-if="!user" :post="welcomeScreen"  />
   <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index"/>
   <div class="blog-card-wrap">
    <div class="container"> 
      <h3> View More Recent Blogs </h3>
      <div class="blog-cards"> 
        <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
      </div>
    </div>
   </div>
   <div v-if="!user" class="updates">
    <div class="container">
      <h2> Never Miss A Post. Register for your free account today!</h2>
      <router-link class="router-button" :to="{ name: 'Register' }">
        Register For blogPrince <Arrow class="arrow arrow-light"/>
      </router-link>
    </div>
   </div>
  </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg';
import BlogPost from '../components/BlogPost';
import BlogCard from '../components/BlogCard';

export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },

    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed
    },

    blogPostsCards() {
      return this.$store.getters.blogPostsCards
    },
        //to toggle when to show a particular item depending whether the user is logged in or not.
    user() {
            return this.$store.state.user;
        }
    },
  
  
};
</script>
<style lang="scss" scoped>
  .blog-card-wrap {
    background-image: url('../assets/backg.jpg');
  background-position: center;
  background-size: cover;
  background-color: (255, 255, 255, 0.1);
  
  h3 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 32px;
    
  // background-color: #ffa6ad;
  background: linear-gradient(to right, #a7d5e1 40%, transparent 80%);
  background-size: 110% 100%;
  background-position: left bottom;
  transition: background-position 0.5s ease;
    // color: black;

    }
  }
    .updates {
      .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

  
    h2 {
      font-weight: 400;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;


      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

</style>
