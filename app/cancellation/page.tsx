import React from 'react';

const CancellationPolicy: React.FC = () => (
  <div className="max-w-8xl mx-auto px-6 py-20">
    <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
      <h2 className="text-4xl font-bold font-[var(--font-playfair)] mb-8 text-center">
        Cancellation & Refund Policy
      </h2>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          1. Session Booking & Deposit
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          A non-refundable deposit of 30% is required at the time of booking to confirm your session. This secures your preferred date and time slot, and is applied toward your final balance.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          2. Cancellation by Client
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          If you need to cancel your session, please notify us at least 48 hours in advance. The initial deposit will not be refunded, but can be transferred to a rescheduled session if done in time. Cancellations made within 48 hours of the session are not eligible for any refund or transfer.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          3. Rescheduling Policy
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          Clients are allowed one-time rescheduling if notified at least 48 hours prior to the session. New dates are subject to availability. Additional reschedules may require a new booking and deposit.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          4. Cancellation by Photographer
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          In the rare case that we must cancel a session due to illness, emergencies, or unforeseen circumstances, clients will be offered a full refund of the deposit or the option to reschedule at no extra cost.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          5. Refund Eligibility
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          No refunds will be issued after services are rendered and digital files are delivered. Clients are responsible for reviewing proofs and communicating concerns before final delivery.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          6. Contact Us
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          For any questions about cancellations or refunds, feel free to contact us at <span className="text-black font-medium">hello@APhotography.com</span>.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8 text-center">
        Last updated: July 7, 2025
      </p>
    </div>
  </div>
);

export default CancellationPolicy;
