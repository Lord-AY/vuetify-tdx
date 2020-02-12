<template>
    <div>

        <form action="">
            <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
            <input type="text" v-model="firstname">
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
            <input type="text" v-model="lastname">
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
        </form>
    </div>
</template>

<script>
export default {

  name: 'sample',

  data() {
    return {
        firstname: null,
        lastname: null
    };
  },
};
</script>

<style lang="css" scoped>
</style>
