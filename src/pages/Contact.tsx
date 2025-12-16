import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import { submitEnquiry } from '../services/api.service';
import type { Enquiry } from '../types';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Enquiry>();

  const onSubmit = async (data: Enquiry) => {
    setIsSubmitting(true);
    try {
      await submitEnquiry(data);
      toast.success('Enquiry submitted successfully! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Sudhan Yarns for enquiries, quotes, and more information about our products."
      />
      <div className="min-h-screen py-16 bg-gradient-to-br from-primary-50 via-white to-textile-beige/60">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold mb-2">Sudhan Yarns</p>
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Reach our head office for sampling, dispatch, and business enquiries. We typically respond within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact details */}
            <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl border border-primary-50 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <BuildingOfficeIcon className="w-8 h-8 text-primary-600" />
                <div>
                  <p className="text-sm font-semibold text-primary-700">Head Office (HO)</p>
                  <h3 className="text-2xl font-bold text-gray-900">Sudhan Yarns</h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-primary-600 mt-0.5" />
                  <div>
                    <p>111/2, Pandian Street, Kattur Road, Chennimalai – 638051.</p>
                    <p>Erode Dist, Tamil Nadu.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-primary-600" />
                  <a href="tel:+918012929999" className="font-semibold text-gray-900 hover:text-primary-700">
                    +91 80129 29999
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-primary-600" />
                  <a href="tel:+919524811655" className="font-semibold text-gray-900 hover:text-primary-700">
                    +91 95248 11655
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <PrinterIcon className="w-5 h-5 text-primary-600" />
                  <span>+91 4294 253755</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                  <div className="flex flex-col">
                    <a href="mailto:office@sudhanyarns.com" className="hover:text-primary-700">office@sudhanyarns.com</a>
                    <a href="mailto:cglvikash@gmail.com" className="hover:text-primary-700">cglvikash@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-4 text-sm text-primary-800">
                Prefer WhatsApp or quick call? We’re available during business hours for sampling & dispatch coordination.
              </div>
            </div>

            {/* Enquiry form */}
            <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="input-field"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className="input-field"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact No. *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      type="tel"
                      className="input-field"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about it *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="input-field"
                    placeholder="Fabric/yarn counts, GSM, application, timelines, and any certifications needed"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
