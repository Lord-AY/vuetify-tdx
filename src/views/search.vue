<template>
    <SearchComponent :results="getResults"></SearchComponent>
</template>

<script>
import SearchComponent from "@/components/searchComponent";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "search",
    components: {
        SearchComponent
    },
    computed: {
        ...mapGetters("search", ["getResults"]),
    },
    methods: {
        ...mapActions("search", ["searchAction"]),
        getSearch() {
            const payload = {
                keyword: this.$route.params.keyword
            };
            this.searchAction(payload);
        },
    },
    created() {
        this.getSearch();
    }
};
</script>

<style lang="css" scoped></style>
