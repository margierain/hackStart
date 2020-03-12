import { useEffect } from 'react';
import useRouter from 'template/utils/useRouter';

function ScrollReset() {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default ScrollReset;
