import { Props } from 'interfaces/props';

interface ContactFormProps extends Props {
  method?: string;
  action?: string;
}

const ContactForm = ({ className = '', method, action }: ContactFormProps) => {
  const labelStyles = 'block text-sm font-medium';

  return (
    <form action={action} method={method} className={`${className}`}>
      <div className="mt-6 ">
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
          className="hover:lumos inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white_gray shadow-sm focus:outline-none focus:ring-2 focus:ring-primary_20 focus:ring-offset-2 dark:bg-accent_30 dark:text-white sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
