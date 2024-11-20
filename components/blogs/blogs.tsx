"use client";

import React, { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A comprehensive guide to React hooks and their usage.",
    date: "October 20, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features",
    description:
      "Explore new features introduced in JavaScript ES6 and beyond.",
    date: "November 10, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 3,
    title: "Tailwind CSS for Beginners",
    description: "Learn how to quickly build responsive UIs with Tailwind CSS.",
    date: "November 15, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 4,
    title: "Understanding TypeScript Generics",
    description:
      "A detailed guide on using generics in TypeScript for flexibility.",
    date: "October 5, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 5,
    title: "Next.js for Beginners",
    description:
      "A guide to building fast and scalable web applications with Next.js.",
    date: "September 25, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 6,
    title: "The Power of Async/Await in JavaScript",
    description: "Master asynchronous programming with async/await syntax.",
    date: "November 1, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 7,
    title: "Introduction to GraphQL",
    description:
      "An overview of how GraphQL can revolutionize your API design.",
    date: "August 30, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 8,
    title: "CSS Grid vs Flexbox",
    description:
      "Learn the key differences between CSS Grid and Flexbox layouts.",
    date: "July 15, 2024",
    author: "Ayush Sharma",
  },
  {
    id: 9,
    title: "Building Serverless Apps with AWS",
    description:
      "A step-by-step guide on building serverless applications on AWS.",
    date: "June 10, 2024",
    author: "Ayush Sharma",
  },
];

const blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Latest Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, visibleBlogs).map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
            <p className="text-sm text-secondary my-2">
              {post.date} • {post.author}
            </p>
            <p className="text-gray-600">{post.description}</p>
            <a
              href={`/blogs/${post.id}`}
              className="mt-4 inline-block text-primary font-semibold hover:text-accent"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {visibleBlogs < blogPosts.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-300"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
};

export default blogs;
