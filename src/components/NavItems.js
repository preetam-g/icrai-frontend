import { useAuth0 } from '@auth0/auth0-react';

export const useNavItems = () => {
  const { isAuthenticated, user } = useAuth0();
  
  let navItems = [
    { path: '/contests', label: 'Contests' },
    { path: '/aboutUs', label: 'About Us' },
  ];

  // Add items based on authentication status
  if (isAuthenticated) {
    // Add Hackathon only for specific email
    if (user?.email === 'fugah271202@gmail.com') {
      navItems.push({ path: '/contests/register', label: 'Hackathon' });
    }
    // Add profile for all authenticated users
    navItems.push({ path: '/profile', label: user?.email || 'Profile' });
  } else {
    // Add login for non-authenticated users
    navItems.push({ path: '/login', label: 'Login' });
  }

  return navItems;
};

