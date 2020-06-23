<template>
    <div>
        <div v-bind:key="employer.id" v-for="employer in employers">
            <Employer v-bind:employer="employer" v-on:remove_employer="$emit('remove-employer', employer.id)"/>
        </div>
    </div>
</template>

<script>

import Employer from './Employer';

export default {
    name: "AllEmployers",
    components: {
        Employer
    },
    props: ["employers"]
}
</script>

<style scoped>

</style>