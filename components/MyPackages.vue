<template>
    <div class="packages">
        <h2 class="section__title">&lt;Packages /&gt;</h2>
        <h3 class="section__subtitle">What would you like me to do for you?</h3>

        <div class="packages__container container grid">
            <div class="packages__content" v-for="(p, index) in packages" :key="index">
                <div>
                    <i class="fas fa-globe packages__icon"></i>
                    <h3 class="packages__title">{{ p.title }}</h3>
                    <h4 class="packages__subtitle">{{ p.subtitle }}</h4>
                    <p class="packages__description">{{ p.description }}</p>
                </div>

                <span class="button button__small packages__button" @click="p.show = true">
                    What's Included
                    <i class="fas fa-arrow-right button__icon"></i>
                </span>

                <div class="packages__modal" v-show="p.show">
                    <div class="packages__modal-content">
                        <h4 class="packages__modal-title">{{ p.subtitle }}</h4>
                        <i class="far fa-circle-xmark packages__modal-close" @click="p.show = false"></i>

                        <ul class="packages__modal-services grid">
                            <li class="packages__modal-service">
                                <i class="far fa-check-circle packages__modal-icon"></i>
                                <p>Number of pages: {{ p.no_of_pages }}</p>
                            </li>
                            <li class="packages__modal-service">
                                <i class="far fa-check-circle packages__modal-icon"></i>
                                <p>Additional features: {{ p.addons }}</p>
                            </li>
                            <li class="packages__modal-service">
                                <i class="far fa-check-circle packages__modal-icon"></i>
                                <p>Revisions: {{ p.no_of_revisions }}</p>
                            </li>
                            <li class="packages__modal-service">
                                <i class="far fa-check-circle packages__modal-icon"></i>
                                <p>Delivery time: {{ p.delivery_time }}</p>
                            </li>
                            <li class="packages__modal-service">
                                <i class="far fa-check-circle packages__modal-icon"></i>
                                <p>Starting at: {{ p.starting_at }}</p>
                            </li>
                            <li class="packages__modal-service" style="font-size: var(--smaller-font-size);">
                                <p>{{ p.additional_info }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    const packages = reactive([
        {
            'title': 'Basic',
            'subtitle': 'Landing Page',
            'description': 'Are you in need of a beautiful and effective landing page for your business or product? Would you prefer a squeeze, splash, click-through or referral landing page? If you don\'t have an idea of the type of landing page you need, we can chat about it and get you one in no time!',
            'addons': 'content upload, hosting setup, opt-in form, speed optimization',
            'delivery_time': '7-14 days',
            'no_of_pages': '1',
            'no_of_revisions': 1,
            'starting_at': 'N150,000',
            'additional_info': 'Please note that the total cost of the project is exclusive of any charges incurred from purchasing a domain name, hosting or any other 3rd party service.',
            'show': false
        },
        {
            'title': 'Standard',
            'subtitle': 'Static Website',
            'description': 'Do you care for a standard business website that typically contains a home, about, services and contact page? How about a stand-alone blog site? Or would you prefer an all-inclusive feature website. I\'m just a message away!',
            'addons': 'blog (on-request), content upload, hosting setup, opt-in form, speed optimization',
            'delivery_time': '18-30 days',
            'no_of_pages': '4-5',
            'no_of_revisions': 2,
            'starting_at': 'N350,000',
            'additional_info': 'Please note that the total cost of the project is exclusive of any charges incurred from purchasing a domain name, hosting or any other 3rd party service.',
            'show': false
        },
        {
            'title': 'Premium',
            'subtitle': 'Custom Web/Mobile App',
            'description': 'Are you in need of a quality web or mobile app solution to make that fantastic idea you have a reality? Or do you intend to automate some business or organization process? I\'d be more than happy to help!',
            'addons': 'authentication, blog (on-request), content upload, hosting setup, opt-in form, payment integration, speed optimization',
            'delivery_time': '60-90 days',
            'no_of_pages': '6-8',
            'no_of_revisions': 3,
            'starting_at': 'N750,000',
            'additional_info': 'Please note that the total cost of the project is exclusive of any charges incurred from purchasing a domain name, hosting or any other 3rd party service.',
            'show': false
        }
    ]);
</script>

<style lang="scss" scoped>
    .packages {
        margin-top: 3rem;
        text-align: center;

        .section__title {
            font-size: var(--h2-font-size);
            font-weight: 600;
        }

        .section__subtitle {
            font-size: var(--smaller-font-size);
            font-weight: 500;
            color: var(--text-color);
            margin-bottom: 1rem;
        }

        .packages__container {
            gap: 1.5rem;
            margin-top: 3rem;

            .packages__content {
                position: relative;
                background-color: var(--container-color);
                padding: 3.5rem 1.5rem;
                border-radius: .25rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
                transition: .3s;
                display: flex;
                flex-direction: column;
                // align-items: center;

                &:hover {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
                }

                .packages__icon {
                    display: block;
                    font-size: 1.5rem;
                    color: var(--first-color);
                    margin-bottom: 1rem;
                }

                .packages__title {
                    margin-bottom: .5rem;
                }

                .packages__subtitle {
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                .packages__description {
                    margin-bottom: 1.5rem;
                    color: var(--text-color);
                }

                .packages__button {
                    display: block;
                    margin-top: auto;
                    cursor: pointer;
                    font-size: var(--small-font-size);

                    .button__icon {
                        font-size: var(--small-font-size);
                    }

                    &:hover {
                        .button__icon {
                            transform: translateX(.25rem);
                        }
                    }
                }

                .packages__modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 1rem;
                    z-index: var(--z-modal);
                    transition: .3s;

                    &-content {
                        position: relative;
                        background-color: var(--container-color);
                        padding: 1.5rem;
                        border-radius: .5rem;
                        text-align: left;
                    }

                    &-title {
                        font-size: var(--h3-font-size);
                        font-weight: 400;
                        margin-bottom: 1.5rem;
                    }

                    &-close {
                        position: absolute;
                        top: 1.5rem;
                        right: 1rem;
                        font-size: 1.5rem;
                        color: var(--first-color);
                        cursor: pointer;
                    }

                    // &-services {
                    //     row-gap: 1rem;
                    // }

                    &-service {
                        display: flex;
                        color: var(--text-color);
                    }

                    &-icon {
                        color: var(--first-color);
                        margin-right: .5rem;
                        margin-top: .3rem;
                    }
                }

                .active__modal {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    

    @media (min-width: 576px) {
        .packages__container {
            .packages__content {
                width: 70%;
                margin: 0 auto;

                .packages__modal {
                    &-content {
                        width: 80%;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        .packages__container {
            column-gap: 3rem;
            grid-template-columns: repeat(2, 1fr);
            margin: auto;
            width: 80%;
            padding-left: 1.5rem;
            padding-right: 1.5rem;

            .packages__content {
                width: 100%;

                .packages__modal {
                    &-content {
                        width: 65%;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) {
        .packages__container {
            width: 90%;
            padding-left: 0;
            padding-right: 0;

            .packages__content {
                .packages__modal {
                    &-content {
                        width: 50%;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .packages__container {
            grid-template-columns: repeat(3, 1fr);
            width: 100%;

            .packages__content {
                .packages__modal {
                    &-content {
                        width: 40%;
                    }
                }
            }
        }
    }
</style>