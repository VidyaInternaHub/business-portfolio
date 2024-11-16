"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../common/Button";
import Input from "../../common/Input";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      "full-name": "",
      email: "",
      phone: "",
      about: "",
      "privacy-policy": false,
    },
    mode: "onBlur",
  });

  const validateName = (value: string) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    if (value.length > 50) return "Name must be less than 50 characters";
    if (!/^[A-Za-z\s]+$/.test(value))
      return "Name can only contain letters and spaces";
    return true;
  };

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) return "Invalid email address";
    return true;
  };

  const validatePhone = (value: string) => {
    if (!value) return "Phone number is required";
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(value))
      return "Invalid phone number (10 digits required)";
    return true;
  };

  const validateAbout = (value: string) => {
    if (!value) return "Project description is required";
    if (value.length < 200) return "Please write at least 200 characters";
    if (value.length > 10000) return "Please keep it under 10000 characters";
    return true;
  };

  const validatePrivacyPolicy = (value: boolean) => {
    if (!value) return "You must accept the privacy policy";
    return true;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Form submitted successfully", { position: "bottom-left" });
    } catch (error) {
      toast.error("Failed to submit form", { position: "bottom-left" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-8">
        <Input
          id="full-name"
          disabled={isLoading}
          register={register}
          validate={validateName}
          errors={errors}
          required
          label="Full Name"
          placeholder="eg: John Doe"
        />
        <Input
          id="email"
          disabled={isLoading}
          register={register}
          validate={validateEmail}
          errors={errors}
          required
          label="Email"
          type="email"
          placeholder="eg: johndoe@email.com"
        />
        <Input
          id="phone"
          disabled={isLoading}
          register={register}
          validate={validatePhone}
          errors={errors}
          pattern="[+0-9]+"
          onKeyDown={(e) => {
            if (
              !/[0-9+]/.test(e.key) &&
              !["Backspace", "Delete", "Tab", "Escape", "Enter"].includes(e.key)
            ) {
              e.preventDefault();
            }
          }}
          required
          label="Phone no."
          type="tel"
          placeholder="eg: 99999 99999"
        />
        <div className="mb-6">
          <label htmlFor="about" className="block font-medium text-gray-900">
            About your project
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              disabled={isLoading}
              {...register("about", {
                required: true,
                validate: validateAbout,
              })}
              rows={3}
              className={`block w-full bg-background rounded-xl border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 outline-none placeholder:text-gray-400 focus:ring-inset disabled:bg-opacity-70 disabled:cursor-not-allowed ${
                errors["about"]
                  ? "focus:ring-rose-600"
                  : "focus:ring-indigo-600"
              }`}
            />
          </div>
          {errors["about"] && (
            <p className="mt-1 text-sm text-rose-600">
              {errors["about"]?.message as string}
            </p>
          )}
        </div>
        <div className="mb-4 flex items-start gap-2">
          <input
            id="privacy-policy"
            disabled={isLoading}
            {...register("privacy-policy", {
              required: true,
              validate: validatePrivacyPolicy,
            })}
            required
            type="checkbox"
            className="mt-1"
          />
          <span className="text-sm">
            <label
              htmlFor="privacy-policy"
              className={`text-gray-700 cursor-pointer ${
                errors["privacy-policy"] ? "text-rose-600" : ""
              }`}
            >
              By sending this form I confirm that I have read and accept
              VidyaInterna Hub Privacy Policy
            </label>
          </span>
        </div>
        <Button
          type="submit"
          buttonType="primaryDarkButton"
          disabled={isLoading}
          onClick={() => {}}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
}
