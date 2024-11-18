import React from 'react'
import styled from 'styled-components'
import Profile from '../assets/hourglass-ipad.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 100px 0; */
  min-height: 100vh;
  color: var(--about-content);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  span {
    font-weight: 700;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  gap: 4rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    margin-inline: 200px;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 450px;
    width: auto;
    object-fit: cover;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 700px) {
      height: 300px;
    }

    @media screen and (max-width: 480px) {
      height: 250px;
    }
  }
`

const Content = styled.div`
  width: 90%;

  a {
    text-decoration: underline;
  }
`

const About = () => {
  return (
    <Container id='about'>
      <Wrapper>
        <ImgWrap>
          <img src={Profile} alt='profile' />
        </ImgWrap>
        <Content>
          <h2># About</h2>
          <h1>Hourglass: focus through art</h1>
          <p>
          Hourglass is an innovative focus and art application, designed to encourage users to set aside their devices and concentrate on their tasks. By melding the beauty of geometric art with the functionality of a timer, Hourglass transforms the focus experience into something captivating and less taxing. 
          </p>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default About
