import React, {useRef} from 'react'

const Form = () => {
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
    }
    return (
        <>
        <h2>Add Todo:</h2>
            <form action="" method="post">
                <div>
                    <label htmlFor='text'>Todo:</label>
                    <br />
                    <input type='text' name='text' id='text' ref={inputRef}></input>
                    <br />
                    <br />
                </div>
                <button type="submit" onClick={handleSubmit}>Add Todo</button>
            </form>
        </>
    )
}

export default Form
