<template>
  <div id="app">
    <Header/>
    <CreateService v-on:create-service="createservice"/>
    <Services v-bind:services='services' v-on:del-service="deleteService"/>
  </div>
</template>

<script>
import Header from '../components/layout/Header'
import Services from '../components/Service/Services';
import CreateService from '../components/Service/CreateService';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Services,
    CreateService
  },
  data() {
    return {
      services: [
        
      ]
    }
  },
  methods: {
    deleteTodo(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err));

      
    },
    addTodo(newTodo){
      const {title, completed} = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch(err => console.log(err)); 
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
  }
}
</script>

<style>


</style>
