import emailjs from "@emailjs/browser";

interface EmailData {
  fullName: string;
  email: string;
  phone: string;
  about: string;
}

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string);

export const sendEmail = async ({
  fullName,
  email,
  phone,
  about,
}: EmailData) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      {
        from_name: fullName,
        from_email: email,
        phone_number: phone,
        about: about,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
    );
  } catch (error) {
    throw error;
  }
};
