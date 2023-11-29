import React from "react";

export default function Contact() {
  return (
    <section class="bg-white ">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl text-center ">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-centersm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="papercrown@gmail.com"
              required
            />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
          type="submit"
          className=" bg-white hover:bg-gray-100 text-gray-800  py-2 px-3  border border-gray-400 rounded shadow">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}
