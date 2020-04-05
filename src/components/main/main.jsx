import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import Cities from '../cities/cities.jsx';
import {connect} from 'react-redux';
import {getOffers} from '../../reducer/data/selectors.js';
import {getCity, getOfferOnHover} from '../../reducer/app/selectors.js';
import {offerShape, cityShape} from '../../const.js';

const Main = ({city, offers, offerOnHover}) => {


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${!offers.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${!offers.length ? `cities__places-container--empty` : ``}`}>
            <OffersList
              city={city}
              isCitiesClass={true}
              offers={offers}
            />
            <div className="cities__right-section">
              {offers.length ?
                <section className="cities__map map">
                  <Map
                    offerOnHover={offerOnHover}
                    isBlockedZoom={false}
                    city={city}
                    mapWidth={`100%`}
                    offers={offers}
                  />
                </section>
                : ``
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  city: PropTypes.shape(cityShape).isRequired,
  offerOnHover: PropTypes.shape(offerShape),
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offerOnHover: getOfferOnHover(state),
  offers: getOffers(state),
});

export {Main};
export default connect(mapStateToProps)(Main);

