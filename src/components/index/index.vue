<template>
       <div>
            <div :class="price?'price':'show'">
                <p @click="add()">价格最高</p>
                <p @click="miuts()">价格最低</p>
            </div>
            <ul>
                <li v-for="item in data">
                    <p>{{item.carName}}</p>
                    <p>{{item.price}}</p>
                </li>
            </ul>

       </div>

</template>
<script>
    import axios from "axios"
    import bus from "../../common/js/commonVue"

export default {
   data(){
       return{
           data:[],
           price:false,
           arr:null
       }
   },
   created(){

   },
   mounted(){
        axios.get("/getsort").then(res=>{
           this.data = res.data
        }).then(()=>{
          this.data = this.$route.params.name?this.$route.params.name:this.data
        })
   },
   methods:{
      add(){
        this.data.sort((a,b)=>{
          return b.price.split('-')[0]-a.price.split('-')[0]
        })
      },

      miuts(){
        this.data.sort((a,b)=>{
          return a.price.split('-')[0]-b.price.split('-')[0]
        })
      }
   },

   watch:{

   }
}
</script>
<style scoped>

     ul li{
        padding:0 .1rem;
        border-radius: 10px;
        margin-top:10px;
    }
    p:nth-child(1){
        background: skyblue;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    p:nth-child(2){
        background: #fafafa;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
   p{
        height: .3rem;
        line-height: .3rem;
        text-indent: 1em;
    }
    div{
      position:relative;
    }
    .price{
        width: 100%;
        height: 100%;
        background: #ccc;
        position:absolute;
        left:0;
        top:0;
        display:none;
    }
    .show{
      display:block;
    }
</style>

