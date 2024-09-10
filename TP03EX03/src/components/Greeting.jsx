import PropTypes from 'prop-types'

export default function Greeting ({ name, age }) {
    return (
        <h1>Olá, {name}! Você tem {age} anos.</h1>
    );
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}
