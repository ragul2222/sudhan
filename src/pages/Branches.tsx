import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import { getBranches } from '../services/api.service';

const Branches = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['branches'],
    queryFn: getBranches,
  });

  const branches = useMemo(() => data?.data ?? [], [data]);

  return (
    <>
      <SEO
        title="Our Branches"
        description="Find Sudhan Yarns offices and warehouses across India."
      />
      <div className="min-h-screen py-16 bg-gradient-to-br from-primary-50 via-white to-textile-beige/60">
        <div className="container-custom">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-primary-50 p-8 md:p-12 mb-12">
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-primary-200/50 rounded-full blur-3xl" />
            <div className="absolute -right-8 -bottom-10 w-56 h-56 bg-textile-sand/50 rounded-full blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-semibold shadow-sm mb-4">
                  <BuildingOffice2Icon className="w-4 h-4" />
                  Nationwide Presence
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Our Branches
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Visit our offices and warehouses for swift support, sampling, and dispatch. Each location is equipped to serve premium textile clients with care.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+914211234567"
                    className="btn-primary"
                  >
                    Call Us
                  </a>
                  <a
                    href="/contact"
                    className="btn-outline"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                  <p className="text-3xl font-bold text-primary-600">2</p>
                  <p className="text-sm text-gray-600">Locations</p>
                </div>
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                  <p className="text-3xl font-bold text-primary-600">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                  <p className="text-3xl font-bold text-primary-600">Same-Day</p>
                  <p className="text-sm text-gray-600">Dispatch Ready</p>
                </div>
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                  <p className="text-3xl font-bold text-primary-600">Pan-India</p>
                  <p className="text-sm text-gray-600">Reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Branch cards */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className="animate-pulse rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm"
                >
                  <div className="h-6 w-40 bg-gray-200 rounded mb-3" />
                  <div className="h-4 w-56 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-48 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {branches.map((branch) => {
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${branch.address}, ${branch.city}, ${branch.state}`
                )}`;
                const isWarehouse = branch.type === 'warehouse';

                return (
                  <div
                    key={branch.id}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/90 backdrop-blur shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <div className="relative p-6 flex flex-col gap-4 h-full">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <BuildingOffice2Icon className="w-8 h-8 text-primary-600" />
                          <div>
                            <p className="text-sm font-semibold text-primary-600">{isWarehouse ? 'Warehouse' : 'Office'}</p>
                            <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>
                          </div>
                        </div>
                        <span className="rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs font-semibold shadow-sm">
                          {branch.city}
                        </span>
                      </div>

                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-start gap-2">
                          <MapPinIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">{branch.address}</p>
                            <p className="text-sm text-gray-600">{branch.city}, {branch.state}</p>
                          </div>
                        </div>
                        {branch.timing && (
                          <p className="text-sm text-gray-600">⏰ {branch.timing}</p>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        {branch.phone && (
                          <a
                            href={`tel:${branch.phone}`}
                            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                          >
                            <PhoneIcon className="w-5 h-5" />
                            {branch.phone}
                          </a>
                        )}
                        {branch.email && (
                          <a
                            href={`mailto:${branch.email}`}
                            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                          >
                            <EnvelopeIcon className="w-5 h-5" />
                            {branch.email}
                          </a>
                        )}
                      </div>

                      <div className="mt-auto flex gap-3">
                        <a
                          href={mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-outline w-full text-center"
                        >
                          View on Map
                        </a>
                        {branch.phone && (
                          <a
                            href={`tel:${branch.phone}`}
                            className="btn-primary w-full text-center"
                          >
                            Call Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Branches;
