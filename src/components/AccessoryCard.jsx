import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const AccessoryCard = props => {
    return (
        <div className="accessory-card">
          
                <div className="accessory-card__image">
                    <img src={props.image} alt="" />
                </div>
                <h3 className="accessory-card__name">{props.name}</h3>
                <div className="accessory-card__price">
                    {numberWithCommas(props.price)}
                    <span className="accessory-card__price__old">
                        <del>{numberWithCommas(3990000)}</del>
                    </span>
                </div>
           
            <div className="accessory-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

AccessoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default AccessoryCard
