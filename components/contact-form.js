"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { submitContactForm, validateContactForm } from "@/js/components/forms";

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  website: "",
};

export function ContactForm({
  title = "Napíšte nám o vašom projekte",
  description = "Formulár posiela správy cez Netlify Function a SMTP2GO. Po nasadení stačí doplniť tri prostredné premenné v Netlify.",
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Skontrolujte prosím formulár a doplňte povinné údaje.");
      return;
    }

    setStatus("loading");
    setFeedback("Odosielam správu...");

    try {
      const response = await submitContactForm(values);
      setStatus("success");
      setFeedback(response.message);
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Správu sa nepodarilo odoslať. Skúste to prosím znova.");
    }
  }

  return (
    <Reveal className="contact-form-panel">
      <div className="max-w-2xl">
        <p className="section-kicker">Kontaktný formulár</p>
        <h3 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">{title}</h3>
        <p className="mt-4 text-base leading-8 text-muted">{description}</p>
      </div>

      <form
        className={`contact-form ${status === "loading" ? "is-loading" : ""}`}
        method="post"
        action="/api/contact"
        noValidate
        onSubmit={handleSubmit}
        data-contact-form
      >
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form-grid">
          <label className="form-field">
            <span className="form-label">Meno a priezvisko</span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? "is-invalid" : ""}`}
              placeholder="Vaše meno"
              autoComplete="name"
            />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>

          <label className="form-field">
            <span className="form-label">E-mail</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "is-invalid" : ""}`}
              placeholder="vas@email.sk"
              autoComplete="email"
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>

          <label className="form-field">
            <span className="form-label">Firma</span>
            <input
              type="text"
              name="company"
              value={values.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Názov firmy"
              autoComplete="organization"
            />
          </label>

          <label className="form-field">
            <span className="form-label">Telefón</span>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+421..."
              autoComplete="tel"
            />
          </label>

          <label className="form-field form-field-full">
            <span className="form-label">Správa</span>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className={`form-input form-textarea ${errors.message ? "is-invalid" : ""}`}
              rows={6}
              placeholder="Napíšte nám, čo potrebujete realizovať."
            />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="button-primary" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <span className="form-spinner" aria-hidden="true" />
                Odosielam
              </>
            ) : (
              "Odoslať správu"
            )}
          </button>

          <div
            className="form-message"
            data-status={status}
            data-form-message
            aria-live="polite"
          >
            {feedback}
          </div>
        </div>
      </form>
    </Reveal>
  );
}
