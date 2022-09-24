import { Props } from 'interfaces/props';
import SuccessAlert from 'components/SuccessAlert';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface ContactFormProps extends Props {
  method?: string;
  action?: string;
  name?: string;
}

const ContactForm = ({
  className = '',
  method = 'POST',
  name = 'contact',
}: ContactFormProps) => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const FORM_BASE_URL = ' https://getform.io/f';
  const FORM_ENDPOINT = `${FORM_BASE_URL}/${process.env.getFormIoEndpoint}`;

  const labelStyles = 'block text-sm font-medium';

  useEffect(() => {
    const displayAlert = setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);

    return () => clearTimeout(displayAlert);
  }, [formSubmitted, setFormSubmitted]);

  const resetQuery = () => {
    setQuery({ name: '', email: '', message: '', subject: '' });
  };

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setQuery((previousQuery) => ({ ...previousQuery, [name]: value }));
  };

  const handleOnSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormSubmitted(true);
        resetQuery();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      name={name}
      method={method}
      className={`${className} relative`}
      onSubmit={(event) => {
        return handleOnSubmitForm(event);
      }}
    >
      <div className="mt-6">
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
            onChange={(event) => handleOnChange(event)}
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
            onChange={(event) => handleOnChange(event)}
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
            onChange={(event) => handleOnChange(event)}
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
            onChange={(event) => handleOnChange(event)}
          />
        </div>
      </div>
      <div className=" mt-6 mb-10 sm:col-span-2 sm:flex sm:justify-end lg:mt-7">
        <button
          type="submit"
          className={`hover:lumos inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white_gray shadow-sm focus:outline-none focus:ring-2 focus:ring-primary_20 focus:ring-offset-2 dark:bg-accent_primary dark:text-white sm:w-auto ${
            formSubmitted ? 'invisible' : ''
          }`}
        >
          Submit
        </button>
      </div>
      {formSubmitted && (
        <div className="absolute bottom-0 right-0 -left-0 sm:bottom-8">
          <SuccessAlert
            onClick={setFormSubmitted}
            message="Your message has been sent with success!"
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
