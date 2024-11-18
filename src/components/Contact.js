import React from 'react'
import styled from 'styled-components'
import Connect from '../assets/mail.svg'
import { Button } from './Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--contact-bg);
  color: var(--contact-content);
  padding-bottom: 100px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  gap: 4rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    margin-inline: 200px;
    height: 100%;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 400px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      width: 300px;
    }
  }
`

const Content = styled.div`
  width: 100%;
`

const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper>
        <Content>
          <h2># Contact</h2>
          <h1>Provide Feedback</h1>
          <p>
            If you have any feedback or good suggestions, please feel free to email us: hourglass.artfocus@gmail.com.
          </p>
          <Button>
            <a
              href='mailto:hourglass.artfocus@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contact
            </a>
          </Button>
        </Content>
        <ImgWrap>
          <img src={Connect} alt='Mail' />
        </ImgWrap>
      </Wrapper>
    </Container>
  )
}

export default Contact
