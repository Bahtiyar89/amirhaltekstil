import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';

const ProductSummary = (props) => {
  const { brand, title, info, category, type, connectivity } = props;

  const { active, handleActive, activeClass } = useActive('specs');

  return (
    <>
      <section id='product_summary' className='section'>
        <div className='container'>
          {/*===== Product-Summary-Tabs =====*/}
          <div className='prod_summary_tabs'>
            <ul className='tabs'>
              <li
                className={`tabs_item ${activeClass('specs')}`}
                onClick={() => handleActive('specs')}
              >
                Özellikler
              </li>
              <li
                className={`tabs_item ${activeClass('overview')}`}
                onClick={() => handleActive('overview')}
              >
                Genel bakış
              </li>
              <li
                className={`tabs_item ${activeClass('reviews')}`}
                onClick={() => handleActive('reviews')}
              >
                Yorumlar
              </li>
            </ul>
          </div>

          {/*===== Product-Summary-Details =====*/}
          <div className='prod_summary_details'>
            {active === 'specs' ? (
              <div className='prod_specs'>
                <ul>
                  <li>
                    <span>Brand</span>
                    <span>{brand}</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>{title}</span>
                  </li>
                  <li>
                    <span>Generic Name</span>
                    <span>{category}</span>
                  </li>
                  <li>
                    <span>Tip</span>
                    <span>{type}</span>
                  </li>
                  {/* <li>
                    <span>Benzerlik</span>
                    <span>{connectivity}</span>
                  </li>
                  <li>
                    <span>Microphone</span>
                    <span>Yes</span>
                  </li>*/}
                </ul>
              </div>
            ) : active === 'overview' ? (
              <div className='prod_overview'>
                <h3>
                  The <span>{title}</span> {info} Kalitelidir
                </h3>
                <ul>
                  <li>Elastikli</li>
                  <li>Yagmur koruma</li>
                  <li>ipekten</li>
                </ul>
                <p>
                  Al{' '}
                  <b>
                    {title} {info}
                  </b>{' '}
                  sağlayarak size muhteşem bir deneyimi sunuyor asla devam
                  edemeyeceğiniz harika bir kalitesi {category} İnanılmaz
                  esneklikle mükemmel esnekliğin ve hareketliliğin tadını
                  çıkarın
                </p>
              </div>
            ) : (
              <div className='prod_reviews'>
                <ul>
                  {reviewsData.map((item) => (
                    <ProductReviews key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSummary;
