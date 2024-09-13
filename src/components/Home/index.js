import { Component } from "react";
import JobCards from "../JobCards";
import Header from "../Header";
import './index.css'
class Home extends Component{
    render(){
        return(
            <div className="bg-home">
                <Header/>
                <JobCards/>
            </div>
        )
    }
}
export default Home