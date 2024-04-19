import { FC, ReactNode } from 'react';
import '../css/form.css';

const inputBoxStyles =
  'bg-transparent border-b-2 outline-none border-emerald-200 text-white p-1 my-2 w-[100%] rounded-none';

const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (
    !formData.get('name') ||
    !formData.get('email') ||
    !formData.get('message')
  ) {
    alert('Please fill out all fields to contact');
    return;
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (resData.ok) {
    alert('Message sent');
    form.reset();
  } else {
    alert(resData.message);
  }
};

const Contact: FC = (): ReactNode => {
  return (
    <div className="relative flex flex-shrink flex-grow basis-auto flex-col items-center bg-emerald-950 pt-10 text-white">
      <h1 className="relative text-2xl underline">Contact</h1>
      <form
        onSubmit={submitForm}
        className="mb-24 flex w-[60vw] flex-col items-center justify-center bg-none"
      >
        <label htmlFor="name" className="mt-4">
          Name:
        </label>
        <input
          className={`${inputBoxStyles}`}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email" className="mt-4">
          Email:
        </label>
        <input
          className={`${inputBoxStyles}`}
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="message" className="mt-4">
          Message:
        </label>
        <div className="grow-wrap mt-2 w-[100%] max-w-[100%]">
          <textarea
            className={`${inputBoxStyles} mb-2 w-[100%] max-w-[100%]`}
            id="message"
            name="message"
            onInput={(e) => {
              if (e.currentTarget.parentNode instanceof HTMLElement) {
                const parentElement = e.currentTarget.parentNode as HTMLElement;
                //I'm sure there is a way to fix this, the text box resizes but if there is no space the words will wrap
                //however the textbox won't expand
                parentElement.dataset.replicatedValue = e.currentTarget?.value;
              }
            }}
            rows={2}
          />
        </div>

        <button
          type="submit"
          className="h-[50px] w-[20%] rounded-[25px] bg-emerald-400 transition-all duration-200 ease-in-out hover:scale-110"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
