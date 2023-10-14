import PropTypes from 'prop-types';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Result = ({age}) =>{
    return(
            <h4 className='text-center'>You are {age.years} years old</h4>
    )
}

Result.propTypes = {
    age: PropTypes.shape({
        years :PropTypes.number.isRequired
    }),
};

export default Result;