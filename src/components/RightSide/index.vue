<template>
    <div class="rightSide">
        <div v-for="item in items" :key="item">
        <Card />
        </div>
    </div>
</template>

<script>
import Card from "./Card"


export default {
    components:{
        Card,
    },
     data ()  {
        return {
            items: [1, 2, 3, 4, 5, 6]
    }       
    }
}
</script>


<style lang="scss">
.rightSide {
    margin-right: 30px;
    margin-left: auto;
}
</style>