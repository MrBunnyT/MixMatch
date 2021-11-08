import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { StringKeyValue } from '../../Interfaces/Common'
import { Input, InputFields, InputNames, SignIn, SignInButton, SignInLabel, SignInWrapper } from './SignInStyles'
import { MyBG } from "../../Components/Common/MyBG"
import { FlexWrapper } from '../../Components/Common/Wrappers'

const SignUpComponent: React.FC = (props) => {
  const [SignUpData, setSignUpData] = useState({
    FirstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    DOB:''
  } as StringKeyValue)
  const [Update, setUpdate] = useState(false)
  const handleChange: CallableFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    SignUpData[e.target.name] = e.target.value
    setSignUpData(SignUpData)
    setUpdate(!Update)
  }
  useEffect(() => {}, [Update])
  return (
    <MyBG>
      {console.log(SignUpData)}
      <Navbar />
      <SignInWrapper>
        <SignIn style={{ height: '60vh' }}>
          <SignInLabel>Sign Up</SignInLabel>
          <div style={{display:'inline-flex'}}>
            <Input>
              <InputFields
                isFilled={SignUpData.FirstName !== ''}
                type="text"
                name="FirstName"
                onBlur={(e) => handleChange(e)}
                style={{ width: '90%' }}
              />
              <InputNames>First Name</InputNames>
            </Input>
            <Input>
              <InputFields
                isFilled={SignUpData.LastName !== ''}
                type="text"
                name="LastName"
                onBlur={(e) => handleChange(e)}
                style={{ width: '90%' }}
              />
              <InputNames>Last Name</InputNames>
            </Input>
          </div>
          <Input>
            <InputFields
              isFilled={SignUpData.UserName !== ''}
              type="text"
              name="UserName"
              onBlur={(e) => handleChange(e)}
            />
            <InputNames>Username</InputNames>
          </Input>
          <Input>
            <InputFields isFilled={SignUpData.Email !== ''} type="email" name="Email" onBlur={(e) => handleChange(e)} />
            <InputNames>Email</InputNames>
          </Input>
          <Input>
            <span style={{marginRight:"auto"}}>DOB</span>
            <InputFields
              isFilled={SignUpData.DOB !== ''}
              type="date"
              name="DOB"
              onBlur={(e) => handleChange(e)}
              style={{ width: '50%' }}
            />
          </Input>
          <FlexWrapper style={{flexDirection:'column',height:'auto'}}>
          <SignInButton>Sign Up</SignInButton>
          </FlexWrapper>
        </SignIn>
      </SignInWrapper>
    </MyBG>
  )
}

export default SignUpComponent
