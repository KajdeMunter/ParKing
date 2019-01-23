<template>
    <div>
        <font-awesome-icon icon="cog" class="hdr"></font-awesome-icon>
        <h1>Settings</h1>

        <div class="avatar-wrapper">
            <img src="../assets/Avatar.png" alt="Avatar" class="avatar">
        </div>
        <div class="setting-email">
            {{ email }}
        </div>
        <div class="setting-logout">
            <router-link to="/login" class="btn btn-danger">Logout</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data() {
        	return {
		        email: JSON.parse(localStorage.getItem('user')).email,
	        }
        }
    };
</script>

<style lang="scss">
    .avatar {
        height: 200px;

        &-wrapper {
            width: 100%;
            margin-bottom: 20px;
        }
    }

    .setting-logout {
        background: #006633;
        padding: 10px;
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
</style>