import React, {Component} from 'react';
import Job from '../../components/Job/Job';
import axios from '../../axios-jobs';
import Spinner from '../../components/Spinner/Spinner';

class JobList extends Component {

    state = {
        jobs: [],
        loading: true
    }

    componentDidMount() {
        axios.get( '/jobs.json')
            .then(response => {
                const fetchedPosts = [];
                for (let key in response.data) {
                    fetchedPosts.push({
                        ...response.data[key],
                    id: key});
                }
                this.setState({loading: false, jobs: fetchedPosts});
            })
            .catch (err => {
                this.setState({loading: false});
            })
    }


    render() {
        let jobList = <Spinner/>

        if(this.state.jobs) {  
            jobList =  <section className="List">
                 {this.state.jobs.map((item, index) => {
                    return <Job 
                        title={item.jobPost.title}
                        key={index}
                        type={item.jobPost.type}
                        salary={item.jobPost.salary}
                        level={item.jobPost.level}
                        description={item.jobPost.description}/>
                })}
            </section>
        }
    
        return (
            <div>
            {jobList}
            </div>
        )
    }
}

export default JobList;