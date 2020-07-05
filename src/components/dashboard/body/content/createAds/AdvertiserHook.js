import  { Component } from "react";
import Axios from "axios";

class AdvertiserHook extends Component{

    constructor(props){
        super(props);
        this.state ={
            page:1,
            percent:3,
            color: '#3FC7FA',
            zoom: 13,
            // maptype: 'roadmap',
            place_formatted: '',
            place_id: '',
            place_location: '',
            questions:{
                name:'',
                authors:[],
                country:'',
                publisher:'',
                mediaType:'',
                platform:'',
                manualPlatform:'',
                devices:'',
                brand:'',
                versions:'',
                technologies:'',
                techChoice:'',
                numberofPages:'',
                campaign:'',
                goal:'',
                age1:'',
                age2:'',
                landingPage:'',
                gender:'empty',
            } 
            
        }
        this.changeState = this.changeState.bind(this);
        this.onChangeData= this.onChangeData.bind(this)
    }


    componentDidMount(){


        console.log("AdvertiserHooks",this.props)
    }


    changeState() {


            const value = parseInt(Math.random() * 100, 10);
            this.setState({
                percent: value,
                // color: colorMap[parseInt(Math.random() * 3, 10)],
                // page:this.state.page +1
            });

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


     handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState(value);
      };


    onNext=(e)=>{
        // console.log("Before")
        const{
            name,
            publisher,
            campaign,
            goal,
            age,
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
        

        if(this.state.page!==0 ){
            this.changeState()
            this.setState({page:this.state.page +=1})
        }
        //     if(page1NotEmpty){
        //         errMessage()
        //         setTimeout(empty,5000)
        //     }
        //     else if(!page1NotEmpty){
        //
        //         this.setState({page:this.state.page +1})
        //
        //     }
        // }else if(this.state.page===2){
        //     if(page2NotEmpty){
        //         errMessage()
        //         setTimeout(empty,5000)
        //     }else if(!page2NotEmpty){
        //         this.setState({page:this.state.page +1})
        //     }
        // }

        // alert("Click")

    };


    onBack=(e)=>{
        if(this.state.page > 1){
            this.setState({page:this.state.page -=1})
        }
    };

    

}
export default AdvertiserHook