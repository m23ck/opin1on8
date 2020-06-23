<template>
  <div class="employers">
    <Header/>
    <CreateEmployer v-on:create_employer="create_employer"/>
    <AllEmployers v-bind:employers='employers' v-on:remove_employer="remove_employer"/>
    
  </div>
</template>
<script>

import Header from '../components/layout/Header'
import AllEmployers from '../components/Employer/AllEmployers'
import CreateEmployer from '../components/Employer/CreateEmployer'
export default {
  name: 'Home',
  components: {
    Header,
    AllEmployers,
    CreateEmployer
  },
  data() {
    return {
      employers: [
        {
          id: 1,
          name: 'flexy',
          category: 'food-delivery',
          description: 'food delivery service in every area..',
          location: 'heerenstraat 4'
        },
        {
          id: 2,
          name: 'rage room',
          category: 'onstspanning',
          description: 'take out your anger..',
          location: 'Franchepanestraat 8'
        },
        
      ]
    }
  },
  methods: {
    remove_service(id){
      let updated_services
      for (let single_service in this.services){
        if (single_service.id != id){
          updated_services.append(single_service)

        }
      }
      this.services = updated_services
    },
    // create_employer(new_employer){
    //   console.log("created user")
    // }
  }
}
</script>