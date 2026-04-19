const CONTACT_FORM_ENDPOINT = "/api/contact";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeValue(value, limit = 5000) {
  return String(value ?? "")
    .trim()
    .replace(/\r\n/g, "\n")
    .slice(0, limit);
}

export function validateContactForm(values) {
  const errors = {};
  const payload = {
    name: normalizeValue(values.name, 120),
    email: normalizeValue(values.email, 180),
    message: normalizeValue(values.message, 4000),
  };

  if (payload.name.length < 2) {
    errors.name = "Zadajte prosím meno.";
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Zadajte prosím platný e-mail.";
  }

  if (payload.message.length < 12) {
    errors.message = "Správa by mala mať aspoň 12 znakov.";
  }

  return errors;
}

export async function submitContactForm(values, endpoint = CONTACT_FORM_ENDPOINT) {
  const payload = {
    name: normalizeValue(values.name, 120),
    email: normalizeValue(values.email, 180),
    company: normalizeValue(values.company, 160),
    phone: normalizeValue(values.phone, 80),
    message: normalizeValue(values.message, 4000),
    website: normalizeValue(values.website, 160),
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.ok) {
    const error = new Error(data.message || "Správu sa nepodarilo odoslať.");
    error.details = data.errors;
    throw error;
  }

  return data;
}

export function initForms(root = document) {
  const forms = root.querySelectorAll("[data-contact-form]");

  forms.forEach((form) => {
    if (form.dataset.formBound === "true") {
      return;
    }

    form.dataset.formBound = "true";

    const feedbackNode = form.querySelector("[data-form-message]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const errors = validateContactForm(values);

      form.querySelectorAll(".form-input").forEach((field) => {
        field.classList.remove("is-invalid");
      });

      if (Object.keys(errors).length > 0) {
        Object.keys(errors).forEach((name) => {
          const field = form.querySelector(`[name="${name}"]`);
          if (field) {
            field.classList.add("is-invalid");
          }
        });

        if (feedbackNode) {
          feedbackNode.dataset.status = "error";
          feedbackNode.textContent = "Skontrolujte prosím formulár a doplňte povinné údaje.";
        }

        return;
      }

      form.classList.add("is-loading");

      if (feedbackNode) {
        feedbackNode.dataset.status = "loading";
        feedbackNode.textContent = "Odosielam správu...";
      }

      try {
        const result = await submitContactForm(values);
        form.reset();

        if (feedbackNode) {
          feedbackNode.dataset.status = "success";
          feedbackNode.textContent = result.message;
        }
      } catch (error) {
        if (feedbackNode) {
          feedbackNode.dataset.status = "error";
          feedbackNode.textContent =
            error.message || "Správu sa nepodarilo odoslať. Skúste to prosím znova.";
        }
      } finally {
        form.classList.remove("is-loading");
      }
    });
  });
}
