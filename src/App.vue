<template>
    <div id="app">
        <font-awesome-icon icon="bars" class="hdr"></font-awesome-icon>
        <h1>Address list</h1>
        <nav>
            <ul class="fav-icon">
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>

                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
                <li>Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>

            </ul>
        </nav>
        <router-view></router-view>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
    import NavBar from './components/NavBar';

    export default {
        components: {NavBar}
    };
</script>

<style lang="scss">
    @import '~bootstrap-scss/bootstrap';

    h1 {
        color: #ffffff;
        display: inline;
        position: relative;

    }

    .fav-icon {
        color: #999999;
        float: left;
        width: 100%;
        margin: fill;
        padding-left: 0;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);


    }

    li {
        text-align: left;
        float: initial;
        border: #FFFFFF 1px;
        border-bottom-style: solid;
        border-top-style: solid;
        margin: 1px;
        padding: 30px;
        font-size: 1em;
        list-style-type: none;
        background-color: #ffffff;



    }

    .icon {
        color: #7e838c;
        font-size: 1em;


    }


    button {
        position: relative;
        color: #7e838c;
        float: right;
        size: 20px;
        border: none;
        background: none;
        font-size: 1.5em;

    }

    .hdr {
        color: #ffffff;
        font-size: 2em;
        position: relative;
        right: 20px;

    }


    #app {
        font-family: "Yu Gothic UI", "Yu Gothic UI Light", serif;
        font-feature-settings: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #006633
    }
</style>
