import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';
import {offerShape} from '../../const.js';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardHoverOff = this.handlePlaceCardHoverOff.bind(this);
    this.handlePlaceCardHoverOn = this.handlePlaceCardHoverOn.bind(this);
    this.state = {
      offerOnHover: null,
    };
  }

  onNamePlaceClick(offer) {
    const onTitleClick = () => {
      return this.props.onNamePlaceClick(offer);

    };
    return onTitleClick;
  }

  handlePlaceCardHoverOff() {
    this.setState({
      offerOnHover: null
    });
  }

  handlePlaceCardHoverOn(offer) {
    const handleMouseOver = () => {
      this.setState({
        offerOnHover: offer
      });
    };
    return handleMouseOver;
  }

  render() {
    const {offers, quantPlaces} = this.props;

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{quantPlaces} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by &nbsp;</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((it) => (
            <Offer
              key={it.id}
              offer={it}
              onMouseEnter={this.handlePlaceCardHoverOn(it)}
              onMouseLeave={this.handlePlaceCardHoverOff}
              onNamePlaceClick={this.onNamePlaceClick(it)}
            />
          ))}
        </div>
      </section>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  onNamePlaceClick: PropTypes.func,
  quantPlaces: PropTypes.number.isRequired,
};

export default OffersList;
