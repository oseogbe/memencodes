// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'MemenCodes - Your Friendly-Neighbourhood Developer',
            meta: [
                { 
                    charset: 'utf-8' 
                },
                { 
                    name: 'viewport', 
                    content: 'width=device-width, initial-scale=1' 
                },
                { 
                    name: 'description', 
                    content: '<em>Welcome</em> to <em>MemenCodes</em>. My name is Osememen Ogbe and I\'m really passionate about app development and artificial intelligence, problem solving and sharing my journey in the IT industry with others. On this site, I\'ll be posting some of the projects I\'ve worked on and sharing the little knowledge I\'ve gathered through development courses and blog articles. As for anyone who might have a job/gig for me, we can have a chat about it over a cup of coffee!' 
                }
            ],
            link: [      
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }    
            ],
            script: [
                {
                    src: 'js/scrollreveal.min.js'
                },
            ],
        }
    },
      
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/css/main.scss',
        'assets/css/dark-theme.scss',
    ],
})