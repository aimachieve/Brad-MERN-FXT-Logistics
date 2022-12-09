import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import GuestGuard from '../guards/GuestGuard';

import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// 
import useAuth from "hooks/useAuth"

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const { user } = useAuth();
  console.log({user})

  return useRoutes([

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/our-services', element: <OurServices /> },
        { path: '/custom-quote', element: <CustomQuote /> },
        { path: '/contact-us', element: <ContactUs /> },
        { path: '/terms-conditions', element: <TermsConditions /> },
        { path: '/prohibited-restricted', element: <ProhibitedRestricted /> },
        { path: '/privacy-policy', element: <PrivacyPolicy /> },
        { path: '/quote', element: user && user.role === "admin" ? <QuoteAdmin /> : <Quote /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
const OurServices = Loadable(lazy(() => import('../pages/OurServices')));
const CustomQuote = Loadable(lazy(() => import('../pages/CustomQuote')));
const Quote = Loadable(lazy(() => import('../pages/Quote')));
const QuoteAdmin = Loadable(lazy(() => import('../pages/QuoteAdmin')));
const ContactUs = Loadable(lazy(() => import('../pages/ContactUs')));
const TermsConditions = Loadable(lazy(() => import('../pages/TermsConditions')));
const ProhibitedRestricted = Loadable(lazy(() => import('../pages/ProhibitedRestricted')));
const PrivacyPolicy = Loadable(lazy(() => import('../pages/PrivacyPolicy')));