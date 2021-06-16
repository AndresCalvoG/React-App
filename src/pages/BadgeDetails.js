import React from 'react'
import './styles/BadgeDetails.css'

import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import { thisTypeAnnotation } from '@babel/types'

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try{
            const data = await applicationCache.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading:false, data: data })
        }catch(error){
            this.setState({ loading:false, error: error })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error} />
        }

        return(
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails