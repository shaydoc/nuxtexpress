<template>
  <div id="body">
    <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                   <a class="navbar-brand" href="#">
                    <img src="../assets/images/nidirectv2-logo.png" alt="n i direct government services">
                </a>
                </div>
                <div class="navbar-collapse" id="navbar">
                    
                </div>
            </div>
        </nav>
        <div class="jumbotron service-name-uxm">
            <div class="container">
                Test it
            </div>
        </div>
    <nuxt/>             
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

 
