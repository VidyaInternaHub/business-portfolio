export const validateName = (value: string) => {
  if (!value) return "Name is required";
  if (value.length < 2) return "Name must be at least 2 characters";
  if (value.length > 50) return "Name must be less than 50 characters";
  if (!/^[A-Za-z\s]+$/.test(value))
    return "Name can only contain letters and spaces";
  return true;
};

export const validateEmail = (value: string) => {
  if (!value) return "Email is required";
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(value)) return "Invalid email address";
  return true;
};

export const validatePhone = (value: string) => {
  if (!value) return "Phone number is required";
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  if (!phoneRegex.test(value))
    return "Invalid phone number (10 digits required with optional country code)";
  return true;
};

export const validateAbout = (value: string) => {
  if (!value) return "Project description is required";
  if (value.length < 200) return "Please write at least 200 characters";
  if (value.length > 10000) return "Please keep it under 10000 characters";
  return true;
};

export const validatePrivacyPolicy = (value: boolean) => {
  if (!value) return "You must accept the privacy policy";
  return true;
};
