import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, TextField, Typography } from '@mui/material';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tqkpflf', 'template_qrxk7vr', form.current, 'user_Zm3UI6ViwJ9YxB2SZveaK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (
        <>
            <Typography sx={{ p: 5, color: '#053357' }} variant="h3" style={{ marginTop: '80px' }}>CONTACT ME</Typography>
            <form ref={form} onSubmit={sendEmail}>
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined" />
                <br />
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" />
                <br />
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outlined-textarea"
                    label="Message"
                    placeholder="Placeholder"
                    multiline
                /> <br />
                <Button
                    type='submit'
                    variant="contained"
                    style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                    SUBMIT
                </Button>
            </form>
        </>
        // <form ref={form} onSubmit={sendEmail} style={{marginTop: '90px'}}>
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>
    );
};

