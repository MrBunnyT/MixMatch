import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { FeatureWrapper } from '../../Components/Buttons'
import { SignInComponentProps, SignInWrapper, SignIn, SignInLabel, Input, InputFields, InputNames, SignInLinks, SignInButton } from './SignInStyles'
import { MyBG } from "../../Components/Common/MyBG"
import { StringKeyValue } from '../../Interfaces/Common'

const SignInComponent: React.FC<SignInComponentProps> = (props: SignInComponentProps) => {
  const [SignInData, setSignInData] = useState({Username:'',Password:''}as StringKeyValue)
  const [Update,setUpdate] = useState(false)
  const handleChange:CallableFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    SignInData[e.target.name]=e.target.value
    setSignInData(SignInData)
    setUpdate(!Update)
  }
  useEffect(() => {}, [Update])
  return (
    <MyBG>
      <Navbar />
      {console.log("rerender YEP")}
      <SignInWrapper>
        <SignIn>
          <SignInLabel>Sign In</SignInLabel>
          <Input>
            <InputFields isFilled={SignInData.Username!==''} type="text" name="Username"  onBlur={e=>handleChange(e)} autoComplete="off"></InputFields>
            <InputNames >Username</InputNames>
          </Input>
          <Input>
            <InputFields isFilled={SignInData.Password!==''} type="password" name="Password" onBlur={e=>handleChange(e)} autoComplete="off"></InputFields>
            <InputNames>Password</InputNames>
          </Input>
          <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
            <SignInLinks href="/Auth/Forgotpassword">Forgot Password?</SignInLinks>
            <SignInButton onClick={e=>console.log(SignInData)}>Sign In</SignInButton>
          </div>
          <FeatureWrapper>
            <span style={{fontSize:"2vh",marginTop:"2vh",marginRight:"2vh"}}>Not a member?</span>
            <SignInLinks href="/Auth/Signup">Sign Up</SignInLinks>
          </FeatureWrapper>
        </SignIn>
      </SignInWrapper>
    </MyBG>
  )
}

export default SignInComponent
