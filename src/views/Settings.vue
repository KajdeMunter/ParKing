<template>
    <div>
        <font-awesome-icon icon="cog" class="hdr"></font-awesome-icon>
        <h1>Settings</h1>
        <br>
        <img src="../assets/Avatar.png" alt="Avatar" class="avatar">
        <h2>Hi name!</h2>
        <p>example@email100.com</p>
        <p>Account information</p>
        <p>User Agreement</p>
        <p>Report a bug</p>
        <br>
        <p class="link">Build version 0.01</p>
        <p class="link">Open Source Licences</p>
        <p class="unq">
            <router-link to="/login" class="btn btn-danger">Logout</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Settings",
    };
</script>

<style lang="scss">
    h1 {
        color: #ffffff;
        display: inline;
        position: relative;
    }

    h2 {
        color: #ffffff;
    }

    .avatar {
        vertical-align: middle;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 20px;
        background-color: #ffffff;
        size: 1.5em;
    }

    p {
        color: #999999;
        background: #ffffff;
        background-size: 50%;
        alignment: left;
        padding: 20px;
        margin: 20px;
    }

    .hdr {
        color: #ffffff;
        font-size: 2em;
        position: relative;
        right: 20px;
    }

    .btn {
        color: #ffffff;
        padding: 10px;
        margin: 5px;
        background: #7e838c;
        border-color: #006633;

    }

    .link{
        background: #006633;
        color: #7e838c;
        padding: 5px;
        border: 5px #006633 solid;

    }

    .unq {
        background: #006633;

    }

</style>