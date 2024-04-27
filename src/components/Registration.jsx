import React, { useState } from "react"
import { useForm } from "react-hook-form"
import cross from "../assets/free-icon-cross-sign-8212742.png"
import locker from "../assets/lock.png"
import update from "../assets/updateImage.png"
import reloader from "../assets/reload.jpg"

export default function Registration({ onNext }) {

  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");

  const handleClick = () => {
    if(step === 1) {
      setStep(0);   
    } else {
      setVisible(!visible);
    }
  };

  const handleSubmitForm = (data) => {
    if (step === 0) {
      if (data && data.regionCode && data.phoneNumber) {
        const phoneNumberValue = data.regionCode + " " + data.phoneNumber;

        const ValidFormat = /^\d+$/.test(data.phoneNumber);
        const ValidLength = data.phoneNumber.length >= 1 && data.phoneNumber.length <= 9;

        if (ValidFormat && ValidLength) {
          console.log("PhoneNumber:", phoneNumberValue);
          setPhoneNumber(phoneNumberValue);
          setPhoneNumberError("");
          setStep(1);
        } else {
          setPhoneNumberError("Enter valid phone number");
        }
      }
    } else if (step === 2) {
      if (data && data.email && data.password) {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
        if (!emailFormat) {
          setConfirmationError("Enter a valid email address");
          return;
        }

        const passwordLength = data.password.length >= 12;
        const passwordFormat = /^[0-9]\d+$/.test(data.password);
        if (!passwordLength || !passwordFormat) {
          setConfirmationError("Password must be at least 12 characters long and contain only digits");
          return;
        }

        console.log("Email:", data.email);
        console.log("Password:", data.password);
      }
    }
  };

  const handleConfirmationSubmit = (data) => {
    if (data.confirmCode === "1234") {
      console.log("Confirmation successful");
      setConfirmationError("");
      setStep(2);
    } else {
      setConfirmationError("Invalid confirmation code. Please enter 1234");
    }
  };

  const handleRegistration = () => {
    onNext();
  };

  const { register, handleSubmit } = useForm();
  const regionCode = [
    { code: "+380" },
    { code: "+1" },
    { code: "+220" },
    { code: "+45" },
    { code: "+7" },
    { code: "+998" },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      <div style={{ marginTop: '20px', marginLeft: '180px', width: '20%', height: '50%'}}>
          <div style={{ marginTop: '10px'}}>
            <div style={{ display: 'flex'}}>
              <div style={{ display: 'flex'}}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#007AFF'}}></div>
                  <div style={{ width: '35px', height: '2px', margin: '10px', backgroundColor: step >= 1 ? '#007AFF' : 'rgba(27, 21, 24, 0.33)' }}></div>
              </div>
              <div style={{ display: 'flex'}}>
              <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '1px solid #B9B9C3',
                  backgroundColor: step >= 1 ? '#007AFF' : 'transparent',
              }}></div>
                  <div style={{ width: '35px', height: '2px', margin: '10px', backgroundColor: step >= 2 ? '#007AFF' : 'rgba(27, 21, 24, 0.33)' }}></div>
              </div>
              <div>
                <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1px solid #B9B9C3',
                    backgroundColor: step >= 2 ? '#007AFF' : 'transparent',
                }}/>
              </div>
            </div>
        </div>
      </div>

      <div style={{
        display: 'block',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '145px',
        margin: '0 auto',
        marginLeft: '180px'
      }}> 

        <h1 style={{ fontWeight: '800' }}> Registration </h1>

        <p style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 0.5)'}}> 
          Fill in the registration data. It will take a couple of minutes.
          All you need is a phone number and e-mail.
        </p>

      {step === 0 && (
        <form onSubmit={handleSubmit(handleSubmitForm)}>

          <div style={{
            display: visible ? 'flex' : 'none',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '10px'
          }}> 
            <img src={locker} style={{ width: '40px', height: '35px', marginBottom:'10px', marginRight:'10px' }}/>
            <p style={{ fontSize: '16px'}}>
              We take privacy issues seriously. You can be sure
              that your personal data is securely protected.
            </p>
            <img src={cross} style={{ height: '35px', width: '35px', marginBottom:'10px', marginRight:'10px', cursor: 'pointer' }} onClick={handleClick}  />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid rgb(0, 0, 0, 0.1)',
            width: '95%',
            height: '100%',
            marginTop: '20px',
            borderRadius: '5px',
            padding: '10px'
          }}>
            <p style={{ textAlign: 'left', margin: "20px", marginBottom: '30px', fontSize: '18px' }}> Enter your phone number </p>
            
            <div style={{
              display: 'flex',
              position: 'relative',
              marginBottom: '10px'
            }}>
              <select {...register("regionCode")} style={{
                width: '20%',
                padding: '5px',
                borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                borderTop: 'none',
                borderInline: 'none',
                marginRight: '10px',
                fontSize: '18px',
                marginLeft: '15px'
              }}>
                <option value=""/>
                {regionCode.map((region) => (
                  <option key={region.code} value={region.code}>
                    {`${region.code}`}
                  </option>
                ))}
              </select>
              <input 
                placeholder='Enter phone number'
                {...register("phoneNumber")}
                style={{
                  width: '65%',
                  padding: '5px',
                  borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                  borderTop: 'none',
                  borderInline: 'none',
                  fontSize: '18px',
                }}
              />
            </div>
            <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px', marginLeft: '20px' }}>{phoneNumberError}</p>

          </div>
          <button type="submit" style={{
            display: 'block',
            width: '35%',
            height: '50px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            backgroundColor: '#FFFFFF',
            color: 'black',
            border: '1px solid black',
            borderRadius: '5px',
            marginTop: '30px'
          }}>
            Send Code
          </button>
        </form>
      )}

      {step === 1 && (
          <form onSubmit={handleSubmit(handleConfirmationSubmit)}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              border: '2px solid rgb(0, 0, 0, 0.1)',
              width: '95%',
              height: '100%',
              marginTop: '20px',
              borderRadius: '5px',
              padding: '10px'
            }}>
              <div style={{ marginLeft:'10px' }}>
              <p style={{ marginBottom: '-5px', fontSize: '20px',  }}>{phoneNumber}</p>
              <p style={{ fontSize: '17px', color: 'grey' }}> Number not confirmed yet </p>
              </div>
              <img src={update} style={{ width: '40px', height: '35px', justifySelf: 'end', marginTop:'auto', cursor: 'pointer'}} onClick={handleClick}/>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '30px'
            }}>
              <div style={{ marginRight: '16px', width: '300px' }}>
                <p>Confirm code</p>
                <input
                  style={{
                    width: '100%',
                    height: '40px',
                    borderBottom: "2px solid rgb(0, 97, 255, 0.3)",
                    borderTop: 'none',
                    borderInline: 'none',
                    letterSpacing: '0.1em',
                    fontSize: '20px',
                    lineHeight: '15px',
                    paddingLeft: '10px'
                  }}
                  {...register("confirmCode")}
                  placeholder=' — — — — '
                />
                <p style={{ fontSize: '14px', lineHeight: '20px', color: 'grey' }}> Confirm phone number with code from sms message </p>
                <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{confirmationError}</p>
              </div>
              <div style={{ display: 'flex', height: '32px', padding: '16px' }}>
                <img 
                style={{ height: '24px', width: '24px', marginRight: '8 px', fontWeight: '500' }}
                src={reloader}
                />
                <p style={{ color: 'rgba(0,122,255)', marginTop: '4px', marginLeft: '5px', fontSize: '17px' }}> Send again </p>
              </div>
            </div>

            <button type="submit" style={{
                display: 'block',
                width: '35%',
                height: '50px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                marginTop: '15px'
              }}>
                Confirm
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div style={{
              display: 'flex',
              border: '2px solid rgb(0, 0, 0, 0.1)',
              width: '95%',
              height: '100%',
              marginTop: '20px',
              marginBottom: '40px',
              borderRadius: '5px',
              padding: '10px'
            }}>
              <div style={{ marginLeft:'10px' }}>
                <p style={{ marginBottom: '-5px', fontSize: '20px',  }}>{phoneNumber}</p>
                <p style={{ fontSize: '17px', color: 'grey' }}> ✓ Number confirmed </p>
              </div>
            </div>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid rgb(0, 0, 0, 0.1)',
              width: '95%',
              height: '100%',
              marginTop: '40px',
              borderRadius: '5px',
              padding: '10px',
            }}>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <label> Enter your email </label>
                <input style={{
                  width: '95%',
                  height: '35px',
                  marginTop: '15px',
                  borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                  borderTop: 'none',
                  borderInline: 'none',
                  fontSize: '17px',
                  paddingLeft: '10px'
                }}
                 {...register("email")}
                />
                <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{confirmationError}</p>
              </div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <label> Set a password </label>
                <input style={{
                  width: '95%',
                  height: '35px',
                  marginTop: '15px',
                  borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                  borderTop: 'none',
                  borderInline: 'none',
                  fontSize: '17px',
                  paddingLeft: '10px'
                }}
                 {...register("password")}
                />
                <p style={{ color: 'green', fontSize: '14px', marginBottom: '10px' }}> ✓ Good password</p>
                <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{confirmationError}</p>
              </div>
            </div>
            <button 
              type="submit" 
              onClick={handleRegistration}
              style={{
                display: 'block',
                width: '35%',
                height: '50px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                backgroundColor: 'rgba(20, 100, 228, 0.8)',
                color: 'white',
                border: '1px solid rgba(20, 100, 228, 0.8)',
                borderRadius: '5px',
                marginTop: '15px'
              }}>
                Register Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}