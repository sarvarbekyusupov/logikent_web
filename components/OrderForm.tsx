"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export default function OrderForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digits and spaces
    let value = e.target.value.replace(/[\D\s]/g, "");

    // If user typed 998 at the beginning, remove it (it's already shown as +998)
    if (value.startsWith("998")) {
      value = value.slice(3);
    }

    // Limit to 9 digits
    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // Format phone for display in input (with spaces)
  const formatPhoneInput = (phone: string) => {
    const digits = phone.replace(/[\D\s]/g, "");
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    if (digits.length <= 7) return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 7)} ${digits.slice(7)}`;
  };

  const formatPhoneNumber = (phone: string) => {
    // phone is stored as raw digits (e.g., "901234567")
    if (!phone) return "+998 ";

    // phone is already clean digits from handlePhoneChange
    const digits = phone;

    // Format: +998 90 123 45 67 (groups: 2, 3, 2, 2)
    if (digits.length <= 2) {
      return `+998 ${digits}`;
    } else if (digits.length <= 5) {
      return `+998 ${digits.slice(0, 2)} ${digits.slice(2)}`;
    } else if (digits.length <= 7) {
      return `+998 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
    } else {
      // 9 digits: +998 90 123 45 67
      return `+998 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 7)} ${digits.slice(7)}`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone") {
      handlePhoneChange(e as ChangeEvent<HTMLInputElement>);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-12 h-100" id="contact">
      <div className="card shadow-lg border-0 h-100">
        <div className="card-body p-5 d-flex flex-column">
          <h3 className="card-title text-center mb-4 fw-bold" style={{ color: "var(--primary-color)" }}>
            {t("order-form-title") || "Place Your Order"}
          </h3>

          {submitStatus === "success" && (
            <div className="alert alert-success" role="alert">
              {t("order-success") || "Thank you! Your order has been submitted successfully. We will contact you shortly."}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="alert alert-danger" role="alert">
              {t("order-error") || "Sorry, there was an error submitting your order. Please try again or contact us directly."}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grow">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">
                {t("order-name") || "Name"} *
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("order-name-placeholder") || "Enter your full name"}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="company" className="form-label fw-medium">
                {t("order-company") || "Company Name"}
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("order-company-placeholder") || "Enter your company name (optional)"}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label fw-medium">
                  {t("order-phone") || "Phone"} *
                </label>
                <div className="input-group">
                  <span className="input-group-text" style={{ fontSize: "16px", fontWeight: "500" }}>
                    +998
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formatPhoneInput(formData.phone)}
                    onChange={handleChange}
                    required
                    placeholder=""
                    maxLength={12}
                    style={{ fontFamily: "monospace" }}
                  />
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label fw-medium">
                  {t("order-email") || "Email"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-medium">
                {t("order-message") || "Message / Order Details"} *
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t("order-message-placeholder") || "Describe your order or inquiry..."}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg px-5"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? "var(--secondary-color)" : "var(--primary-color)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "12px 40px",
                  fontWeight: "600",
                  transition: "all 0.3s",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = "var(--secondary-color)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = "var(--primary-color)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {t("order-submitting") || "Sending..."}
                  </>
                ) : (
                  t("order-submit") || "Submit Order"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
