<template>
    <section class="filters container">
        <!-- Filters Tabs -->
        <ul class="filters__content">
            <button class="filters__button" @click="onProjects = true; onSkills = false" :class="{'filter-tab-active': onProjects}">
                Projects
            </button>
            <button class="filters__button" @click="onProjects = false; onSkills = true" :class="{'filter-tab-active': onSkills}">
                Skills
            </button>
        </ul>

        <div class="filters__sections">
            <!-- Projects -->
            <div class="projects__content grid" :class="{'filters__active': onProjects}">
                <article class="projects__card" v-for="project in projects">
                    <img :src="project.thumbnail" alt="" class="projects__img">

                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle">{{ project.category }}</span>
                            <h3 class="projects__title">{{ project.title }}</h3>
                            <a :href="project.link" class="projects__button button button__small">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Skills -->
            <div class="skills__content grid" :class="{'filters__active': onSkills}">
                <div class="skills__area" v-for="skill in skills">
                    <h3 class="skills__title">
                        {{ skill.title }}
                    </h3>
                    <div class="skills__group">
                        <div class="skills__data" v-for="{ name, level } in skill.skillsets">
                            <i class="far fa-circle-check"></i>

                            <div>
                                <h3 class="skills__name">{{ name }}</h3>
                                <span class="skills__level"> {{ level }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
    import { reactive, ref, onMounted } from "vue";

    const onProjects = ref(true);
    const onSkills = ref(false);

    const projects = reactive([
        {
            'category': 'Recruitment',
            'title': 'Hire4Africa',
            'thumbnail': 'img/h4a_1.png',
            'link': 'https://hire4africa.com'
        },
        {
            'category': 'Affiliate Marketing',
            'title': 'LifestyleHub',
            'thumbnail': 'img/lsh_1.png',
            'link': 'https://lsh.cp.reimnet.com'
        },
        {
            'category': 'E-Commerce',
            'title': 'TheArtVille',
            'thumbnail': 'img/artco_1.png',
            'link': 'https://theartville.com'
        },
        // {
        //     'category': 'Movies',
        //     'title': 'Muvee',
        //     'thumbnail': 'img/muvee.png',
        //     'link': 'https://muvee.netlify.app'
        // },
        // {
        //     'category': 'Portfolio',
        //     'title': 'Aybee Adayi',
        //     'thumbnail': 'img/aybee-adayi.png',
        //     'link': 'https://aybeeadayi.netlify.app'
        // },
    ]);

    const skills = reactive([
        {
            'title': 'Front-end Developer',
            'skillsets': [
                {
                    'name': 'HTML',
                    'level': 'Advanced',
                },
                {
                    'name': 'CSS/SCSS',
                    'level': 'Advanced',
                },
                {
                    'name': 'JavaScript',
                    'level': 'Advanced',
                },
                {
                    'name': 'Bootstrap',
                    'level': 'Advanced',
                },
                {
                    'name': 'TailwindCSS',
                    'level': 'Intermediate',
                },
                {
                    'name': 'Vuetify',
                    'level': 'Intermediate',
                },
                
                {
                    'name': 'VueJS',
                    'level': 'Advanced',
                },
                {
                    'name': 'NuxtJS',
                    'level': 'Advanced',
                }
            ]
        },
        {
            'title': 'Back-end Developer',
            'skillsets': [
                {
                    'name': 'PHP',
                    'level': 'Advanced',
                },
                {
                    'name': 'Laravel',
                    'level': 'Expert',
                },
                {
                    'name': 'Node.js',
                    'level': 'Intermediate',
                },
                {
                    'name': 'Express.js',
                    'level': 'Intermediate',
                },
                {
                    'name': 'Python',
                    'level': 'Basic',
                },
                {
                    'name': 'Java',
                    'level': 'Intermediate',
                },
                {
                    'name': 'SpringBoot',
                    'level': 'Basic',
                },
                {
                    'name': 'MySQL',
                    'level': 'Advanced',
                },
                {
                    'name': 'PostgreSQL',
                    'level': 'Basic',
                },
                {
                    'name': 'MongoDB',
                    'level': 'Basic',
                },
                {
                    'name': 'Firebase',
                    'level': 'Basic',
                },
            ]
        }
    ])

    onMounted(() => {
        const projectsCount = useState('projectsCount', () => projects.length)
    })
</script>

<style lang="scss" scoped>
    .filters {
        &__content {
            margin: 2rem 0 2.5rem;
            background-color: var(--text-color-lighten);
            padding: .375rem;
            border-radius: .75rem;
            display: flex;
            justify-content: space-between;
            column-gap: .5rem;

            .filters__button {
                width: 100%;
                border: none;
                outline: none;
                padding: 1rem;
                color: var(--title-color);
                font-size: var(--small-font-size);
                font-weight: 500;
                border-radius: .75rem;
                cursor: pointer;
                background-color: transparent;
                transition: .3s;

                &:hover {
                    background-color: var(--body-color);
                }
            }

            .filter-tab-active {
                background-color: var(--body-color);
            }
        }

        &__sections {

            .projects__content {
                .projects__card {
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    &:hover {
                        .projects__modal {
                            bottom: 0;
                        }
                    }

                    .projects__modal {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        bottom: -100%;
                        left: 0;
                        background: linear-gradient(180deg,
                                    hsla(var(--hue), 24%, 40%, .3) 0%,
                                    hsla(var(--hue), 24%, 4%, 1) 95%);
                        display: grid;
                        align-items: flex-end;
                        padding: 1.5rem 1.25rem;
                        transition: .3s;

                        .projects__subtitle,
                        .projects__title {
                            color: #FFF;
                        }

                        .projects__subtitle {
                            font-size: var(--smaller-font-size);
                        }

                        .projects__title {
                            font-size: var(--h3-font-size);
                            margin-bottom: .75rem;
                        }

                        .projects__button {
                            padding: .5rem;

                            i {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }

            .skills__content {
                row-gap: 3.5rem;
                justify-content: center;

                .skills__title {
                    font-size: var(--h3-font-size);
                    text-align: center;
                    margin-bottom: 1.5rem;
                }

                .skills__group {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem 2rem;

                    .skills__data {
                        display: flex;
                        column-gap: .5rem;

                        i {
                            font-size: 1rem;
                            color: var(--first-color);
                        }

                        .skills__name {
                            font-size: var(--normal-font-size);
                            font-weight: 500;
                            line-height: 18px;
                        }

                        .skills__level {
                            font-size: var(--smaller-font-size);
                        }
                    }
                }
            }

            .projects__content,
            .skills__content {
                display: none;
            }

            .filters__active {
                display: grid;
            }
        }
    }

    @media (min-width: 576px) {
        .filters {
            &__content {
                width: 332px;
                margin: 3rem auto;
            }

            &__sections {
                .projects__content,
                .skills__content {
                    .skills__group {
                        gap: 1rem 4rem;
                    }
                }

                .projects__content {
                    width: 70%;
                    margin: auto;
                }

                .skills__content {
                    column-gap: 10%;
                }
            }
        }
    }

    @media (min-width: 776px) {
        .filters {
            &__sections {
                .projects__content,
                .skills__content {
                    grid-template-columns: repeat(2, 1fr);
                }

                .projects__content,
                .skills__content {
                    width: 80%;
                    margin: auto;
                }
            }
        }
    }

    @media (min-width: 992px) {
        .filters {
            &__sections {
                .projects__content {
                    gap: 2rem 3rem;
                    width: 90%;

                    .projects__card {
                        .projects__modal {
                            padding: 1.5rem;
                        }
                    }
                }
                .skills__content {
                    .skills__title {
                        font-size: var(--normal-font-size);
                        margin-bottom: 2.5rem;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .filters {
            &__sections {
                .projects__content {
                    grid-template-columns: repeat(3, 1fr);
                    width: 100%;
                }

                .skills__content {
                    column-gap: 20%;
                    width: 50%;

                    .skills__group {
                        gap: 1rem 8rem;
                    }
                }
            }
        }
    }
    
</style>