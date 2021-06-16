import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import BadgeDetails from '../pages/BadgeDetails'
import BadgeEdit from '../pages/BadgeEdit'

function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App