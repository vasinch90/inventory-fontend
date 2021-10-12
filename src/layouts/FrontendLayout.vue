<template>
    <NavBar/>
    <main>
        <router-view/>
    </main>
    <Footer/>
</template>

<script>
import NavBar from '@/components/frontend/Nav.vue'
import Footer from '@/components/frontend/Footer.vue'

export default {
    name: 'FrontendLayout',
    components:{
        NavBar,
        Footer
    }
}
</script>