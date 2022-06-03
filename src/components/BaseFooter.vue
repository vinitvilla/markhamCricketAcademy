<template>
  <div class="footer">
    <SponsorFooter :sponsors="sponsors"/>
    <div class="schedule-remainder">
      <div class="schedule-left"> 
        <p>
            We are Starting our regular Outdoor Season from Tuesday 26th of May. 
          Please go through the Schedule as this will be the schedule for the summer season until September End.
        </p>
        <h3>Attention</h3>
        <h5>All Under 10 & 12 must attend on Tuesday and Wednesday</h5>
        <h5>All Under 14 & above must attend Tuesday and Thursday</h5>
      </div>
      <div class="schedule-right"> 
        <h3>Tuesday and Wednesday</h3>
        <h5> -> 4:30pm to 6:30pm for Under 10 & 12 </h5>
        <h5> -> 5:30pm to 8pm for Under 14 & above </h5>
        <br />
        <h3>Thursday & Friday</h3>
        <h5> -> 5:00pm to 7:30pm for Under 14 & above </h5>
      </div>
    </div>
    <div class="join-us">
      Join us
      <div class="join-us-phone">
        <input type="text" placeholder="Enter your name" />
        <input type="tel" placeholder="Enter your phone number" />
        <button>&#8594;</button>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        Copyright&copy; 2022&nbsp;<em>MarkhamCricketAcademy.</em>&nbsp;All
        Rights Reserved.
      </p>
      <div class="dev"
          @mouseover="showSocialMedia = true"
          @mouseleave="showSocialMedia = false">
        <label v-if="!showSocialMedia" class="dev-text">Developer</label>
        <div v-else>
          <a
            href="https://www.linkedin.com/in/vinitvilla"
            class="fa fa-linkedin"
          ></a>
          <a
            href="https://www.facebook.com/vinitvilla"
            class="fa fa-facebook"
          ></a>
          <a
            href="https://www.instagram.com/vinitvilla"
            class="fa fa-instagram"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import SponsorFooter from "./SponsorFooter.vue";

export default defineComponent({
  components:{
    SponsorFooter
  },
  data() {
    return {
      showSocialMedia: false,
      sponsors: [
        {
          id: 1,
          logo: "http://dosaboyz.ca/wp-content/uploads/2021/11/logo.png",
          text: "Dosa Boyz Scarborough",
          name: "Dosa Boyz Scarborough",
        },
        {
          id: 2,
          logo: "data:image/png;base64,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",
          text: "Roots Cricket Store",
          name: "Roots Cricket Store",
        }
      ]
    }
  }
});
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
}
.schedule-remainder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  text-align: justify;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  & > * {
    width: 50%;
    display: flex;
    margin: 0 1rem;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
}
.join-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em;
}

.join-us-phone {
  margin-top: 1em;
  width: 24em;
  height: 2em;
  display: flex;
  flex-direction: row;

  /* This bit draws the box around it */
  // border: 1px solid grey;

  /* I've used padding so you can see the edges of the elements. */
  padding: 2px;
  & > {
    input {
      /* Tell the input to use all the available space */
      flex-grow: 2;
    }

    input:focus {
      /* removing the input focus blue box. Put this on the form if you like. */
      outline: none;
    }

    button {
      /* Just a little styling to make it pretty */
      width: 4em;
      background: black;
      color: white;

      &:hover {
        color: black;
        background-color: white;
        font-weight: bolder;
        cursor: pointer;
      }
    }
  }
}

.copyright {
  margin: 0.4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vmin;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  & > * {
    margin: 1em;
  }
}

.copyright-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.dev {
  height: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.dev-text {
  font-size: 2vmin;
}
.fa {
  padding: 0.6em;
  width: 1em;
  height: 1em;
  font-size: 2vmin;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  animation-duration: 0.4s;
  animation-iteration-count: 2;
  transform-origin: bottom;
  &:hover {
    cursor: pointer;
    animation-name: bounce;
    animation-timing-function: ease;
  }
}
@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-instagram {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  color: white;
}
</style>
