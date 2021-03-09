<template>
    <div class="popup" :class="{popup__active: isOpen}">
        <div class="popup__close">
            <div @click="this.$store.commit('setOpen')" class="popup__close__btn"></div>
        </div>
        <input type="text" placeholder="Введите e-mail" class="popup__eMail">
        <input type="password" placeholder="Введите пароль" class="popup__password">
        <div class="popup__btns">
            <button class="popup__btns__SignIn" @click="logHandler">Войти</button>
            <button class="popup__btns__Registr" @click="regHandler">Регистрация</button>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase/app'

export default {
    props: {
        isOpen: Boolean,
    },
    methods: {
        async regHandler() {
           try {
                this.eMail = document.querySelector('.popup__eMail').value;
                this.password = document.querySelector('.popup__password').value;
                await firebase.auth().createUserWithEmailAndPassword(this.eMail, this.password);
           } catch(e) {
               console.log(e);
           }
        },
       async logHandler() {
             try {
                this.eMail = document.querySelector('.popup__eMail').value;
                this.password = document.querySelector('.popup__password').value;
                await  firebase.auth().signInWithEmailAndPassword(this.eMail, this.password);
                this.$store.commit('setLogin');
                this.$store.commit('setOpen');
           } catch(e) {
               console.log(e);
           }       
        },
    },
    date() {
        return {
            eMail: '',
            password: '',
        }
    },
}
</script>

<style lang="scss">
.popup {
    position: fixed;
    width: 300px;
    height: 220px;
    background-color: burlywood;
    z-index: 10;
    top: 72px;
    left: 34%;
    display: none;
    border-radius: 0 0 20% 20%;
    
    &__active {
        display: block;
    }
    &__eMail {
        display: block;
        margin: 40px auto 10px;
        padding: 6px;
    }
    &__password {
        display: block;
        margin:  0 auto 10px;
        padding: 6px;
    }
    &__btns {
        display: flex;
        width: 185px;
        margin: 30px auto;

        &__SignIn {
            width: 148px;
            height: 36px;
            background-color: #fe2c55;
            color: white;
            border: none;
            font-size: 16px;
            line-height: 22px;
            margin-right: 10px;
          &:hover {
            background-color: #e42c55;
        }
        }
    }
    &__close {
        
        border: 2px solid gray;
        background-color: #fff;
        position: absolute;
        top: 7px;
        right: 7px;

        &__btn {
            background-color: red;
            width: 20px;
            height: 20px;
            margin: 3px;
        }    
    }
}

</style>