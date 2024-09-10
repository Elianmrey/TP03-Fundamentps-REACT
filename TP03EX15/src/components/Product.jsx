import PropTypes from 'prop-types'

import ProductStyle from './ProductStyle.module.css'

export default function Product(props)
{
    return (
        <>
            <div className={ProductStyle.Container}>
                <h1 className={ProductStyle.Title}>{props.nome }</h1>
                <h2 className={ProductStyle.Price}>Preço: {props.preco}</h2>
                <div className={ProductStyle.DescriptionContainer}>
                        <span className={ProductStyle.Description}>{props.descricao ? props.descricao : 'Descrição não fornecida'}</span>
                </div>
            </div>
        </>
    )
 }

Product.propTypes = {

    nome: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    descricao: PropTypes.string
}