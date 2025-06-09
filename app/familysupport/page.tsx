import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const FamilySupportPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Family Support</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Local Services & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Health Clinics</h3>
              <p className="text-gray-700">
                Information and listings for local health clinics and medical services available to families.
                (Placeholder content for health clinics)
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Educational Programs</h3>
              <p className="text-gray-700">
                Details on local educational resources, tutoring services, and school support programs for children of all ages.
                (Placeholder content for educational programs)
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Legal Assistance</h3>
              <p className="text-gray-700">
                Guidance and contacts for legal services and assistance related to family matters.
                (Placeholder content for legal assistance)
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Childcare Services</h3>
              <p className="text-gray-700">
                Listings and information about local childcare options, including daycare centers and nannies.
                (Placeholder content for childcare services)
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Counseling & Mental Health</h3>
              <p className="text-gray-700">
                Information on local counseling services and mental health support for families and individuals.
                (Placeholder content for counseling and mental health)
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Financial Aid & Support</h3>
              <p className="text-gray-700">
                Details on local programs offering financial assistance and support to families in need.
                (Placeholder content for financial aid)
              </p>
            </div>
          </div>
        </section>

        {/* Add more sections as needed */}

      </main>
      <Footer />
    </div>
  );
};

export default FamilySupportPage;