<template>
    <div class="nav-bar">
        <router-link to="/" class="nav-link nav-bar__btn">
            <font-awesome-icon icon="bars" class="size"></font-awesome-icon>
            <br>list
        </router-link>
        <router-link to="/map" class="nav-link nav-bar__btn">
            <font-awesome-icon icon="map-marker-alt" class="size"></font-awesome-icon>
            <br>map
        </router-link>
        <router-link to="/settings" class="nav-link nav-bar__btn">
            <font-awesome-icon icon="cog" class="size"></font-awesome-icon>
            <br>settings
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style scoped lang="scss">
    .nav-bar {
        width: 100%;
        background-color: #ffffff;
        overflow: auto;
        text-align: center;
        color: #999999;
        font-size: 15px;
        bottom: 0;
        left: 0;
        position: fixed;
        padding-top: 3px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
        display: block;
        margin: 0 auto;

        &__btn { // .nav-bar__btn
            text-decoration: none;
            width: 33%;
            color: #999999;
            padding: 0;
            float: left;

            &:focus { // .nav-bar__btn:focus
                color: #006633;
                border-right-color: #999999;
            }

            &:hover { // .nav-bar__btn:hover
                color: #009933;
            }

            &:last-child { // .nav-bar__btn:last-child
                border: none;
            }

            .size { // .nav-bar__btn .size
                font-size: 1.5em;
            }

        }
    }
</style>