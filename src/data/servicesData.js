import {
  FaShippingFast,
  FaShieldAlt,
  FaTags,
  FaCreditCard,
} from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: 'Ekspres Teslimat',
    info: '24 Saat içinde Yükler',
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Marka Garantisi',
    info: '100% Original ürünler',
  },
  {
    id: 3,
    icon: <FaTags />,
    title: 'Heyecan Verici Fırsatlar',
    info: 'Tüm ön ödemeli siparişlerde',
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: 'Güvenli Ödemeler',
    info: 'SSL / Güvenli sertifika',
  },
];

export default servicesData;
