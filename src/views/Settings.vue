<template>
    <div>
        <h1>Settings</h1>
        <br>
        <img src="../assets/Avatar.png" alt="Avatar" class="avatar">
        <h2>Hi name!</h2>
        <p>example@email100.com</p>
        <p>Account information</p>
        <p>User Agreement</p>
        <p>Report a bug</p>
        <p>
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
        background-size: 100%;
    }

</style>