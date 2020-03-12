import React, { useEffect } from 'react';
import useRouter from 'template/utils/useRouter';
import PropTypes from 'prop-types';

// Example of user roles: ['GUEST', 'USER', 'ADMIN'];

function AuthGuard({ roles, children }) {
  const router = useRouter();
  const session = {
    user: {
      first_name: 'hamza',
      last_name: 'zia',
      avatar:
        'https://www.gravatar.com/avatar/8388807B8315F6414F56B957235C1013',
      bio: 'hello world',
    },
  };

  useEffect(() => {
    if (!session.loggedIn || !session.user) {
      router.push('/auth/login');
      return;
    }

    if (!roles.includes(session.user.role)) {
      router.push('/errors/error-401');
    }
  }, [router, roles, session.loggedIn, session.user]);

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.array.isRequired,
};

export default AuthGuard;
