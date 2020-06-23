<template>
    <div>
        <p>
            <input type="checkbox" v-on:change="verify">
            {{service.name}}
            <button @click="$emit('del-service', service.id)" class="del">x</button>
        </p>
    </div>
</template>


<script>
export default {
    name: "Service",
    props:["service"],
    methods: {
        verify(){
            this.service.verified = !this.service.verified;
        }
        }
}
</script>


<style scoped>

</style>