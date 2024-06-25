import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import cloud from '../Assests/cloud.png';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../Redux/HomeReducer/HomeReducer';
import { RootState } from '../Redux/store'; // Correct import for RootState

function Home() {
    const HomeForm = useSelector((state: RootState) => state.home);
    const [emailOtp, setEmailOtp] = useState<string>('');
    const [mobileOtp, setMobileOtp] = useState<string>('');

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        dispatch(update({
            [name]: value,
            field: 'businessName',
            value: ''
        }));
    };

    const storeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            dispatch(update({
                [name]: URL.createObjectURL(file),
                field: 'businessName',
                value: ''
            }));
        }
    };

    const getEmailOtp = async () => {
        try {
            if (HomeForm.email === '') {
                return;
            }
            const res = await fetch(`https://bookmyticket-vpuj.onrender.com/movies`, {
                method: 'GET'
            });
            const data = await res.json();
            const digits = '0123456789';
            let otp = '';
            for (let i = 0; i < 5; i++) {
                otp += digits[Math.floor(Math.random() * 10)];
            }
            setEmailOtp(otp);
        } catch (error) {
            console.log(error);
        }
    };

    const getMobileOtp = async () => {
        try {
            if (HomeForm.mobileNumber === '') {
                return;
            }
            const res = await fetch(`https://bookmyticket-vpuj.onrender.com/movies`, {
                method: 'GET'
            });
            const data = await res.json();
            const digits = '0123456789';
            let otp = '';
            for (let i = 0; i < 5; i++) {
                otp += digits[Math.floor(Math.random() * 10)];
            }
            setMobileOtp(otp);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='homeMain'>
            <div className='left'>
                <h1>Partner with us</h1>
                <p>Be our partner in just a few steps and start increasing your reach by gaining new customers.</p>
                <div>
                    <div className='box'>
                        <p style={{ color: 'white', fontWeight: 700, backgroundColor: '#DC3545' }}>1</p>
                        <p style={{ fontWeight: 500 }}>
                            <Link to={'/'} className='link'>
                                Business Information
                            </Link>
                        </p>
                    </div>
                    <div className='box'>
                        <p>2</p>
                        <p>Owner & Manager Details</p>
                    </div>
                    <div className='box'>
                        <p>3</p>
                        <p>PAN/Aadhaar Details</p>
                    </div>
                    <div className='box'>
                        <p>4</p>
                        <p>Legal Documents</p>
                    </div>
                    <div className='box'>
                        <p>5</p>
                        <p>Bank Details</p>
                    </div>
                    <div className='box'>
                        <p>6</p>
                        <p>Service Info</p>
                    </div>
                    <div className='box'>
                        <p>7</p>
                        <p>Preview Document</p>
                    </div>
                    <div className='box'>
                        <p>8</p>
                        <p>Reach Increased</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1>Business Information</h1>
                <div className='wrapper'>
                    <div className='field'>
                        <div className='span'>
                            <p>Business Name *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <input
                            type='text'
                            placeholder="Eg. Domino's Pizza"
                            name='businessName'
                            value={HomeForm.businessName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Country</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <select name='country' value={HomeForm.country} onChange={handleChange}>
                            <option value=''>Select Country</option>
                            <option value='India'>India</option>
                            <option value='United States'>United States</option>
                            <option value='South Africa'>South Africa</option>
                            <option value='Australia'>Australia</option>
                            <option value='Canada'>Canada</option>
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>State *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <select name='state' value={HomeForm.state} onChange={handleChange}>
                            <option value=''>Select State</option>
                            <option value='California'>California</option>
                            {/* Other options... */}
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>City *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <input type='text' value={HomeForm.city} name='city' onChange={handleChange} />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Address *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <input type='text' name='address' value={HomeForm.address} onChange={handleChange} />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Opening Time *</p>
                        </div>
                        <div className='combine'>
                            <input
                                type='time'
                                min={'00:00'}
                                max={'12:00'}
                                name='openingTime'
                                value={HomeForm.openingTime}
                                onChange={handleChange}
                            />
                            <p>AM</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Closing Time *</p>
                            </div>
                        <div className='combine'>
                            <input
                                type='time'
                                min={'12:01'}
                                max={'24:00'}
                                name='closingTime'
                                value={HomeForm.closingTime}
                                onChange={handleChange}
                            />
                            <p>PM</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>E-mail *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type='email' name='email' value={HomeForm.email} onChange={handleChange} />
                            <button onClick={getEmailOtp}>Send OTP</button>
                        </div>
                        {emailOtp !== '' && <input type='text' value={emailOtp} className='otpField' onChange={() => {}} />}
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Mobile Number *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input
                                type='number'
                                name='mobileNumber'
                                value={HomeForm.mobileNumber}
                                onChange={handleChange}
                            />
                            <button onClick={getMobileOtp}>Send OTP</button>
                        </div>
                        {mobileOtp !== '' && <input type='text' value={mobileOtp} className='otpField' onChange={() => {}} />}
                    </div>
                    <div>
                        <div className='span'>
                            <p>Upload some images of your Restaurant *</p>
                            <IoMdInformationCircleOutline size={'20px'} fontWeight={500} />
                        </div>
                        <div className='fileInput'>
                            <input type='file' name='image' onChange={storeImage} />
                            {HomeForm.image === '' ? (
                                <>
                                    <img src={cloud} alt='' />
                                    <p>Click to upload</p>
                                </>
                            ) : (
                                <img src={HomeForm.image} alt='image' />
                            )}
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className='nextButton'>
                        <Link to={'/ownerdetails'}>
                            <button style={{marginBottom:'23px'}}>Proceed to Owner & Manager Details →</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
