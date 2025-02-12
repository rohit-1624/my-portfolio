import React from "react";

const Contact = () => (
  <section id="contact" className="h-full py-20 bg-[#02050A] text-center flex flex-col justify-center px-8 md:px-16 items-start text-white space-y-4">
    <h2 className="text-3xl font-bold">Get in Touch</h2>
    <div className="flex flex-col items-start gap-2 text-gray-300">
      <p><span className="text-lg font-semibold">Email :</span> rohitsharmasharma4689@gmail.com</p>
      <p><span className="text-lg font-semibold">LinkedIn :</span> <a href="https://www.linkedin.com/in/rohit-sharma-870ab2261/" className="text-blue-400 hover:underline">https://www.linkedin.com/in/rohit-sharma-870ab2261/</a></p>
      <p><span className="text-lg font-semibold">GitHub :</span> <a href="https://github.com/rohit-1624" className="text-blue-400 hover:underline">https://github.com/rohit-1624</a></p>
    </div>
  </section>
);

export default Contact;
