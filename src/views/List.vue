<template>
    <div id="list">
        <font-awesome-icon icon="bars" class="hdr"></font-awesome-icon>
        <h1>List</h1>
        <nav>
            <ul class="fav-icon">
                <li v-for="i in (10)">Wijnhaven 99, 3011 WN Rotterdam
                    <button>
                        <font-awesome-icon icon="heart" class="icon"></font-awesome-icon>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "List",
    }
</script>

<style scoped lang="scss">
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
        border-bottom: #006633 1px;
        border-bottom-style: solid;
        margin: 1px;
        padding: 40px;
        font-size: 1em;
        list-style-type: none;
        background-color: #ffffff;


    }

    .icon {
        color: #7e838c;
        font-size: 1em;
        position: relative;
        alignment: center;
        margin-bottom: 5px;

    }


    button {
        position: relative;
        color: #7e838c;
        float: right;
        size: 20px;
        border: none;
        background: none;
        font-size: 1.5em;
        alignment: center;
        padding-bottom: 10px;
        margin-bottom: 10px;

    }

    h1 {
        color: #ffffff;
        display: inline;
        position: relative;
    }

    .hdr {
        color: #ffffff;
        font-size: 2em;
        position: relative;
        right: 20px;
    }


    @media only screen and (max-width: 366px) {
        li {
            padding: 30px 10px 30px 10px;
        }
    }
</style>