import Image from "next/image";

const EmailSuccessPage = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="max-w-md text-center space-y-3">
        <Image
          width={1000}
          height={1000}
          className="w-60 h-60 mx-auto"
          src="/assets/email-verification.png"
          alt="Email Verification"
        />

        <h2>Check your email</h2>

        <p>
          To confirm your email address, tap the link in the email we sent to
          you.
        </p>
      </div>
    </div>
  );
};

export default EmailSuccessPage;
