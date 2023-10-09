import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import {useEffect} from "react"

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../utils/auth';

function RootLayout() {
  const token = useLoaderData()
  const submit = useSubmit()
  const timeout = getTokenDuration()
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'post'})
      return;
    }

    const expirationTimer = setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, timeout)

    console.log(timeout)
  
    return () => {
      clearTimeout(expirationTimer)
    }
  }, [token, submit, timeout])
  

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
