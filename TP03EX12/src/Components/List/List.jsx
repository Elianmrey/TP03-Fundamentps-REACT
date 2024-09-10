import Style from './List.module.css'
import PropTypes from 'prop-types'

export default function ListNumber({ numberList })
{
    return (
        <div className={Style.list}>
            { numberList.map((item, index) => (
                <div key={index} className={Style.Container}>
                    <div className={Style.ListItem}>{item}</div>
                </div>
            ))}
        </div>
    )
}
 
ListNumber.propTypes = {
    numberList: PropTypes.arrayOf(PropTypes.number).isRequired,
};