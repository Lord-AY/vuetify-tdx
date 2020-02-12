<template>
    <div>
        <div class="loading"></div>
    </div>
</template>

<script>
export default {
    name: "SearchLoader",

    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
$base-line-height: 24px;
$white: rgb(255, 255, 255);
$green: #47ad24;
$off-white: rgba($white, 0.2);
$spin-duration: 1s;
$pulse-duration: 750ms;

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulse {
    50% {
        background: $white;
    }
}
.loading {
    margin: 0 auto;
    border-radius: 50%;
    width: $base-line-height;
    height: $base-line-height;
    border: 0.25rem solid $off-white;
    border-top-color: $green;
    animation: spin $spin-duration infinite linear;
}
</style>
