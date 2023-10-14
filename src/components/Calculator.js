import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import { useState } from 'react';
import PropTypes from 'prop-types';

const Calculator = ({calculateAge}) =>{
    const [birthDate, setBirthdate] = useState('');

    const handleChange =(e)=>{
        setBirthdate(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        calculateAge(birthDate);
    };

    return (
        <form className="mt-5 pt-3" onSubmit={handleSubmit}>
            <div className="hi pt-5 mt-5">
                <h1 className="mb-3">Age Calculator</h1>
                <p className="m-2"><b>Enter your date of birth</b></p>
                <input className="form-control border-dark mb-0" type="date" onChange={handleChange} value={birthDate}></input>
                <br />
                <button className="btn btn-primary mb-3" type="submit">Calculate Age</button>
            </div>
        </form>
    )
}

Calculator.propTypes = {
    calculateAge: PropTypes.func.isRequired,
}

export default Calculator;