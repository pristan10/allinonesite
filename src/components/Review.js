import React, { Component } from 'react'
import { Infoconsumer, InfoConsumer} from './context';
import ReviewCard from './ReviewCard';


 class Review extends Component {
    render() {
        return (
           <InfoConsumer>
               {data=>{
                   return data.reviews.map(person=>{
                       return <ReviewCard key={person.id} person={person} />
                   })
               }
               }
           </InfoConsumer>
        )
    }
}

export default Review;