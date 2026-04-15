function Contact() {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Contact Us</h1>

      <form className="space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message"
            className="w-full resize-none rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
