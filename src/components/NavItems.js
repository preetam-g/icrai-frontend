import { useAuth0 } from '@auth0/auth0-react';

export const useNavItems = () => {
  const { isAuthenticated, user } = useAuth0();
  
  // Function to truncate email before '@'
  const truncateEmail = (email) => {
    return email ? email.split('@')[0] : 'Profile';
  };

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
    // Add profile with truncated email for authenticated users
    navItems.push({ 
      path: '/profile', 
      label: truncateEmail(user?.email)
    });
  } else {
    // Add login for non-authenticated users
    navItems.push({ path: '/login', label: 'Login' });
  }

  return navItems;
};


