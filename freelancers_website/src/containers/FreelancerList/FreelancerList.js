import React, {Component} from 'react';
import Freelancer from '../../components/Freelancer/Freelancer';

class FreelancerList extends Component {
    state = {
        freelancers : [
            {id: 1, name:  "Roberto", occupation: "Content Team Member", description: "description"},
            {id: 2, name:  "Sara", occupation: "Sketchup Expert", description: "description"}
        ]
    }
    render() {
        return (
            <section >
                {this.state.freelancers.map((item, index) => {
                    return <Freelancer 
                        name={item.name}
                        key={item.id}
                        imagePath={require('../../images/profile.jpg')}
                        occupation={item.occupation}
                        description={item.description}/>
                })}
            </section>
        )
    }
}

export default FreelancerList;