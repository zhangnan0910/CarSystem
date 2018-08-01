<template>
        <ul>
           <li v-for="(item,index) in datalist" @click="change(item)"  >
                {{item}}
            </li>
        </ul>

</template>
<script>
import axios from "axios"
import bus from "../../common/js/commonVue"

export default {

    data(){
        return{
            // 总数据
            data:null,
            // 车系品牌
            datalist : [],
            // 车系品牌下系列的数据
            carlist:null
        }
    },
    mounted(){
        axios.get("/getlist").then(res=>{
                this.data = res.data
                this.data.map(key=>{
                    key.map(res=>{
                        this.datalist.push (res.carClass)
                    })
                })
            })
    },
    methods:{
        change(item){
            // this.data 所有的数据
            this.data.map(key=>{
                // key 每个车系的所有数据
                key.map(res=>{
                // 判断item 当前点击元素的值 == 车系的某个品牌时
                    if(item == res.carClass){
                        // this.carlist = 当前品牌下的所有车系
                        this.carlist = res.carList
                        // 跳转路由时将值传过去
                        this.$router.push({
                            name:"Index",
                            params:{
                                name:this.carlist
                            }
                        })
                    }
                })
            })
        },

    }
}
</script>
<style scoped>
    li{
        height: .3rem;
        border-bottom: 1px solid #ccc;
        line-height: .3rem;
        padding-left: .1rem;
    }

</style>
