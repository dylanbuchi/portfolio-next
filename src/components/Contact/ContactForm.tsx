import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import SuccessAlert from 'components/Alerts/SuccessAlert';
import { Props } from 'interfaces/props';
import { emailChecker } from 'utilities/functions';

interface ContactFormProps extends Props {
  method?: string;
  action?: string;
  name?: string;
  setMessageOverflow: Dispatch<SetStateAction<boolean>>;
}

const ContactForm = ({
  className = '',
  method = 'POST',
  name = 'contact',
  setMessageOverflow,
}: ContactFormProps) => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmittedWithSuccess, setFormSubmittedWithSuccess] =
    useState(false);

  const [submitBtnIsDisabled, setSubmitBtnIsDisabled] = useState(true);

  const FORM_BASE_URL = ' https://getform.io/f';
  const FORM_ENDPOINT = `${FORM_BASE_URL}/${process.env.getFormIoEndpoint}`;

  const labelStyles = 'block text-sm font-medium';

  useEffect(() => {
    const displayAlert = setTimeout(() => {
      setFormSubmittedWithSuccess(false);
    }, 4000);

    return () => clearTimeout(displayAlert);
  }, [formSubmittedWithSuccess, setFormSubmittedWithSuccess]);

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
        setFormSubmittedWithSuccess(true);
        resetQuery();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { email } = query;

    if (!email) {
      setSubmitBtnIsDisabled(true);
      return;
    }

    const isEmailValid = emailChecker(email);
    const areValuesFilled = Object.values(query).every((item) => item !== '');

    setSubmitBtnIsDisabled(!(isEmailValid && areValuesFilled));
  }, [query]);

  useEffect(() => {
    const { message } = query;

    if (!message) {
      setMessageOverflow(false);
      return;
    }

    setMessageOverflow(true);
  }, [query, setMessageOverflow]);

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
            maxLength={29}
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="input-form"
            onChange={(event) => handleOnChange(event)}
            value={query.name}
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <div className="mt-1">
          <input
            maxLength={29}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="input-form"
            onChange={(event) => handleOnChange(event)}
            value={query.email}
          />
        </div>
      </div>
      <div className="mt-6 sm:col-span-2">
        <label htmlFor="subject" className={labelStyles}>
          Subject
        </label>
        <div className="mt-1">
          <input
            maxLength={64}
            type="text"
            name="subject"
            id="subject"
            className="input-form"
            onChange={(event) => handleOnChange(event)}
            value={query.subject}
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
            maxLength={918}
            rows={2}
            className="input-form"
            aria-describedby="message-max"
            onChange={(event) => handleOnChange(event)}
            value={query.message}
          />
        </div>
      </div>
      <div className="mt-6 sm:col-span-2 sm:flex sm:justify-end lg:mt-7">
        <button
          disabled={submitBtnIsDisabled}
          type="submit"
          className={`hover:lumos inline-flex  items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white_gray shadow-sm focus:outline-none focus:ring-2 focus:ring-primary_20 focus:ring-offset-2 dark:bg-accent_primary dark:text-white  ${
            formSubmittedWithSuccess
              ? 'outline:none pointer-events-none invisible'
              : ''
          }${
            submitBtnIsDisabled
              ? ' pointer-events-none bg-gray-600 opacity-50 dark:bg-gray-500'
              : ''
          }`}
        >
          Submit
        </button>
      </div>
      {formSubmittedWithSuccess && (
        <div className="absolute  -bottom-5 right-0 -left-0 sm:bottom-0">
          <SuccessAlert
            onClick={setFormSubmittedWithSuccess}
            message="Your message has been sent with success!"
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
