import React from 'react'
import { Link } from 'react-router-dom';

import './styles/BadgesList.css'
import '../global.css'
import Gravatar from './Gravatar'

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No encontramos ningun badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        create new badge
                    </Link>
                </div>
            )
        }
        return(
            <div className="BadgesList">
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return(
                        <li key={badge.id} className="BadgesListItem">
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            {/* <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName}`} /> */}
                            <Gravatar className="BadgesListItem__avatar" email={badge.email} />
                            <div className="Badge-text">
                            <strong>
                            <p>{badge.firstName} {badge.lastName}</p>
                            </strong>
                            <p>{badge.twitter}</p>
                            <p>{badge.jobTitle}</p>
                            </div>
                            </Link>
                        </li>
                        )
                })
                }
            </ul>
            </div>
        )
    }
}

export default BadgesList