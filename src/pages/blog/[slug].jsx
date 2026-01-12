'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Tag, Share2, Twitter, Linkedin } from 'lucide-react';
import Head from 'next/head';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shareUrl, setShareUrl] = useState('');

  // Set share URL on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.data) {
          setBlog(data.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError('Unable to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* ------------------ STATES ------------------ */

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-900 text-lg font-medium">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-24">
        <div className="text-center max-w-md">
          <div className="text-red-600 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold mb-2">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <a href="/blog" className="px-6 py-3 bg-red-600 text-white rounded-full">
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  /* ------------------ UI ------------------ */

  return (
    <>
    <Head>
  {/* Dynamic Title */}
  <title>
    {blog.title} | Data Science & AI Blog | TheCorrelation
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content={
      blog.excerpt ||
      `Read expert insights on ${blog.category} by TheCorrelation. Learn Data Science, AI, Machine Learning and career guidance.`
    }
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content={`Data Science Blog, AI Blog, Machine Learning Blog, ${blog.category}, ${blog.tags || ''}, TheCorrelation`}
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Canonical */}
  <link
    rel="canonical"
    href={`https://thecorrelation.in/blog/${slug}`}
  />

  {/* Open Graph */}
  <meta property="og:title" content={blog.title} />
  <meta
    property="og:description"
    content={
      blog.excerpt ||
      `Expert-written blog on ${blog.category} by TheCorrelation.`
    }
  />
  <meta
    property="og:url"
    content={`https://thecorrelation.in/blog/${slug}`}
  />
  <meta property="og:type" content="article" />
  <meta
    property="og:image"
    content={
      blog.image
        ? blog.image
        : 'https://thecorrelation.in/Top-logo1.png'
    }
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={blog.title} />
  <meta
    name="twitter:description"
    content={
      blog.excerpt ||
      `Read this ${blog.category} article by TheCorrelation.`
    }
  />

  {/* 🔥 BLOG STRUCTURED DATA (JSON-LD) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.image || "https://thecorrelation.in/Top-logo1.png",
        "author": {
          "@type": "Person",
          "name": blog.author || "TheCorrelation Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "TheCorrelation",
          "logo": {
            "@type": "ImageObject",
            "url": "https://thecorrelation.in/Top-logo1.png"
          }
        },
        "datePublished": blog.date,
        "dateModified": blog.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://thecorrelation.in/blog/${slug}`
        }
      })
    }}
  />
</Head>

    <div className="bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="px-4 md:px-12 py-14 pt-24">
        <a href="/blog" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Blogs
        </a>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 md:px-8 pb-12"
      >
        {/* Featured Image */}
        {blog.image && (
          <div className="w-full h-64 md:h-96 relative rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src={`/api/image-proxy?url=${encodeURIComponent(blog.image)}`}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-8">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6 border-b pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-red-600" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-600" />
              {new Date(blog.date).toDateString()}
            </div>
            {blog.tags && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-red-600" />
                {blog.tags}
              </div>
            )}
          </div>

          {blog.excerpt && (
            <p className="text-lg italic border-l-4 border-red-600 pl-4">
              {blog.excerpt}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.content.replace(/\n/g, '<br />'),
            }}
          />
        </div>

        {/* Share Section */}
       

        {/* Back */}
        <div className="text-center mt-8">
          <a href="/blog" className="inline-block px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            View All Blogs
          </a>
        </div>
      </motion.article>
    </div>
    </>
  );
};

export default BlogDetail;