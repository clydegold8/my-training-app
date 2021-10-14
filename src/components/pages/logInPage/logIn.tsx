// eslint-disable-next-line no-use-before-define
import React from 'react'
import LogInForm from '../../templates/loginForm'
import { Grid, Image } from 'semantic-ui-react'
import LogoHead from '../assets/images/LogoHead.png'
import {
  StyledGridLogoColumn,
  StyledGridFormColumn
} from './style/loginPage.styled.component'

const LogInPage = () => {
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridLogoColumn width={16}>
            <Image centered src={LogoHead} />
            <h1>ToDoish</h1>
            <p>Do your wish, very easyish</p>
          </StyledGridLogoColumn>
        </Grid.Row>
        <Grid.Row>
          <StyledGridFormColumn width={16}>
            <LogInForm />
          </StyledGridFormColumn>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default LogInPage
