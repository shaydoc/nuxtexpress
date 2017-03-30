module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware:'pathfilter'
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/UX-theme.css','~assets/css/bootstrap-uxm.css','~assets/css/bootstrap-uxm-responsive.css','~assets/css/controls-uxm.css'],
  /*
  ** Add axios globally 
  */
  build: {
    vendor: ['axios']
  }
}
 