import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';
import {offerShape, cityShape} from '../../const.js';
import Sorting from '../sorting/sorting.jsx';
import {connect} from 'react-redux';
import {sortOffers} from '../../utils.js';
import {ActionCreator} from '../../reducer/app/app.js';
import {Operation} from '../../reducer/data/data.js';
import withShowControl from '../../hocs/with-show-control/with-show-control.js';
import {getSortType} from '../../reducer/app/selectors.js';

const OffersList = ({handleBookmarkButtonClick, city, handlePlaceCardHover, handlePlaceCardNameClick, handleSortTypeClick, isCitiesClass, offers, sortType}) => {
  const sortedOffers = JSON.parse(JSON.stringify(offers));
  const SortingWrapped = withShowControl(Sorting);

  const handleCardNameClick = (offer) => () => handlePlaceCardNameClick(offer);
  const handleCardHover = (offer) => () => handlePlaceCardHover(offer);
  const handleButtonClick = (offer) => () => handleBookmarkButtonClick(offer);

  sortOffers(sortType, sortedOffers, offers);

  return !sortedOffers.length ?
    (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {city.name}</p>
        </div>
      </section>
    ) :
    (
      <section className={`places ${isCitiesClass ? `cities__places` : `near-places`}`}>
        {isCitiesClass ?
          <React.Fragment>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {city.name}</b>
            <SortingWrapped
              sortType={sortType}
              handleSortTypeClick={handleSortTypeClick}
            />
          </React.Fragment>
          :
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        }
        <div className={`places__list ${isCitiesClass ? `cities__places-list tabs__content` : `near-places__list`}`}>
          {sortedOffers.map((it) => (
            <Offer
              handleBookmarkButtonClick={handleButtonClick(it)}
              isCitiesClass={isCitiesClass}
              key={it.id}
              offer={it}
              handlePlaceCardNameClick={handleCardNameClick(it)}
              onMouseEnter={handleCardHover(it)}
              onMouseLeave={handleCardHover(null)}
            />
          ))}
        </div>
      </section>
    );
};

OffersList.propTypes = {
  isCitiesClass: PropTypes.bool,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.shape(cityShape).isRequired,
  sortType: PropTypes.string.isRequired,
  handlePlaceCardHover: PropTypes.func.isRequired,
  handlePlaceCardNameClick: PropTypes.func.isRequired,
  handleSortTypeClick: PropTypes.func.isRequired,
  handleBookmarkButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceCardHover(offer) {
    dispatch(ActionCreator.changeCardOnHover(offer));
  },

  handlePlaceCardNameClick(offer) {
    dispatch(Operation.openDetailedOffer(offer));

  },

  handleSortTypeClick(selectedSortType) {
    dispatch(ActionCreator.sortOffers(selectedSortType));
  },

  handleBookmarkButtonClick(offer) {
    dispatch(Operation.toggleIsFavorite(offer));
    dispatch(Operation.loadOffers());
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
