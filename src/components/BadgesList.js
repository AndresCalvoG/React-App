import React from 'react'
import { Link } from 'react-router-dom';

import './styles/BadgesList.css'
import '../global.css'
import Gravatar from './Gravatar'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('')
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() =>{ 
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
        })
        setFilteredBadges(result)
    }, [badges, query])
    return { query, setQuery, filteredBadges}
}

function BadgesList(props) { 
    const badges = props.badges
    const { query, setQuery, filteredBadges} = useSearchBadges(badges)

        if(filteredBadges.length === 0){
            return(
                <div>
                    <div className="form-group">
                        <label>Filter Badges</label>
                        <input type="text" className="form-control mb-4" 
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
                    <h3>No encontramos ningun badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        create new badge
                    </Link>
                </div>
            )
        }
        return(
            <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control mb-4" 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
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

export default BadgesList