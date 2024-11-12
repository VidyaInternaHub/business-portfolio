"use client";

import Button from "../common/Button";

export default function Form() {
  const onSubmit = () => {};

  return (
    <form className="flex flex-col gap-4 py-8">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border border-slate-500 rounded-md outline-none focus:border-highlight"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-slate-500 rounded-md outline-none focus:border-highlight"
      />
      <input
        type="number"
        placeholder="Phone no."
        className="w-full p-2 border border-slate-500 rounded-md outline-none focus:border-highlight"
      />
      <textarea
        placeholder="How we can help you?"
        className="w-full h-24 resize-none overflow-auto p-2 border border-slate-500 rounded-md outline-none focus:border-highlight"
      ></textarea>
      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" />
        <span className="text-sm">
          By sending this form I confirm that I have read and accept
          VidyaInterna Hub Privacy Policy
        </span>
      </div>
      <Button buttonType="highlightButton" onClick={onSubmit}>
        Send
      </Button>
    </form>
  );
}
