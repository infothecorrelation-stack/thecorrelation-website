"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const CompactLeadForm = ({ courseName = "general", courseDisplayName = "Our Program" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    background: "",
    employment: "",
  });

  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
        setToastType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.email.trim()) return "Email is required";
    if (!validateEmail(formData.email)) return "Invalid email format";
    if (!formData.education) return "Education level is required";
    if (!formData.background) return "Educational background is required";
    if (!formData.employment) return "Employment status is required";
    return null;
  };

  useEffect(() => {
    const filled = Object.values(formData).filter((val) => val.trim()).length;
    setProgress(Math.round((filled / 6) * 100));
  }, [formData]);

  const submitForm = async (data) => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        return { success: false, error: result.error || `HTTP error! status: ${response.status}` };
      }

      return { success: true, message: result.message, result };

    } catch (error) {
      return { success: false, error: error.message || "Unexpected error occurred" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return showToast(error, "error");

    setIsSubmitting(true);

    try {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const formattedTimestamp = `${hours}:${minutes} - ${day}/${month}/${year}`;

      const submissionData = {
        ...formData,
        courseName: courseName,
        timestamp: formattedTimestamp,
      };

      const result = await submitForm(submissionData);

      if (!result.success) {
        showToast(result.error || "Submission failed", "error");
        return;
      }

      showToast(result.message || "Submission successful", "success");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          toastType === "success" 
            ? "bg-green-500 text-white" 
            : "bg-red-600 text-white"
        }`}>
          <div className="flex items-center space-x-2">
            {toastType === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold">!</span>
              </div>
            )}
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      <div className="w-full h-full bg-black/30 backdrop-blur-xl p-6 lg:p-8 rounded-2xl shadow-2xl border border-orange-400/30">
        {!submitted ? (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 mb-3">
                <Sparkles className="h-3 w-3 text-orange-400 mr-2" />
                <span className="text-xs font-medium text-orange-400">Start Your Journey</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">
                {courseDisplayName ? `Enquire for ${courseDisplayName}` : "Enquire Now"}
              </h2>
              <p className="text-gray-300 text-sm">Transform your career in minutes</p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-300 mb-2">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-orange-500 to-orange-400 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <input
              name="name"
              placeholder="Full Name"
              className="w-full p-2.5 rounded-lg border bg-white/10 text-white placeholder-gray-400 border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
              onChange={handleChange}
              value={formData.name}
            />

            <div>
              <label className="block text-xs mb-1.5 font-medium text-gray-300">
                Education Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["schooling", "graduation", "postgraduate", "Diploma"].map((val) => (
                  <button
                    type="button"
                    key={val}
                    className={`w-full px-2 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                      formData.education === val
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white/10 text-gray-300 border-white/20 hover:border-orange-400"
                    }`}
                    onClick={() => handleOptionClick("education", val)}
                  >
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1.5 font-medium text-gray-300">
                Educational Background
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["commerce", "science-engineering", "arts", "others"].map((val) => (
                  <button
                    type="button"
                    key={val}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                      formData.background === val
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white/10 text-gray-300 border-white/20 hover:border-orange-400"
                    }`}
                    onClick={() => handleOptionClick("background", val)}
                  >
                    {val.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1.5 font-medium text-gray-300">
                Employment Status
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["studying", "working", "Self-Employed", "on-break"].map((val) => (
                  <button
                    type="button"
                    key={val}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                      formData.employment === val
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white/10 text-gray-300 border-white/20 hover:border-orange-400"
                    }`}
                    onClick={() => handleOptionClick("employment", val)}
                  >
                    {val.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2.5 rounded-lg border bg-white/10 text-white placeholder-gray-400 border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
              onChange={handleChange}
              value={formData.phone}
            />

            <input
              name="email"
              placeholder="Email Address"
              className="w-full p-2.5 rounded-lg border bg-white/10 text-white placeholder-gray-400 border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
              onChange={handleChange}
              value={formData.email}
            />

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-2.5 font-semibold rounded-lg transition-all duration-200 text-sm ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-green-600 hover:shadow-lg transform hover:scale-105"
              } text-white`}
            >
              {isSubmitting ? "Submitting..." : "Enquire Now"}
            </button>
          </div>
        ) : (
          <div className="text-center p-6 bg-green-500/20 border border-green-400/30 rounded-lg">
            <div className="text-4xl text-green-400 font-bold mb-2">✓</div>
            <h3 className="text-xl font-semibold text-green-400 mb-1">
              Application Submitted!
            </h3>
            <p className="text-gray-300 text-sm">
              Our experts will contact you within 24 hours{courseDisplayName && ` for ${courseDisplayName}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactLeadForm;