import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    function handleSubmit(e){
        e.preventDefault()
        setEmail(e.target.value)
        setPassword(e.target.password)

    }

    
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    console.log(email)
    return (
        <div className='container'>
            <h3>Log In</h3>
            <div className='row' >
                <form className='col s12'>
                <div className="row">
                    <div className='input-field col s12'>
                    <input name='email' value={email} onChange={handleEmail} id='email' className='validate'/>
                    <label htmlFor='email'>Email</label>
                    <span 
                    className='helper-text'
                    date-error='Invalid email'
                    data-success='right'
                    />
                    </div>
                </div>
                <div className="row">
                <div className='input-field col s12'>
                    <input name='password' value={password} onChange={handlePassword} id='password' className='validate'/>
                    <label htmlFor='password'>Password</label>
                    <span 
                    className='helper-text'
                    date-error='Invalid password'
                    data-success='right'
                    />
                    </div>
                </div>

                <div className='row'>
                    <div className='col 12'>
                        <button className='waves-effect waves-light btn' type='submit' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>

                </form>

            </div>
        </div>
    )
}

export default Login
