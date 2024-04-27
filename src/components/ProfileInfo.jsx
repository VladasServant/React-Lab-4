import React, { useState } from "react"
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import skype from "../assets/skype-black-icon.png"
import facebook from "../assets/facebook.png"

export default function ProfInf({onNext}) {
    
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const [step, setStep] = useState(0);
    const [date, setDate] = useState(new Date());

    const placeofBirth = [
        { place: "Paris, France"},
        { place: "Tokyo, Japan"},
        { place: "Rome, Italy"},
        { place: "Sydney, Australia"},
        { place: "Mexico City, Mexico"},
        { place: "Cape Town, South Africa"},
        { place: "London, United Kingdom"},
        { place: "Rio de Janeiro, Brazil"},
        { place: "Kyiv, Ukraine"},
        { place: "Dublin, Ireland"},
    ];

    const Countries = [
        { country: "France"},
        { country: "Japan"},
        { country: "Italy"},
        { country: "Australia"},
        { country: "Mexico"},
        { country: "UK"},
        { country: "USA"},
        { country: "Ukraine"},
        { country: "Ireland"},
    ];

    const handleFinale = () => {
        onNext();
    };

    const OnSubmit = (data) => {
        console.log(data, date)

        setStep(step + 1)
    }

    return (
        <div style={{ fontFamily: 'sans-serif' }}>

            <div style={{ marginTop: '20px', marginLeft: '180px', width: '20%', height: '50%', marginBottom: '-30px'}}>
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
                width: '55%',
                height: '145px',
                margin: '0 auto',
                marginLeft: '180px',
            }}> 

                <h1 style={{ fontWeight: '800' }}> Profile info </h1>

                <p style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 0.5)', marginBottom: '30px' }}>
                    Fill in the data for profile. It will take a couple of minutes.
                    you only need a passport.
                </p>

            {step === 0 && (
                <form onSubmit={handleSubmit(OnSubmit)}>
                <div style={{
                    display: 'flex', 
                    justifyContent: 'left',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <label style={{ fontSize: '16px', marginBottom: '20px'}}>
                        <input style={{ width: '16px', height: '16px', marginRight: '10px'}}
                        type="checkbox"
                        {...register("agree", {required: true})}               
                        />
                        I agree with
                        <label style={{ fontSize: '16px', color: 'rgba(20, 100, 228, 0.9)', fontWeight: '600', cursor: 'pointer'}}> Terms of use</label>
                        {errors.agree && <p style={{ color: 'red', fontSize: '14px', marginBottom: '-10px' }}>Please agree to the terms</p>}
                    </label>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid rgb(0, 0, 0, 0.1)',
                    width: '95%',
                    height: '100%',
                    marginTop: '20px',
                    borderRadius: '5px',
                    paddingLeft: '20px',
                    paddingTop: '10px'
                }}>
                    <h2 style={{ marginBottom: '-10px'}}>Personal data</h2>
                    <p style={{ color: 'rgba(0, 0, 0, 0.5)'}}>Specify exactly as in your passport</p>

                    <div style={{ marginTop: '10px' }}>
                        <label> First name </label>
                        <input style={{
                        width: '90%',
                        height: '35px',
                        marginTop: '15px',
                        borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                        borderTop: 'none',
                        borderInline: 'none',
                        fontSize: '17px',
                        paddingLeft: '15px'
                        }}
                        {...register("name", {required: "Name required"}) }
                        />
                        {errors.surname && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>Please enter your first name</p>}
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <label> Second name </label>
                        <input style={{
                        width: '90%',
                        height: '35px',
                        marginTop: '15px',
                        borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                        borderTop: 'none',
                        borderInline: 'none',
                        fontSize: '17px',
                        paddingLeft: '15px'
                        }}
                        {...register("surname", {required: "Surname required"})}
                        />
                        {errors.surname && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>Please enter your second name</p>}
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateRows: '2',
                        gridTemplateColumns: '2',
                        justifyContent: 'left',
                        marginLeft: '20px'
                    }}>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '150px'}}>
                            <p style={{ fontSize: '16px', textAlign: 'left'}}>Date of birth </p>
                            <p style={{ fontSize: '16px', textAlign: 'left'}}>Place of birth </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', marginBottom: '20px', marginLeft: '-10px'}}>
                            
                            <DatePicker selected={date} onChange={(date) => setDate(date)} />

                            <select {...register("placeofBirth")} style={{ 
                                width: '160px',
                                borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                                borderTop: 'none',
                                borderInline: 'none',
                                fontSize: '18px',
                            }}>
                                <option value=""/>
                                {placeofBirth.map((PlaceOfBirth) => (
                                <option key={PlaceOfBirth.place} value={PlaceOfBirth.place}>
                                    {`${PlaceOfBirth.place}`}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

            <div style={{ 
                display: 'flex',
                border: '2px solid rgb(0, 0, 0, 0.1)',
                marginTop: '20px',
                marginBottom: '30px',
                borderRadius: '5px',
                padding: '5px'
            }}>
                <div style={{ marginLeft:'10px' }}>
                    <p style={{ marginBottom: '-5px', fontSize: '20px',  }}>123-45-678</p>
                    <p style={{ fontSize: '17px', color: 'grey' }}> ✓ Your ITIN </p>
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
                }}>
                    Go next →
                </button>
            </form>
            )}
            
            {step === 1 && (
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '2px solid rgb(0, 0, 0, 0.1)',
                        width: '90%',
                        height: '100%',
                        marginTop: '20px',
                        borderRadius: '5px',
                        paddingLeft: '20px',
                        paddingTop: '10px'
                    }}>
                        <h2 style={{ marginBottom: '-10px'}}>Contacts</h2>
                        <p style={{ color: 'rgba(0, 0, 0, 0.5)'}}>These contacts are used to inform about orders</p>

                        <div style={{ }}>
                            <img src={email} style={{ width: '5%', height: '5%', color: 'grey'}}/>
                            <input style={{
                            width: '84%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '10px'
                            }}
                            {...register("Email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address"
                                }
                            })}
                            />
                            {errors.Email && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.Email.message}</p>}
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <img src={phone} style={{ width: '4%', height: '4%'}}/>
                            <input style={{
                            width: '85%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '10px'
                            }}
                            {...register("Phonenumber", {
                                required: "Phone number is required",
                                pattern: {
                                value: /^\+?[0-9]{1,3}[- ]?\d{9}$/,
                                message: "Invalid phone number"
                               }
                            })}
                            />
                            {errors.Phonenumber && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.Phonenumber.message}</p>}
                        </div>

                        <h2 style={{ marginTop: '40px', marginBottom: '-10px'}}>Socail network</h2>
                        <p style={{ color: 'rgba(0, 0, 0, 0.5)'}}>Indicate the desired communication method</p>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center'}}>
                            <img src={skype} style={{ width: '5%', height: '5%', marginLeft: '20px'}}/>
                            <p style={{ fontSize: '23px'}}> Skype </p>
                            <input style={{
                            width: '40%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '15px',
                            marginLeft: '90px'
                            }}
                            {...register("SkypeProf", {
                                required: "Skype profile required",
                                validate: {
                                    hasAtSymbol: value => value.includes('@') || "Please enter a valid Skype profile"
                                }
                            })}
                            placeholder="@profile"
                            />
                            {errors.SkypeProf && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.SkypeProf.message}</p>}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center'}}>
                            <img src={facebook} style={{ width: '8%', height: '8%', marginLeft: '13px'}}/>
                            <p style={{ fontSize: '22px'}}> Facebook </p>
                            <input style={{
                            width: '41%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '15px',
                            marginLeft: '47px'
                            }}
                            {...register("FacebookProf", {
                                required: "Facebook profile required",
                                validate: {
                                    hasAtSymbol: value => value.includes('@') || "Please enter a valid Facebook profile"
                                }
                            })}
                            placeholder="@profile"
                            />
                            {errors.FacebookProf && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.FacebookProf.message}</p>}
                        </div>

                        <p style={{
                            color: 'rgba(20, 100, 228, 0.9)',
                            marginLeft: '20px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginBottom: '30px'
                        }}>
                            + Add More
                        </p>
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
                        marginTop: '40px'
                    }}>
                        Go next →
                    </button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '2px solid rgb(0, 0, 0, 0.1)',
                        width: '95%',
                        height: '100%',
                        marginTop: '20px',
                        borderRadius: '5px',
                        paddingLeft: '20px',
                        paddingTop: '10px'
                    }}>
                        <h2 style={{ marginTop: '20px', marginBottom: '-10px'}}> Delivery address</h2>
                        <p style={{ color: 'rgba(0, 0, 0, 0.5)'}}> Used for shipping orders</p>

                        <div style={{ marginTop: '10px' }}>
                            <label> Address </label>
                            <input style={{
                            width: '90%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '15px'
                            }}
                            {...register("address", {
                                required: "Address required",
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message: "Please enter a valid address"
                                }
                            })}
                            />
                            {errors.address && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.address.message}</p>}
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <label> City </label>
                            <input style={{
                            width: '90%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '15px'
                            }}
                            {...register("city", {
                                required: "City required",
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message: "Please enter a valid city name"
                                }
                            })}
                            />
                            {errors.city && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.city.message}</p>}
                        </div>

                        <div style={{display: "flex", flexDirection: "row",  gap: "35%", marginLeft: "5%"}}>
                            <p style={{ fontSize: "15px", textAlign: "left", marginBottom: "7px" }}>
                                    Country
                            </p>

                            <p style={{ fontSize: "15px", textAlign: "left", marginBottom: "7px"}}>
                                    Zip Code
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '20px', marginLeft: '10px'}}>
                            
                            <select {...register("country")} style={{ 
                                width: '160px',
                                borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                                borderTop: 'none',
                                borderInline: 'none',
                                fontSize: '18px',
                            }}>
                                <option value=""/>
                                {Countries.map((countrys) => (
                                <option key={countrys.country} value={countrys.country}>
                                    {`${countrys.country}`}
                                </option>
                                ))}
                            </select>

                            <input style={{
                            width: '40%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '15px',
                            marginLeft: '30px'
                            }}
                            {...register("zipCode", {
                                required: "Zip code required",
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Please enter a valid city name"
                                }
                            })}
                            />
                            {errors.zipCode && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errors.zipCode.message}</p>}
                        </div>

                        <p style={{ }}> Optional </p>
                        <input style={{
                            width: '90%',
                            height: '35px',
                            marginTop: '15px',
                            borderBottom: "2px solid rgb(0, 0, 0, 0.1)",
                            borderTop: 'none',
                            borderInline: 'none',
                            fontSize: '17px',
                            paddingLeft: '10px',
                            marginBottom: '20px'
                            }}
                            {...register("optional")}
                            />
                        </div>

                    <button 
                        type="submit"
                        onClick={handleFinale} 
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
                        ✓ Save 
                    </button>
                </form>
            )}
            </div>
        </div>
    );
}