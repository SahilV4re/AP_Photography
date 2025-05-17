'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const serviceData = {
  wedding: {
    title: 'Wedding Photography',
    description: 'Captures every precious moment of your special day with creativity and elegance.',
  },
  portrait: {
    title: 'Portrait Sessions',
    description: 'Studio or outdoor portraits that capture your true personality.',
  },
  event: {
    title: 'Event Coverage',
    description: 'Comprehensive coverage for corporate, social, and cultural events.',
  },
  commercial: {
    title: 'Commercial Photography',
    description: 'Professional images for branding, products, and business promotion.',
  },
};

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || 'wedding';

  const [selectedService, setSelectedService] = useState(initialService);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'service') {
      setSelectedService(value);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const txnid = 'Txn' + Date.now();
    const productinfo = serviceData[selectedService]?.title || 'Photography Service';

    const res = await fetch('/api/generate-hash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        txnid,
        amount: form.amount,
        productinfo,
        firstname: form.name,
        email: form.email,
      }),
    });

    const { hash } = await res.json();

    const payuForm = document.createElement('form');
    payuForm.method = 'POST';
    payuForm.action = 'https://sandboxsecure.payu.in/_payment';

    const fields: Record<string, string> = {
      key: 'your_merchant_key',
      txnid,
      amount: form.amount,
      productinfo,
      firstname: form.name,
      email: form.email,
      phone: form.phone,
      surl: 'https://yourdomain.com/success.html',
      furl: 'https://yourdomain.com/failure.html',
      hash,
    };

    for (let key in fields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      payuForm.appendChild(input);
    }

    document.body.appendChild(payuForm);
    payuForm.submit();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold mb-4">Book Your Photography Session</h1>
        <p className="text-gray-600 text-lg">
          Choose your service and fill in the details to make a secure payment.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Secure Payment Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="service">Select Service</Label>
              <select
                name="service"
                value={selectedService}
                onChange={handleChange}
                className="w-full mt-1 border rounded p-2"
              >
                {Object.entries(serviceData).map(([key, service]) => (
                  <option key={key} value={key}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Mobile Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount (INR)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Proceed to Pay
            </Button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg border">
          <h3 className="text-xl font-bold mb-2">{serviceData[selectedService]?.title}</h3>
          <p className="text-gray-700">{serviceData[selectedService]?.description}</p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Why Choose Us?</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
              <li>500+ satisfied clients across India</li>
              <li>Quick turnaround & professional edits</li>
              <li>Easy online booking and secure payment</li>
              <li>Flexible rescheduling & cancellation</li>
              <li>Direct support via WhatsApp or Email</li>
            </ul>
          </div>
              </div>
              
          </div>
          <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need help picking a package?</h2>
        <p className="text-gray-600 mb-6">Get in touch with our team and we’ll help you find the perfect photography plan for your occasion.</p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-black transition"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
}
