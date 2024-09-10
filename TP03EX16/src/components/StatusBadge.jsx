
import PropTypes from 'prop-types';

export default function StatusBadge(props) {
   
    function getBadgeStyle() {
        switch (props.status) {
            case 'ativo':
                return { backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', width: '45px' };
            case 'inativo':
                return { backgroundColor: 'gray', color: 'white', padding: '5px 10px', borderRadius: '5px', width: '45px' };
            case 'pendente':
                return { backgroundColor: 'orange', color: 'white', padding: '5px 10px', borderRadius: '5px', width: '55px' };
            default:
                return { backgroundColor: 'transparent', color: 'black', padding: '5px 10px', borderRadius: '5px', width: '45px' };
        };
    }
    return (
        <div style={getBadgeStyle()}>
            {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
        </div>
    );

}

StatusBadge.propTypes = {
    status: PropTypes.oneOf(['ativo', 'inativo', 'pendente']).isRequired,
};