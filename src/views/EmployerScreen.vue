<template>
  <div class="employers">
    <Header/>
    <EmployerCard/>
    
  </div>
</template>
<script>

import Header from '../components/layout/Header'
import EmployerCard from '../components/Employer/EmployerCard'
export default {
  name: 'EmployerScreen',
  components: {
    Header,
    EmployerCard
  },
  props: [
      'employer'
  ]
  ,
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>