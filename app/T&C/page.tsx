import React from 'react';

const Terms: React.FC = () => (
    <div className="max-w-8xl mx-auto px-6 py-12 pt-20">
        <div className="bg-gray-100 rounded-xl shadow-sm p-8">
    <h2 className="text-4xl font-bold font-[var(--font-playfair)] mb-8 text-center">
      Terms and Conditions
    </h2>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        1. Booking & Payment
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        A non-refundable deposit of 30% is required at the time of booking to secure your session date. The remaining balance is due on or before the day of the session.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        2. Session Details
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        Sessions begin and end at the scheduled time. Please arrive on time. Extra time is billed separately if available.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        3. Cancellation & Rescheduling
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        Canceling within 48 hours of the session may result in deposit forfeiture. One-time rescheduling is allowed with 48 hour&apos;s notice.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        4. Image Delivery
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        Edited images will be delivered digitally within 7–14 business days. RAW files are not provided.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        5. Usage & Copyright
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        The photographer retains all copyrights. Images may be used for promotional purposes. Clients may use photos for personal use; commercial use requires written permission.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        6. Client Cooperation
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        Clients are responsible for punctuality and cooperation during the session. We are not liable for issues arising from unpreparedness or non-cooperation.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        7. Liability
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        We are not liable for any damages, injuries, or losses during the session. Liability is limited to the amount paid.
      </p>
    </section>

    <section>
      <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
        8. Acceptance
      </h3>
      <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
        By booking a session, you agree to all the above terms and conditions.
      </p>
            </section>
            </div>
  </div>
);

export default Terms;
