<template>
    <div class="nav-bar">
        <a class="nav-bar__btn" href="#">
            <font-awesome-icon icon="bars"></font-awesome-icon>
            <br>list
        </a>
        <a class="nav-bar__btn" href="#">
            <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
            <br>map
        </a>
        <a class="nav-bar__btn" href="#">
            <font-awesome-icon icon="cog"></font-awesome-icon>
            <br>settings
        </a>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">
    .nav-bar {
        width: 100%;
        background-color: #ffffff;
        overflow: auto;
        text-align: center;
        color: #999999;
        font-size: 25px;
        bottom: 0;
        left: 0;
        position: fixed;
        padding-top: 3px;
        border-top: 3px;
        border-top-style: ridge;
        border-top-color: #006633;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2), 0 10px 25px 0 rgba(0, 0, 0, 0.19);
        display: block;
        margin: 0 auto;

        &__btn {
            text-decoration: none;
            width: 32%;
            color: #999999;
            padding: 0px;
            float: left;
            border-right: 4px;
            border-right-style: dotted;

            &:focus {
                color: #006633;
                border-right-color: #999999;
            }

            &:hover {
                color: #009933;
            }

            &:last-child {
                border: none;
            }
        }
    }
</style>