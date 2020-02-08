<template>

  <section class="activation-page">
      <div class="activation-message-card">
          <div class="activation-logo">
              <img src="../assets/images/activation.svg" alt="">
          </div>
          <div class="activation-message">
              <h3>Verified</h3>
              <p id="paragraph">You have successfully verified your account.</p>
          </div>
          <div class="redirect-to-home-page">
            <router-link to="/">
              <button class="btn btn-theme">
                  Go to Home
              </button>
            </router-link>
          </div>
      </div>
  </section>

</template>

<script>
/* eslint-disable no-undef */
// require("../../../public/assets/plugins/animate/animate.css");
export default {
  name: "activation"
};
</script>

<style>
    section.activation-page {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 64px auto;
    }

    .activation-message-card {
        background-color: #fff;
        border-radius: 6px;
        padding: 24px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
    }

    .activation-logo {
        width: 64px;
        height: 64px;
        margin: 0 auto 16px
    }

    .activation-logo img {
        border-radius: 50%;
    }

    .activation-message {
        margin-bottom: 24px;
    }

    .activation-message h3{
        font-size: 32px;
        font-weight: 600;
        color: #232323;
    }

    .activation-message p#paragraph{
        /* color: ; */
        font-size: 16px!important;
    }

    .redirect-to-home-page button {
        color: #fff;
        border-radius: 6px;
        font-weight: 600;
        font-size: 16px;
    }

    .redirect-to-home-page button:hover {
        color: #fff;
        background-color: rgb(60, 136, 62);
    }
</style>
