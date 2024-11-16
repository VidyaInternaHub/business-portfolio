"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateAbout,
  validatePrivacyPolicy,
} from "@/utils/validation";
import { sendEmail } from "@/utils/emailController";
import Button from "../../common/Button";
import Input from "../../common/Input";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);

      await sendEmail({
        fullName: data["full-name"],
        email: data["email"],
        phone: data["phone"],
        about: data["about"],
      });

      toast.success(
        "Thank you for showing interest in us. One of our HRs will reach you soon!",
        { position: "bottom-left", duration: 5000 }
      );

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form" + error, { position: "bottom-left" });
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
          placeholder="eg:+19999999999"
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
