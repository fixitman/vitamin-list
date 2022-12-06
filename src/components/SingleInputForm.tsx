import React, { MouseEventHandler, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-color: bisque;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 2em;
  padding: 1em;
  border: 2px solid blue;
  border-radius: 1em;
`

const TextInput = styled.input`
  padding: .5em;
  flex: 1;
`

const Button = styled.button`
background-color: pink;
  border: 1px solid ;
  border-color: red ;
  border-radius: 1em;
  padding: .5em;
  margin-left: .5em;
  
`

export interface SingleInputFormProps {
  handleSubmit: React.FormEventHandler
}


const SingleInputForm = ({ handleSubmit }: SingleInputFormProps) => {

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <TextInput id='text' type='text' />
        <Button type='submit' >+</Button>
      </Wrapper>
    </form>
  )
}

export default SingleInputForm