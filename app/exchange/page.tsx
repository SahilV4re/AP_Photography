import React from 'react';

const ShippingExchangePolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
      <h2 className="text-4xl font-bold font-[var(--font-playfair)] mb-8 text-left">
        Shipping & Exchange Policy
      </h2>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          1. Delivery of Digital Images
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          All edited digital images are delivered via secure online gallery or downloadable link within 7–14 business days from the shoot date, unless stated otherwise. A notification will be sent via email once your photos are ready.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          2. Shipping of Physical Products
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          If you’ve ordered printed photos, albums, or other physical products, shipping is available across India. Shipping charges and timelines vary based on location and product type, and will be communicated during order confirmation.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          3. Shipping Timelines
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          Physical products are typically shipped within 5–10 business days after final approval. Delays caused by third-party couriers or force majeure (weather, natural disasters, etc.) are beyond our control.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          4. Tracking Information
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          Once your order has been shipped, you will receive a tracking number via email or WhatsApp. Please allow 24 hours for the tracking information to become active.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          5. Exchanges & Replacements
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          Since our products are custom-made and personalized, we do not offer exchanges. However, if you receive a damaged or incorrect item, please notify us within 3 days of delivery with photos of the issue, and we will arrange a replacement at no extra cost.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          6. International Shipping
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          We currently do not offer international shipping. However, digital downloads are available worldwide.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold font-[var(--font-playfair)] mb-2">
          7. Contact for Shipping Support
        </h3>
        <p className="text-base font-[var(--font-inter)] text-gray-700 leading-relaxed">
          For questions related to your shipment or delivery, please email us at <span className="text-black font-medium">hello@luminaPhotography.com</span> with your order details.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8 text-center">
        Last updated: July 7, 2025
      </p>
    </div>
  </div>
);

export default ShippingExchangePolicy;
