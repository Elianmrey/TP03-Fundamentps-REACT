import Style from './Temperature.module.css'
import PropTypes from 'prop-types'
export default function Temperature ( { value } )
{
  return  (<div className={ Style.temperature }>
        {
            value > 25 ? 
              <div className={Style.temperatureValueHot}>{value} Graus!! Está Quente!! 🥵</div> :
              <div className={Style.temperatureValueCold}>{value} Graus!! Está Frio 🥶!! </div>
        }
          </div>
        )
}
 
Temperature.propTypes = {
    value: PropTypes.number.isRequired
}
