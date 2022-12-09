import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import infoFill from '@iconify/icons-eva/info-fill';
import playFill from '@iconify/icons-eva/play-circle-fill';
import emailFill from '@iconify/icons-eva/email-fill';
import planFill from '@iconify/icons-eva/paper-plane-fill';
import phoneFill from '@iconify/icons-eva/phone-call-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <Icon icon={infoFill} {...ICON_SIZE} />
  },
  {
    title: 'Our Services',
    path: '/our-services',
    icon: <Icon icon={playFill} {...ICON_SIZE} />
  },
  {
    title: 'Custom Quote',
    path: '/custom-quote',
    icon: <Icon icon={emailFill} {...ICON_SIZE} />
  },
  {
    title: 'Quote',
    path: '/quote',
    icon: <Icon icon={planFill} {...ICON_SIZE} />
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <Icon icon={phoneFill} {...ICON_SIZE} />
  },
  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
