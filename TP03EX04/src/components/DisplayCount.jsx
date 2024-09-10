import PropTypes from 'prop-types'

export default function DisplayCount({ count }) {
    return <h1>Contador: {count}</h1>;
};

DisplayCount.propTypes =
{
        count: PropTypes.number.isRequired,
    }

