<template>
  <section class="container">
    
    <h1 class="title">
      USERS
    </h1>
    
    <ul class="users">
      <li v-for="(user, index) in users" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>

     <nuxt-link class="button" :to="{ name: 'transactionalservices-category-subCategory-name', params: { category: 'dfe', subCategory:'rateit', name:'online-app' }}">
      Rate it
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('http://shaynuxtexpress.azurewebsites.net/api/users')
    return {
      users: data
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>
