import  { Component } from "react";
import Axios from "axios";

class AdvertiserHook extends Component{

    constructor(props){
        super(props);
        this.state ={
            page:1,
            questions:{
                name:'',
                authors:[],
                country:'',
                publisher:'',
                mediaType:'',
                numberofPages:'',
                campaign:'',
                goal:'',
                age:''
            } 
            
        }
    }


    componentDidMount(){
        console.log("AdvertiserHooks",this.props)
    }



    getQuestionData= async()=>{
        const questionURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
            const response =  await Axios.get(questionURL)
                console.log(response.data)
                const alluser = localStorage.setItem('User',JSON.stringify(response.data))
                console.log("API User", alluser)
                
         const alldata =JSON.parse( localStorage.getItem('User'));
        console.log("my User",alldata)
        console.log("index", alldata[0].name)



    }


    onChangeData =p=>(event)=>{
        this.setState({questions:{...this.state.questions,[p]: event.target.value}})
    };


    onNext=(e)=>{
        // console.log("Before")
        const{
            name,
            publisher,
            campaign,
            goal,
        }=this.state.questions;

        function errMessage(){
            const err = document.getElementById('errText')
            err.textContent = "please fill in all fields"
        }
        function empty() {
            const err = document.getElementById('errText')
            err.textContent = ""
        }

        // const page1NotEmpty= name==="" || publisher ==="";
        const page1NotEmpty= campaign==="" ;
        const page2NotEmpty= goal==="" ;
        

        if(this.state.page===1 ){
            if(page1NotEmpty){
                errMessage()
                setTimeout(empty,5000)
            }
            else if(!page1NotEmpty){
                this.setState({page:this.state.page +1})
            }
        }else if(this.state.page===2){
            if(page1NotEmpty){
                errMessage()
                setTimeout(empty,5000)
            }else if(!page2NotEmpty){
                this.setState({page:this.state.page +1})
            }
        }

        alert("Click")

    };


    onBack=(e)=>{
        if(this.state.page > 1){
            this.setState({page:this.state.page - 1})
        }
    };

    

}
export default AdvertiserHook