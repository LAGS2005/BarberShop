'use client';

import { useState } from 'react';
import { mockServices, mockBarbers } from '@/lib/mockData';
import { CheckCircle } from 'lucide-react';

interface FormData {
  service: string;
  barber: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
}

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          service: '',
          barber: '',
          date: '',
          time: '',
          name: '',
          phone: '',
          email: '',
        });
        setStep(1);
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center py-12">
        <CheckCircle className="h-16 w-16 text-primary mx-auto" />
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
          <p className="text-muted-foreground">
            Your appointment has been successfully scheduled. We'll see you soon!
          </p>
        </div>
        <div className="bg-secondary/20 border border-border rounded-lg p-4 text-left space-y-2">
          <p className="text-sm"><span className="font-semibold">Name:</span> {formData.name}</p>
          <p className="text-sm"><span className="font-semibold">Service:</span> {mockServices.find(s => s.id === formData.service)?.name}</p>
          <p className="text-sm"><span className="font-semibold">Barber:</span> {mockBarbers.find(b => b.id === formData.barber)?.name}</p>
          <p className="text-sm"><span className="font-semibold">Date:</span> {formData.date}</p>
          <p className="text-sm"><span className="font-semibold">Time:</span> {formData.time}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex gap-2">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all ${
              i <= step ? 'bg-primary' : 'bg-secondary/30'
            }`}
          ></div>
        ))}
      </div>

      {/* Step 1: Select Service and Barber */}
      {step === 1 && (
        <div className="space-y-6 animate-slideInUp">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Select Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Choose a service...</option>
              {mockServices.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ${service.price} ({service.duration} min)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Select Barber *
            </label>
            <select
              name="barber"
              value={formData.barber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Choose a barber...</option>
              {mockBarbers.map(barber => (
                <option key={barber.id} value={barber.id}>
                  {barber.name} - {barber.rating} ⭐
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 2: Select Date and Time */}
      {step === 2 && (
        <div className="space-y-6 animate-slideInUp">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Select Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Select Time *
            </label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, time }))}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    formData.time === time
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/20 text-foreground hover:bg-secondary/40 border border-border'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <div className="space-y-6 animate-slideInUp">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Booking Summary */}
          <div className="bg-secondary/20 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Booking Summary:</p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Service:</span> {mockServices.find(s => s.id === formData.service)?.name}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Barber:</span> {mockBarbers.find(b => b.id === formData.barber)?.name}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Date & Time:</span> {formData.date} at {formData.time}
            </p>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 pt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="flex-1 px-6 py-3 bg-secondary/30 text-foreground font-semibold rounded-lg border border-border hover:bg-secondary/50 transition-all duration-200"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200"
        >
          {step === 3 ? 'Confirm Booking' : 'Continue'}
        </button>
      </div>
    </form>
  );
}
