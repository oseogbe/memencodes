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
                    content: '<em>Welcome</em> to <em>MemenCodes</em>. My name is Osememen Ogbe and I\'m really passionate about coding, problem solving and sharing my journey with others. You can get to see some of the projects I\'ve worked on, my favorite learning materials, and even contact me if you\'ve got a job for me!' 
                }
            ],
            link: [      
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }    
            ],
        }
    },
      
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/css/main.scss',
        'assets/css/dark-theme.scss',
    ],
})