import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { Offer } from '../../types/offer';
import { getPercentByRating } from '../../utils';
import cn from 'classnames';

type PlaceCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cardType: CardType;
};

export default function PlaceCard({
  offer,
  onMouseEnter,
  onMouseLeave,
  cardType,
}: PlaceCardProps): JSX.Element {
  const { isPremium, id, previewImage, price, rating, description, type } =
    offer;

  return (
    <article
      className={cn(
        'place-card',
        { 'cities__card': cardType === CardType.Offer },
        { 'near-places__card': cardType === CardType.NearByOffer }
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>&quot;Premium&quot;</span>
        </div>
      )}
      <div
        className={cn(
          'place-card__image-wrapper',
          { 'cities__image-wrapper': cardType === CardType.Offer },
          { 'near-places__image-wrapper': cardType === CardType.NearByOffer }
        )}
      >
        <Link to={`/offer/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width='260'
            height='200'
            alt='Place'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: getPercentByRating(rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='/'>{description}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
