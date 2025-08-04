import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export const footMenu = [
  {
    id: 1,
    title: 'Yardım',
    menu: [
      {
        id: 1,
        link: 'FAQs',
        path: '/',
      },
      {
        id: 2,
        link: 'Siparişi takip et',
        path: '/',
      },
      {
        id: 3,
        link: 'Siparişi iptal Et',
        path: '/',
      },
      {
        id: 4,
        link: 'İade Emri',
        path: '/',
      },
      {
        id: 5,
        link: 'Garanti Bilgileri',
        path: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Politikalar',
    menu: [
      {
        id: 1,
        link: 'Iade politikası',
        path: '/',
      },
      {
        id: 2,
        link: 'Güvenlik',
        path: '/',
      },
      {
        id: 3,
        link: 'Site Haritası',
        path: '/',
      },
      {
        id: 4,
        link: 'Gizlilik politikası',
        path: '/',
      },
      {
        id: 5,
        link: 'Şartlar ve Koşullar',
        path: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Şirket',
    menu: [
      {
        id: 1,
        link: 'Hakkımızda',
        path: '/',
      },
      {
        id: 2,
        link: 'Iletişim',
        path: '/',
      },
      {
        id: 3,
        link: 'Servis Merkezleri',
        path: '/',
      },
      {
        id: 4,
        link: 'Kariyerler',
        path: '/',
      },
      {
        id: 5,
        link: 'Iştirakler',
        path: '/',
      },
    ],
  },
];

export const footSocial = [
  {
    id: 1,
    icon: <FaFacebookF />,
    path: '/',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    path: '/',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    path: '/',
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    path: '/',
  },
];
