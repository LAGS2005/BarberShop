'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { mockBookings, mockBarbers, mockServices } from '@/lib/mockData';
import Link from 'next/link';
import { LogOut, User, Calendar, Award } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(!isLoggedIn);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', phone: '' });

  const mockUser = {
    id: 'user1',
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 98765-4321',
    totalVisits: mockBookings.filter(b => b.userId === 'user1').length,
  };

  const userBookings = mockBookings.filter(b => b.userId === 'user1');

  // HandleLogin - relacionado com a API de login
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
  });

  if (res.ok) {
    const user = await res.json();
    setIsLoggedIn(true);
    console.log("Usuário:", user);
  } else {
    alert("Email ou senha inválidos");
  }
};

  // HandleRegister - relacionado com a API de registro
  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(registerData),
  });

  if (res.ok) {
    setIsLoggedIn(true);
  } else {
    alert("Erro ao criar conta");
  }
};

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginForm(true);
    setActiveTab('profile');
  };

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          {/* Page Header */}
          <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <Container>
              <AnimatedSection animation="slideInUp" className="max-w-3xl mx-auto text-center">
                <div className="space-y-4">
                  <Link href="/" className="text-sm text-primary hover:text-primary/80 transition-colors inline-block">
                    ← Voltar para Início
                  </Link>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                    Minha Conta
                  </h1>
                </div>
              </AnimatedSection>
            </Container>
          </section>

          {/* Login/Register Forms */}
          <section className="py-24">
            <Container>
              <div className="max-w-2xl mx-auto">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 bg-secondary/20 p-1 rounded-lg">
                  <button
                    onClick={() => setShowLoginForm(true)}
                    className={`flex-1 py-2 px-4 rounded font-medium transition-all ${
                      showLoginForm
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => setShowLoginForm(false)}
                    className={`flex-1 py-2 px-4 rounded font-medium transition-all ${
                      !showLoginForm
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Registrar
                  </button>
                </div>

                <AnimatedSection animation="slideInUp">
                  <div className="bg-card border border-border rounded-lg p-8 space-y-6">
                    {showLoginForm ? (
                      <form onSubmit={handleLogin} className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Entrar</h2>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            required
                            placeholder="seu@email.com"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Senha
                          </label>
                          <input
                            type="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                        >
                          Entrar
                        </button>
                      </form>
                    ) : (
                      <form onSubmit={handleRegister} className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Criar Conta</h2>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            value={registerData.name}
                            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                            required
                            placeholder="João Silva"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={registerData.phone}
                            onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                            required
                            placeholder="(555) 123-4567"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Password
                          </label>
                          <input
                            type="password"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-2 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                        >
                          Create Account
                        </button>
                      </form>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-16 bg-secondary/10 border-b border-border">
          <Container>
            <div className="flex items-center justify-between">
              <AnimatedSection animation="slideInUp">
                <div className="space-y-4">
                  <Link href="/" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    ← Back Home
                  </Link>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    My Account
                  </h1>
                </div>
              </AnimatedSection>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/30 text-foreground font-medium rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </Container>
        </section>

        {/* Account Content */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Tabs */}
              <div className="lg:col-span-1">
                <div className="space-y-2 sticky top-24">
                  {[
                    { id: 'profile', label: 'Profile', icon: User },
                    { id: 'bookings', label: 'My Bookings', icon: Calendar },
                    { id: 'stats', label: 'Statistics', icon: Award },
                  ].map(tab => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <AnimatedSection animation="slideInUp">
                  {/* Profile Tab */}
                  {activeTab === 'profile' && (
                    <div className="bg-card border border-border rounded-lg p-8 space-y-6">
                      <h2 className="text-2xl font-bold text-foreground">Profile Information</h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                          <p className="text-lg font-semibold text-foreground">{mockUser.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email</p>
                          <p className="text-lg font-semibold text-foreground">{mockUser.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Phone</p>
                          <p className="text-lg font-semibold text-foreground">{mockUser.phone}</p>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all">
                        Edit Profile
                      </button>
                    </div>
                  )}

                  {/* Bookings Tab */}
                  {activeTab === 'bookings' && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-foreground mb-6">My Bookings</h2>
                      {userBookings.length > 0 ? (
                        userBookings.map(booking => (
                          <div key={booking.id} className="bg-card border border-border rounded-lg p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                  {mockServices.find(s => s.id === booking.serviceId)?.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  with {mockBarbers.find(b => b.id === booking.barberId)?.name}
                                </p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                booking.status === 'completed'
                                  ? 'bg-primary/20 text-primary'
                                  : 'bg-yellow-500/20 text-yellow-500'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              📅 {booking.date} at {booking.time}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="bg-secondary/10 border border-border rounded-lg p-8 text-center">
                          <p className="text-muted-foreground mb-4">No bookings yet</p>
                          <Link
                            href="/booking"
                            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
                          >
                            Book Now
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stats Tab */}
                  {activeTab === 'stats' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-card border border-border rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {mockUser.totalVisits}
                        </div>
                        <p className="text-muted-foreground">Total Visits</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {mockUser.totalVisits > 0 ? '⭐' : '👋'}
                        </div>
                        <p className="text-muted-foreground">Loyalty Member</p>
                      </div>
                    </div>
                  )}
                </AnimatedSection>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
