import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';

const Cart = () => {
  useDocTitle('Cart');

  const { cartItems } = useContext(cartContext);

  const cartQuantity = cartItems.length;

  // total original price
  const cartTotal = cartItems.map((item) => {
    return item.originalPrice * item.quantity;
  });

  const calculateCartTotal = calculateTotal(cartTotal);
  const displayCartTotal = calculateCartTotal;

  // total discount
  const cartDiscount = cartItems.map((item) => {
    return (item.originalPrice - item.finalPrice) * item.quantity;
  });

  const calculateCartDiscount = calculateTotal(cartDiscount);
  const displayCartDiscount = calculateCartDiscount;

  // final total amount
  const totalAmount = calculateCartTotal - calculateCartDiscount;
  const displayTotalAmount = totalAmount;

  return (
    <>
      <section id='cart' className='section'>
        <div className='container'>
          {cartQuantity === 0 ? (
            <EmptyView
              icon={<BsCartX />}
              msg='Your Cart is Empty'
              link='/all-products'
              btnText='Start Shopping'
            />
          ) : (
            <div className='wrapper cart_wrapper'>
              <div className='cart_left_col'>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>

              <div className='cart_right_col'>
                <div className='order_summary'>
                  <h3>
                    Sipariş Özeti &nbsp; ( {cartQuantity}{' '}
                    {cartQuantity > 1 ? 'items' : 'item'} )
                  </h3>
                  <div className='order_summary_details'>
                    <div className='price'>
                      <span>Orijinal Fiyat</span>
                      <b>{displayCartTotal} TL</b>
                    </div>
                    <div className='discount'>
                      <span>İndirim</span>
                      <b>- {displayCartDiscount} TL</b>
                    </div>
                    <div className='delivery'>
                      <span>Teslimat</span>
                      <b>Ücretsiz</b>
                    </div>
                    <div className='separator'></div>
                    <div className='total_price'>
                      <b>
                        <small>Toplam Fiyat</small>
                      </b>
                      <b>{displayTotalAmount} TL</b>
                    </div>
                  </div>
                  <button type='button' className='btn checkout_btn'>
                    Ödeme
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
