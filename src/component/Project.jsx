import React from "react";

export default function Project() {
  return (
    <>
      <div className="mt-14 text-center  font-kode-mono">
        <p className="text-2xl mb-5">My Project</p>
        <p className="text-lg">Here are a few past projects</p>
        <div className="flex flex-row px-40 gap-5 py-5">
          <div className="pt-10 pb-10 bg-gray-50 border rounded-lg w-1/3 flex items-center flex-col">
            <img
              src="https://res.cloudinary.com/dpqhebvit/image/upload/v1734334615/jz4ve93giir628a3oht5.jpg"
              className="w-auto h-60"
            ></img>

            <div id="Name" className="text-xl font-bold mt-5 ">
              Art Toy (Ecommerce)
            </div>
            <div id="Description" className="text-start mx-6">
              Currently Art toy or Designer toy become more popular, We think
              this opportunity can make a lot of income for us. So we decided to
              do Art toy website to meet the needs of Thai people. do Art toy
              website
            </div>

            <button>
              <a href="https://t-rax-black-hole.vercel.app/">See more</a>
            </button>
          </div>
          <div className="pt-10 pb-10 bg-gray-50 border rounded-lg w-1/3 flex items-center flex-col">
            <img
              src="https://res.cloudinary.com/dpqhebvit/image/upload/v1734627327/dwvbywbq0lpz0pojxxv0.jpg"
              className="w-auto h-60"
            ></img>

            <div id="Name" className="text-xl font-bold mt-5 ">
              MyBlog
            </div>
            <div id="Description" className="text-start mx-6">
              If you're feeling bad, if you want someone to be with you, just
              check-in with my website. I'm here to be with yuou and already to
              share the positive things to you.
            </div>

            <button>
              <a href="my-blog-front-i5rk2o1n1-thatchai-thaiklas-projects.vercel.app">
                See more
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
