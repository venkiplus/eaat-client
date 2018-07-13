import React from 'react'
import { CounterContainer,HomeContainer } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/counter" component={CounterContainer} />
      </Container>
    </Router>
  )
}

export default Routes
