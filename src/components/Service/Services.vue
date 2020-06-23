<template>
    <div>
        <div v-bind:key="service.id" v-for="service in services">
            <Service v-bind:service="service" v-on:del-service="$emit('del-service', service.id)"/>
        </div>
    </div>
</template>

<script>

import Service from './Service';

export default {
    name: "Services",
    components: {
        Service
    },
    props: ["services"]
}
</script>

<style scoped>

</style>