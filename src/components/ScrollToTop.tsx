import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { analytics } from '../services/analytics';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if it's a new navigation (PUSH or REPLACE) AND no hash is present
    if (navType !== 'POP' && !hash) {
      window.scrollTo(0, 0);
    } else if (hash) {
      // If there is a hash, try to scroll to it
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }

    // Track page view on every route change
    analytics.trackEvent('page_view', {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [pathname, search, navType]);

  return null;
}
