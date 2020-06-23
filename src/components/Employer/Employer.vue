<template>
    <div>
        <p>
            <input type="checkbox" v-on:change="verify_employer">
            {{
                employer.name

                }}
            <button @click="$emit('remove_employer', employer.id)" class="del">verify</button>
        </p>
    </div>
</template>


<script>
export default {
    name: "Employer",
    props:["employer"],
    methods: {
        verify_employer(){
            this.employer.is_verified = !this.employer.is_verified;
        },
        remove_employer(){
            console.log("employer has been removed!")
        }
        }
}
</script>


<style scoped>

</style>