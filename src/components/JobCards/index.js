import { Component } from "react"
import {Link} from 'react-router-dom'
import './index.css'
class JobCards extends Component{
    state = {
        page:1,
        jobs:[],
    }
    componentDidMount(){
        this.getData()
    }
    getData = async () =>{
        const {page} = this.state
        const url = `https://testapi.getlokalapp.com/common/jobs?page=${page}`
        const options = {
            method:'GET',
        }
        const res = await fetch(url,options)
        if(res.ok===true){
            const data = await res.json()
            console.log(data)
            const updatedData = data.results.map(each=>({
                id:each.id,
                title:each.title,
                jobLocation:each.job_location_slug,
                salaryMax:each.salary_max,
                salaryMin:each.salary_min,
                phoneData:each.whatsapp_no,

                content:each.content,
                jobCategory:each.job_category,
                companyName:each.company_name,
                jobRole:each.job_role,
                img:each.creatives[0].thumb_url,

            }))
            this.setState({jobs:updatedData})
        }
    }
    loadMore = () =>{
        this.setState(prevState=>({page:prevState.page+1}),this.getData)
    }
    back = () =>{
        this.setState(prevState=>({page:prevState.page-1}),this.getData)
    }
    bookmarkJob = (job) => {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        
        // Check if the job is already bookmarked
        const isBookmarked = bookmarks.some((savedJob) => savedJob.id === job.id);
        
        if (!isBookmarked) {
          bookmarks.push(job);
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
          alert('Job bookmarked successfully!');
        } else {
          alert('This job is already bookmarked.');
        }
      };
    render(){
        const {jobs,page} = this.state
        console.log(jobs)
        return(
            <div className="job-card">
                <ul className="unorder">
                {jobs.map((job) => (
                <li key={job.id} className="job-card">
                    <Link to={`/job/${job.id}`}>
                    <img src = {job.img} alt = {job.jobRole} className="main-img"/>
                    <h3>{job.title}</h3>
                    <p>Location : {job.jobLocation}</p>
                    <p>Salary : {job.salaryMin} - {job.salaryMax}</p>
                    <p>Contact : {job.phoneData}</p>   
                    </Link>
                    <button onClick={() => this.bookmarkJob(job)}>Bookmark</button>
                </li>
                ))}
                </ul>
                <div className="butn">
                {(page>1&&page<4)&&(<button onClick={this.back}>previous</button>)}
                {page<4&&(<button onClick={this.loadMore}>Load More</button>)}
                </div>
            </div>
        )
    }
}
export default JobCards