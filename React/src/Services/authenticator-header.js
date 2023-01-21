

// Stjålet fra: https://www.bezkoder.com/react-jwt-auth/
export default function authenHeader() {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      return { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken,
      };
    } else {
      return {};
    }
  }
  