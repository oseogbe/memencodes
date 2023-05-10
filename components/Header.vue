<template>
    <header class="profile container">
        
        <i :class="[isLight ? 'far fa-moon' : 'far fa-sun', 'change-theme']" 
            id="theme-button"
            @click="toggleTheme"
        >
        </i>

        <div class="profile__container grid">
            <div class="profile__data">
                <div class="profile__border">
                    <div class="profile__perfil">
                        <img src="/img/me5.jpg" alt="Osememen Ogbe Portrait">
                    </div>
                </div>

                <h2 class="profile__name">&lt;MemenCodes /&gt;</h2>
                <h3 class="profile__profession">Full-stack web developer</h3>
                <!-- <h3 class="profile__profession">Connect, learn and grow with <br />the software development community</h3> -->

                <ul class="profile__social">
                    <a href="https://www.instagram.com/mynameisose" target="_blank" class="profile__social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/osememen-ogbe" target="_blank" class="profile__social-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/oseogbe" target="_blank" class="profile__social-link">
                        <i class="fab fa-github"></i>
                    </a>    
                </ul>
            </div>

            <div class="profile__info grid">
                <div class="profile__info-group">
                    <h3 class="profile__info-number">{{ yearsOfExp }}</h3>
                    <p class="profile__info-description">Years of <br /> experience</p>
                </div>
                <!-- <div class="profile__info-group">
                    <h3 class="profile__info-number">2</h3>
                    <p class="profile__info-description">Acquired <br /> certifications</p>
                </div> -->
                <div class="profile__info-group">
                    <h3 class="profile__info-number">{{ companies.length }}</h3>
                    <p class="profile__info-description">Companies <br /> worked for</p>
                </div>
                <div class="profile__info-group">
                    <h3 class="profile__info-number">{{ projectsCount }}</h3>
                    <p class="profile__info-description">Completed <br /> projects</p>
                </div>
            </div>

            <div class="profile__buttons">
                <a download href="pdf/osememen-ogbe-resume.pdf" class="button">
                    Download CV <i class="fas fa-download" style="font-size: 1rem;"></i>
                </a>

                <div class="profile__buttons-small">
                    <a href="https://api.whatsapp.com/send?phone=2347080475424&text=Hello, thank you for contacting MemenCodes. How may I be of help?" target="_blank" class="button button__small button__gray">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="mailto:osememen.ogbe@gmail.com?subject=Contact%20MemenCodes" target="_blank" class="button button__small button__gray">
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>   
    </header>
</template>

<script setup>
    import { ref, onMounted } from "vue"

    const isLight = ref(true)

    useHead({
        script: [
            {
                src: "js/change-theme.js",
                body: true,
            }
        ]
    })

    const yearsOfExp = new Date().getFullYear() - 2021 + '+';

    const courses = [];

    const companies = [
        // 'Pn Consulting Limited',
        'Sekani-Tech Limited',
        'Reimnet',
        // 'BigCommand LLC',
        'Bex-IT Digital Solutions',
        // 'Siitech'
    ];

    const toggleTheme = () => {
        isLight.value = !isLight.value
        const icon = isLight.value ? 'moon' : 'sun'
        localStorage.setItem('selected-icon', icon)
    }

    const projectsCount = useState('projectsCount')

    onMounted(() => {
        const icon = localStorage.getItem('selected-icon')

        if(icon) {
            isLight.value = icon == 'moon' ? true : false
        }
    })
</script>

<style lang="scss" scoped>
    .profile {
        position: relative;
        padding-top: 3.5rem;
        
        &__container {
            row-gap: 2rem;

            .profile__data {
                display: grid;
                text-align: center;

                .profile__border {
                    border: 3.5px solid var(--first-color);
                    justify-self: center;
                    width: 115px;
                    height: 115px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    margin-bottom: .75rem;

                    .profile__perfil {
                        width: 100px;
                        height: 100px;
                        background: linear-gradient(180deg, 
                                    hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
                                    hsla(var(--hue), var(--sat), var(--lig), 1) 100%);
                        border-radius: 50%;
                        border: 1px solid var(--first-color);
                        overflow: hidden;
                        display: flex;
                        align-items: flex-start;
                        justify-content: center;

                        // img {
                        //     width: 75%;
                        // }
                    }
                }

                .profile__name {
                    font-size: var(--h2-font-size);
                }

                .profile__profession {
                    font-size: var(--smaller-font-size);
                    font-weight: 500;
                    color: var(--text-color);
                    margin-bottom: 1rem;
                }

                .profile__social {
                    display: flex;
                    justify-content: center;
                    column-gap: .75rem;

                    &-link {
                        font-size: 1.25rem;
                        color: var(--title-color);
                        transition: .3s;

                        &:hover {
                            color: var(--first-color);
                        }
                    }
                }
            }

            .profile__info {
                grid-template-columns: repeat(3, max-content);
                justify-content: center;
                column-gap: 2.5rem;

                &-group {
                    text-align: center;
                }

                &-number {
                    font-size: var(--normal-font-size);
                    margin-bottom: .25rem;
                }

                &-description {
                    font-size: var(--smaller-font-size);
                    font-weight: 500;
                    color: var(--text-color);
                }
            }

            .profile__buttons,
            .profile__buttons-small {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .profile__buttons {
                column-gap: 1rem;
            }

            .profile__buttons-small {
                column-gap: .25rem;
            }
        }

        .change-theme {
            position: absolute;
            top: 1.5rem;
            right: 0;
            font-size: 1.25rem;
            color: var(--title-color);
            cursor: pointer;
            transition: .3s;

            &:hover {
                color: var(--first-color);
            }
        }
    }

    @media (min-width: 992px) {
        .change-theme {
            top: 2.5rem;
            right: 2.5rem;
        }

        .profile {
            padding-top: 4rem;

            &__container {
                .profile__data {
                    .profile__border {
                        width: 135px;
                        height: 135px;
                        margin-bottom: 1rem;

                        .profile__perfil {
                            width: 120px;
                            height: 120px;
                        }
                    }

                    .profile__profession {
                        margin-bottom: 1.5rem;
                    }
                }

                .profile__info {
                    column-gap: 3rem;

                    &-description {
                        font-size: var(--small-font-size);
                    }
                }

                .profile__buttons {
                    column-gap: 1.5rem;
                }
            }
        }
    }
</style>