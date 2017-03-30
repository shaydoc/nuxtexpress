<template>
    <section id="RateItForm" class="container">
    
    <h1 class="title">
     Shay's User Vue/View
    </h1>
    <h2>
        {{ category }}
    </h2>
    <h3>
        {{ subCategory }}
    </h3>
    <h4> 
        {{ name }}
    </h4>
  </section>
</template>

 
<script>
 
export default {
   asyncData ({ params, error }) {
     return { category:params.category, subCategory:params.subCategory, name:params.name };
  },
  validate ({ params }) {
    // Must be a number
    return /^[A-Za-z-]+$/.test(params.category) && /^[A-Za-z-]+$/.test(params.subCategorycategory)  && /^[A-Za-z-]+$/.test(params.name) 
  },
  head () {
    return {
      title: 'NIDirect | Rate It'
    }
  }
}
</script>
<style>
 #RateItForm{
    height: 580px;
 }
</style>