"use client";

import Button from "../common/Button";

export default function Form() {
  const onSubmit = () => {};

  return (
    <form className="flex flex-col gap-4 py-8">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-5 py-3 rounded-xl outline-none focus:border-highlight"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-5 py-3 rounded-xl outline-none focus:border-highlight"
      />
      <input
        type="number"
        placeholder="Phone no."
        className="w-full px-5 py-3 rounded-xl outline-none focus:border-highlight"
      />
      <textarea
        placeholder="How we can help you?"
        className="w-full h-24 resize-none overflow-auto p-2 rounded-2xl outline-none focus:border-highlight"
      ></textarea>
      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" />
        <span className="text-secondary text-sm">
          By sending this form I confirm that I have read and accept
          VidyaInterna Hub Privacy Policy
        </span>
      </div>
      <Button buttonType="primaryDarkButton" onClick={onSubmit}>Send</Button>
    </form>
  );
}
