import helpImg from "../../image/helpimage.png";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <div className='mt-[200px] ml-[65px] animate-bounce'>
            <h2 className='whitespace-nowrap text-3xl font-bold text-[#8b74bd]'>We will get back with you shortly!</h2>
        </div>
    )
}

const Help = () => {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_djqd892', 'template_sma0zmp', e.target, 'O4pgm2rqmFBX5nBpR').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        )
        showResult(true);
    }

    setTimeout(() => {
        showResult(false);
    }, 5000);


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <h2 className='py-2 text-7xl text-[#7953A9] font-bold'>Contact Us</h2>
                <div className='flex w-full h-full rounded-xl p-4 bg-white'>
                    <div className='w-full h-auto rounded-xl'>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='pr-10 mr-6 skew-x-6 -skew-y-6 scale-[80%] drop-shadow-lg'>
                                <img src={helpImg} className='rounded-xl'></img>
                            </div>
                            <div className='p-2'>
                                {!result ? (
                                    <form className='pl-6' onSubmit={sendEmail}>
                                        <h2 className='whitespace-nowrap text-3xl font-bold text-[#8b74bd]'>Fill Out The Designated Fields</h2>
                                        <div className='grid gap-4 w-full py-2'>
                                            <div className='flex flex-col'>
                                                <label className='uppercase text-sm py-2'>Name</label>
                                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="fullName"></input>
                                            </div>
                                        </div>
                                        <div className='flex flex-col py-2'>
                                            <label className='uppercase text-sm py-2'>Email</label>
                                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email"></input>
                                        </div>
                                        <div className='flex flex-col py-2'>
                                            <label className='uppercase text-sm py-2'>Message</label>
                                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="5" name="message"></textarea>
                                        </div>
                                        <button className='w-full p-4 text-gray-100 mt-4 bg-[#4060e0] rounded-lg' value="send">Send Message</button>
                                    </form>
                                ) : (
                                    <Result />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;