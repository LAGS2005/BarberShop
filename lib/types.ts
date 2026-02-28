export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'haircut' | 'shave' | 'grooming' | 'styling';
}

export interface Barber {
  id: string;
  name: string;
  bio: string;
  image: string;
  specialties: string[];
  yearsExperience: number;
  rating: number;
}

export interface Booking {
  id: string;
  userId: string;
  barberId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookings: Booking[];
  totalVisits: number;
}
