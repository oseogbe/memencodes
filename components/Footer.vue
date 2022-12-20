<template>
    <footer>
        <span class="footer__copy">
            &#169; MemenCodes. All rights reserved
        </span>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .footer__copy {
        display: block;
        margin: 2.5rem 0 2rem;
        text-align: center;
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }

    @media (min-width: 992px) {
        .footer__copy {
            margin: 4.5rem 0 2.5rem;
        }
    }
</style>