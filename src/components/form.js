import React from 'react';

const Form = ({value,setValue,handleSubmit}) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <form style={{display:'flex'}} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    style={{flex:'10',padding:'5px'}}
                    placeholder="해야 할일을 입력하세요"
                    value={value}
                    onChange={handleChange}/>
                <input type='submit'
                       value="enter"
                       className="btn"
                       style={{flex:'1'}} />
            </form>
        </div>
    );
};

export default Form;