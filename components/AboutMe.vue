<template>
    <div class="about section">
        <h2 class="section__title">&lt;About Me /&gt;</h2>
        <h3 class="section__subtitle">Let me introduce myself!</h3>

        <div class="about__container container grid">
            <img
                src="/img/me2.jpg"
                alt=""
                class="about__img"
                style="margin-top: 5px"
            />

            <div class="about__data">
                <!-- <h3 class="about__heading">Hi, I'm Osememen Ogbe, Based in Nigeria</h3> -->
                <p class="about__description">
                    Welcome to my portfolio website! My name is Osememen Ogbe
                    and I am a software developer with a track record of
                    creating industry standard websites and applications.
                    <br /><br />
                    My tech stack includes PHP, Laravel, Node.js, Express.js,
                    Go, Vue.js, React.js and Next.js.
                    <br /><br />
                    In addition to my tech skills, I am a strong communicator
                    and team player. I enjoy working with cross-functional teams
                    to understand business requirements and deliver solutions
                    tailored to the needs of the user. <br /><br />
                    I am always looking to learn new technologies and expand my
                    skill set. In my free time, I enjoy staying up-to-date with
                    the latest industry trends and experimenting with new
                    technologies and techniques.
                    <br /><br />
                    Thank you for visiting my site and I look forward to the
                    possibility of working with you.
                </p>
                <!-- <div class="about__info grid">
                    <div class="about__box">
                        <i class="fas fa-award about__icon"></i>
                        <h3 class="about__title">Experience</h3>
                        <span class="about__subtitle">2+ years</span>
                    </div>
                    <div class="about__box">
                        <i class="fas fa-suitcase about__icon"></i>
                        <h3 class="about__title">Completed</h3>
                        <span class="about__subtitle">3 projects</span>
                    </div>
                    <div class="about__box">
                        <i class="fas fa-headphones-alt about__icon"></i>
                        <h3 class="about__title">Support</h3>
                        <span class="about__subtitle">Online 24/7</span>
                    </div>
                </div> -->
                <!-- <a href="#contact" class="button">Contact Me <i class="fas fa-paper-plane"></i></a> -->
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.section {
    padding: 0;
}

.about {
    margin-top: 3rem;

    .section__title {
        font-size: var(--h2-font-size);
        font-weight: 600;
        text-align: center;
    }

    .section__subtitle {
        font-size: var(--smaller-font-size);
        font-weight: 500;
        text-align: center;
        color: var(--text-color);
        margin-bottom: 1rem;
    }

    &__container {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
        margin-top: 3rem;

        .about__img {
            width: 540px;
            border-radius: 1.5rem;
            justify-self: center;
        }

        .about__data {
            color: var(--text-color);

            .about__heading {
                font-size: var(--h3-font-size);
                margin-bottom: 12px;
            }

            .about__description {
                text-align: justify;
                padding-right: 6rem;
                margin-bottom: 2rem;
            }

            .about__info {
                grid-template-columns: repeat(3, 140px);
                column-gap: 0.5rem;
                margin-bottom: 3rem;

                .about__box {
                    text-align: center;
                    border-radius: 0.25rem;
                    padding: 1rem 1.25rem;
                    border: 1px solid var(--text-color-light);

                    .about__icon {
                        font-size: 1.5rem;
                        color: var(--text-color-light);
                        margin-bottom: 12px;
                    }

                    .about__title {
                        font-size: var(--small-font-size);
                    }

                    .about__subtitle {
                        font-size: var(--smaller-font-size);
                    }
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .section {
        padding: 1rem 0;
    }
    .about {
        &__container {
            grid-template-columns: 1fr;
            row-gap: 2.5rem;

            .about__img {
                width: 440px;
            }

            .about__data {
                text-align: center;

                .about__description {
                    padding: 0 4rem;
                    margin-bottom: 2rem;
                }

                .about__info {
                    justify-content: center;

                    .about__box {
                        padding: 0.75rem 0.5rem;
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .about {
        &__container {
            .about__img {
                width: 360px;
            }
        }
    }
}

@media (max-width: 576px) {
    .about {
        &__container {
            .about__img {
                width: 320px;
            }

            .about__data {
                .about__description {
                    padding: 0 1rem;
                }

                .about__info {
                    grid-template-columns: repeat(3, 1fr);

                    .about__box {
                        .about__title {
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
}
</style>
