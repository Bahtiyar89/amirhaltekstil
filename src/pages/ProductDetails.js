import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import { calculateDiscount, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import useActive from '../hooks/useActive';
import cartContext from '../contexts/cart/cartContext';
import productsData from '../data/productsData';
import SectionsHead from '../components/common/SectionsHead';
import RelatedSlider from '../components/sliders/RelatedSlider';
import ProductSummary from '../components/product/ProductSummary';
import Services from '../components/common/Services';

const ProductDetails = () => {
  useDocTitle('Product Details');

  const { handleActive, activeClass } = useActive(0);

  const { addItem } = useContext(cartContext);

  const { productId } = useParams();

  // here the 'id' received has 'string-type', so converting it to a 'Number'
  const prodId = parseInt(productId);

  // showing the Product based on the received 'id'
  const product = productsData.find((item) => item.id === prodId);

  const {
    images,
    title,
    info,
    category,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
  } = product;

  const [previewImg, setPreviewImg] = useState(images[0]);

  // handling Add-to-cart
  const handleAddItem = () => {
    addItem(product);
  };

  // setting the very-first image on re-render
  useEffect(() => {
    setPreviewImg(images[0]);
    handleActive(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // handling Preview image
  const handlePreviewImg = (i) => {
    setPreviewImg(images[i]);
    handleActive(i);
  };

  // calculating Prices
  const discountedPrice = originalPrice - finalPrice;
  const newPrice = finalPrice;
  const oldPrice = originalPrice;
  const savedPrice = discountedPrice;
  const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

  return (
    <>
      <section id='product_details' className='section'>
        <div className='container'>
          <div className='wrapper prod_details_wrapper'>
            {/*=== Product Details Left-content ===*/}
            <div className='prod_details_left_col'>
              <div className='prod_details_tabs'>
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`tabs_item ${activeClass(i)}`}
                    onClick={() => handlePreviewImg(i)}
                  >
                    <img src={img} alt='product-img' />
                  </div>
                ))}
              </div>
              <figure className='prod_details_img'>
                <img src={previewImg} alt='product-img' />
              </figure>
            </div>

            {/*=== Product Details Right-content ===*/}
            <div className='prod_details_right_col'>
              <h1 className='prod_details_title'>{title}</h1>
              <h4 className='prod_details_info'>{info}</h4>

              <div className='prod_details_ratings'>
                <span className='rating_star'>
                  {[...Array(rateCount)].map((_, i) => (
                    <IoMdStar key={i} />
                  ))}
                </span>
                <span>|</span>
                <Link to='*'>{ratings} Rating</Link>
              </div>

              <div className='separator'></div>

              <div className='prod_details_price'>
                <div className='price_box'>
                  <h2 className='price'>
                    {newPrice} TL &nbsp;
                    <small className='del_price'>
                      <del>{oldPrice} TL</del>
                    </small>
                  </h2>
                  <p className='saved_price'>
                    Ekonomin: {savedPrice} ({savedDiscount}%)
                  </p>
                  <span className='tax_txt'>(Tüm vergiler dahil)</span>
                </div>

                <div className='badge'>
                  <span>
                    <IoMdCheckmark /> Stokta
                  </span>
                </div>
              </div>

              <div className='separator'></div>

              <div className='prod_details_offers'>
                <h4>Teklifler ve indirimler</h4>
                <ul>
                  <li>Kredi Kartında Ücretsiz EMI</li>
                  <li>Daha Sonra Öde ve Nakit Geri Ödeme</li>
                </ul>
              </div>

              <div className='separator'></div>

              <div className='prod_details_buy_btn'>
                <button type='button' className='btn' onClick={handleAddItem}>
                  Sepete ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSummary {...product} />

      <section id='related_products' className='section'>
        <div className='container'>
          <SectionsHead heading='İlgili Ürünler' />
          <RelatedSlider category={category} />
        </div>
      </section>

      <Services />
    </>
  );
};

export default ProductDetails;
