import { Props } from 'interfaces/props';

interface ContactFormProps extends Props {
  method?: string;
  action?: string;
  name?: string;
}

const ContactForm = ({
  className = '',
  method = 'POST',
  action = '#',
  name = 'contact',
}: ContactFormProps) => {
  const labelStyles = 'block text-sm font-medium';

  return (
    <form
      netlify-honeypot="bot-field"
      data-netlify="true"
      name={name}
      action={action}
      method={method}
      className={`${className}`}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="mt-6">
        <div className="hidden">
          <label htmlFor="bot-field" className={labelStyles}>
            First Name
          </label>
          <input
            name="bot-field"
            type="text"
            className="input-form my-1 py-2"
          />
        </div>
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="input-form"
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="input-form"
          />
        </div>
      </div>
      <div className="mt-6 sm:col-span-2">
        <label htmlFor="subject" className={labelStyles}>
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            className="input-form"
          />
        </div>
      </div>
      <div className="mt-6 sm:col-span-2">
        <div className="flex justify-between">
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            maxLength={500}
            rows={2}
            className="input-form"
            aria-describedby="message-max"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="mt-6 mb-10 sm:col-span-2 sm:flex sm:justify-end lg:mt-7">
        <button
          type="submit"
          className="hover:lumos inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white_gray shadow-sm focus:outline-none focus:ring-2 focus:ring-primary_20 focus:ring-offset-2 dark:bg-accent_primary dark:text-white sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
