import { adminUser } from '../data/products';

// Static users storage (in real app, this would be in a database)
let users = [adminUser];

// Authentication service
export const authService = {
  // Login function
  login: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Create a simple token (in real app, this would be a JWT)
      const token = btoa(JSON.stringify({ userId: user.id, userType: user.userType }));
      
      return {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          userType: user.userType
        },
        token
      };
    } else {
      throw new Error('Invalid credentials');
    }
  },

  // Signup function
  signup: async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      address: userData.address,
      userType: 'user'
    };
    
    users.push(newUser);
    
    // Create a simple token
    const token = btoa(JSON.stringify({ userId: newUser.id, userType: newUser.userType }));
    
    return {
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        userType: newUser.userType
      },
      token
    };
  },

  // Logout function
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('currentUser');
    return !!(token && user);
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is admin
  isAdmin: () => {
    const user = authService.getCurrentUser();
    return user && user.userType === 'admin';
  }
}; 