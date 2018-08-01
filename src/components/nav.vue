<template>
    <nav>
        <ul>
            <li v-for="item in navlist" @click="change(item.tit)">
                <router-link :to="item.router">
                    {{item.tit}}
                </router-link>
            </li>
        </ul>

    </nav>
</template>
<script>
import axios from "axios"
    export default {
        data(){
            return{
                navlist:null
            }
        },
        mounted(){
            this.getnav();

        },
        methods:{

            getnav(){
                axios.get("/getnav").then(res=>{
                    this.navlist = res.data
                })
            },
            change(data){

                if(data === "排序"){
                    //console.log(this.$route)
                }
            }
    }
    }


</script>
<style scoped>
    a{
        display: block;
        color: #000;
    }

</style>

