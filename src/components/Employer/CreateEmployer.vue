<template>
    <div>
        <form @submit="create_employer">
            <input type="text" name="name" placeholder="Name" v-model="name">
            <input type="text" name="category" placeholder="category" v-model="category">
            <input type="text" name="description" placeholder="description" v-model="description">
            <input type="text" name="location" placeholder="location" v-model="location">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateEmployer',
    data() {
        return{
            id: '',
            name: '',
            category: '',
            description: '',
            location: ''

        }
    },
    methods: {
        create_employer(e) {
            e.preventDefault()
            const new_employer = {
                id: this.id,
                name: this.name,
                category: this.category,
                description: this.description,
                location: this.location,
                is_verified: false
            }
            // send up to parent
            this.$emit('create-employer', new_employer),
            this.id = '',
            this.name = '',
            this.category = '',
            this.description = '',
            this.location = ''
        }
    }
}
</script>

<style scoped>
   
</style>