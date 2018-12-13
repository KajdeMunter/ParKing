<template>
    <div>
        <h1>Settings</h1>
        <br>
        <img src="../assets/Avatar.png" alt="Avatar" class="avatar">
        <h2>Hi {{account.user.firstName}}!</h2>
        <p>example@email100.com</p>
        <p>Account information</p>
        <p>User Agreement</p>
        <p>Report a bug</p>


        <em v-if="users.loading">Loading users...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users.items">
            <li v-for="user in users.items" :key="user.id">
                {{user.firstName + ' ' + user.lastName}}
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
            </li>
        </ul>
        <p>
            <router-link to="/login" class="btn btn-danger">Logout</router-link>
        </p>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "Settings",
        computed: {
            ...mapState({
                account: state => state.account,
                users: state => state.users.all
            })
        },
        created() {
            this.getAllUsers();
        },
        methods: {
            ...mapActions('users', {
                getAllUsers: 'getAll',
                deleteUser: 'delete'
            })
        }
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