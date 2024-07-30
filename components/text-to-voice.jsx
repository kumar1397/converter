"use client"
import React, { useState } from 'react';
import axios from 'axios';

const TextToSpeechForm = () => {
  const [text, setText] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/speak', { text });
    } catch (error) {
      window.alert("error occured");
    }
  };
  return (
    <div className='bg-white'>
      <form onSubmit={handleSubmit}>
        <div className='bg-transparent text-black'>
          <label>
            Text:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className='bg-black text-md text-yellow-500'>Speak</button>
      </form>

    </div>
  );
};

export default TextToSpeechForm;
