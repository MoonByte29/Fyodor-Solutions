import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  jobTitle: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    jobTitle: "",
  });

  // Ref for GSAP animation
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { rotate: -15, y: -50, opacity: 0 }, // tilted start
        {
          rotate: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.6)", // bouncy effect
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
      {/* Left side heading with GSAP */}
      <div
        ref={headingRef}
        className="text-6xl md:text-8xl font-extrabold leading-tight space-y-0 origin-left"
      >
        <span className="block text-white">Let’s</span>
        <span className="block text-blue-500 ml-5 mt-0">Talk!</span>
      </div>

      {/* Right side form */}
      <div className="flex-1 max-w-3xl bg-blue-500/20 rounded-xl shadow-lg p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Company Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Company Email"
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select...</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="w-full bg-blue-100/10 rounded-xl px-4 py-3 text-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
