<template>
  <div class="val-ind-box">
    <div class="top-box">
      <div class="top-box-1 val-card">
        <h1>Tolls</h1>

        <div class="top-box-body">
          <button class="val-ind-button">
            continue to pay
          </button>
        </div>
      </div>
      <div class="top-box-2 val-card">
        <h1>Get Tickets For Live Events</h1>

        <div class="top-box-body">
          Don't miss out on events happening around you. Get tickets for live
          events and shows with trade explora One!
        </div>
      </div>
    </div>

    <div class="bottom-box val-card">
      <div class="bottom-box-text">
        <h1>Save Money</h1>
        <div>
          No convenience fee when you pay for toll on Trade explora One.
        </div>
      </div>

      <div class="bottom-box-text">
        <h1>Save Time - Instant Toll fee Payment</h1>
        <div>
          Paying your toll fees is always a breeze with Jumia One. Enjoy the
          comfort of topping up your toll account online without moving an inch.
          Jumia One’s convenient, uncomplicated and speedy payment service is
          all you need.
        </div>
      </div>

      <div>
        Jumia One also offers easy and convenient Airtime and Mobile Data
        purchases, as well as Internet and Electricity bill payments.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "valind"
};
</script>
<style scoped>
.val-card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.val-ind-box {
  max-width: 60%;
  margin: 0 auto;
}

.top-box {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.top-box-1 {
  width: calc(40% - 10px);
}

.top-box-2 {
  width: calc(60% - 10px);
  padding: 20px;
}

.top-box h1 {
  font-size: 18px;
  font-weight: 600;
}

.top-box-body {
  margin-top: 30px;
  font-size: 16px;
}

.top-box-1-body {
  font-size: 14px;
  color: #8e8e93;
  font-weight: 600;
}

.val-ind-button {
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #4caf50;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
}

.bottom-box {
  margin-top: 50px;
  color: #6d6d6d;
}

.bottom-box h1 {
  color: #777777;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

.bottom-box-text {
  margin-bottom: 20px;
}
</style>
