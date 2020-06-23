<template>
    <div>
        <form @submit="createService">
            <input type="text" name="name" placeholder="Name" v-model="name">
            <input type="text" name="category" placeholder="category" v-model="category">
            <input type="text" name="description" placeholder="description" v-model="description">
            <input type="text" name="location" placeholder="location" v-model="location">
            <input type="text" name="owner" placeholder="owner" v-model="owner">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateService',
    data() {
        return{
            name: '',
            category: '',
            description: '',
            location: '',
            owner: ''

        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault()
            const newService = {
                // id: uuidv4(),
                name: this.name,
                category: this.category,
                description: this.description,
                location: this.location,
                owner: this.owner,
                verified: false
            }
            // send up to parent
            this.$emit('create-service', newService),
            this.name = '',
            this.category = '',
            this.description = '',
            this.location = '',
            this.owner = ''
        }
    }
}
</script>

<style scoped>
   
</style>