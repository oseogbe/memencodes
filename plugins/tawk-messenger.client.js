import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

export default defineNuxtPlugin(nuxtApp => {
    
    nuxtApp.vueApp.use(TawkMessengerVue, {
        propertyId : '63d3d98e47425128790ff797',
        widgetId : '1go13c9oj'
    })
})