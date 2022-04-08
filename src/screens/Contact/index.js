import React from 'react';
import Button from '../../Components/Button';

import * as C from './styles';

function Contact() {
  return (
      
      <>
      <h1>Nos envie a sua arte</h1>
        <C.Container>
            <form>
                <div className='form-group'>
                    <input type="text" name='name'/>
                    <label>Nome</label>
                </div>
                <div className='form-group'>
                    <input type="email" name='email'/>
                    <label>Email</label>
                </div>
                    <textarea type="text" name='message' rows={6} cols={50}></textarea>
                    <input type="file" name="arte"/>
                <Button name="enviar"/>
            </form>
        </C.Container>
      </>
  );
}

export default Contact;