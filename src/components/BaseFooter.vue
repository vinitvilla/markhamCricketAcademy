<template>
  <div class="footer">
    <div class="join-us">
      Join us
      <div class="join-us-phone">
        <input type="tel" placeholder="Enter your phone number" />
        <button>&#8594;</button>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        Copyright&copy; 2022&nbsp;<em>MarkhamCricketAcademy.</em>&nbsp;All
        Rights Reserved.
      </p>
      <div class="dev">
        <label class="dev-text">Developed by: Vinith babu</label>
        <div>
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
export default {};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
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
  border: 1px solid grey;

  /* I've used padding so you can see the edges of the elements. */
  padding: 2px;
  & > {
    input {
      /* Tell the input to use all the available space */
      flex-grow: 2;
      /* And hide the input's outline, so the form looks like the outline */
      border: none;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dev-text {
  font-size: 1em;
}
.fa {
  padding: 0.6em;
  width: 1em;
  height: 1em;
  font-size: 16px;
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
