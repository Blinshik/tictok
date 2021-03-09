<template>
    <div class="rightSide">
        <div v-for="item in $store.getters.getItems" :key="item.id" >
            <Card  :items="item.url" />
        </div>
    </div>
</template>

<script>
import Card from "./Card"


export default {
    components:{
        Card,
    },
    
}
</script>


<style lang="scss">
.rightSide {
    margin-right: 30px;
    margin-left: auto;
}
</style>