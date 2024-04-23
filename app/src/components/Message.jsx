import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const Message = ({ msg, type }) => {
    return (
        <>
            <Alert key={type} variant={type}  dismissible>
                {msg}
            </Alert>
        </>
    );
}

Message.propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Message;