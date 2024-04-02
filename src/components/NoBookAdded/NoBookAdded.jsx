import PropTypes from 'prop-types';

const NoBookAdded = ({text = 'No book to show'}) => {
    return (
        <div className='text-center py-12'>
            <h1 className='font-semibold text-3xl text-gray-500'>{text}</h1>
        </div>
    );
};

NoBookAdded.propTypes = {
    text: PropTypes.string.isRequired
    
};

export default NoBookAdded;