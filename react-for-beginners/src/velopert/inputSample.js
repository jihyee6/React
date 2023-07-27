import React, { useDebugValue, useReducer, useRef, useState } from 'react';

function InputSample(props) {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;
    const nameInput = useRef();
    const nicknameInput = useRef();

    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nicknameInput.current.focus();
    }

    return (
        <div>
            <input name='name' placeholder='이름'  onChange={onChange} value={name} ref={nameInput}/>
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} ref={nicknameInput}  />
            
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:  </b>
                <p>{name}({nickname}) : </p>
            </div>
        </div>
    );
}

export default InputSample;