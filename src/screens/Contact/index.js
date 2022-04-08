import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button';
import InputMask from 'react-input-mask';

import * as C from './styles';

function Contact() {

    const [name, setName] = useState('');
    const [wapp, setWapp] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [upload, setUpload] = useState(false);


    return (
        <C.Container>
      <h1>Nos envie a sua arte</h1>
            <form>
                <div className='form-group'>
                    <input 
                        type="text" 
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        
                    />
                    <label mode={name} >Nome</label>
                </div>
                <div className='form-group'>
                    <InputMask 
                        mask="(99)99999-9999" 
                        name='cel'
                        value={wapp}
                        onChange={e => setWapp(e.target.value)}
                    />
                    <label>whatsApp</label>
                </div>
                <div className='form-group'>
                    <input 
                        type="email" 
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                    <textarea 
                    type="text" 
                    name='message' 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4} 
                    cols={50} 
                    placeholder="Observações"></textarea>
                    <label for="arte"><p>PNG.SVG.JPEG.JPG.SVG</p></label>
                    <input 
                        type="file" 
                        name="arte"
                    />
                <Button name="enviar"/>
            </form>
        </C.Container>
  );
}

export default Contact;