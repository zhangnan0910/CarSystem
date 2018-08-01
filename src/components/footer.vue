<template>
    <footer>
        <ul>
            <li v-for="item in footerlist">{{item.tit}}</li>
        </ul>
    </footer>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            footerlist:null
        }
    },
    mounted(){
        this.getfooter();
    },
    methods:{
        getfooter(){
            axios.get("/getfooter").then(res=>{
                 this.footerlist = res.data
            })
        }
       
    }
}
</script>
