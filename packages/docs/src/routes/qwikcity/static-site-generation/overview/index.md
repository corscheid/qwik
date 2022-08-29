---
title: Static Site Generation (SSG) Overview
---

# Static Site Generation (SSG) Overview

Static Site Generation, or commonly referred to as "SSG", is the process of pre-rendering site webpages into static HTML files. The benefit is that when a visitor requests the webpage, the response is an pre-generated HTML file (a static file), and doesn't require the webpage's HTML to "rebuild" on the visitors browser, or dynamically created by your server (more on this later).

Additionally, due to Qwik's underlying architecture, page performance also benefits by not requiring a Javascriopt "hydration" step, which can significantly lower performance and slow down user interactivity. By pre-rendering static `index.html` files with SSG, and combined with Qwik's [resumability](../../../docs/concepts/resumable/index.mdx), static site generation offers many performance benefits over legacy solutions.

## SSG vs. Server-Side Renered (SSR)

Qwik City is capable of taking a Qwik application, no matter if it's a "webapp" or "website", and generated static HTML. Once it's generated as HTML, Qwik is fundamentally able to "skip" rebuilding the app by using [resumability](../../../docs/concepts/resumable/index.mdx), since the app was already generated as HTML. Both Static Site Generation (SSG) and Server-Side Rendering (SSR) use the same process to generate the HTML. The main difference between the SSG and SSR however, is "when" the HTML is generated.

In a traditionall setup, SSG pre-renders each webpage at buildtime, while SSR render's each webpage on-demand for each HTTP request. SSG only needs to generate the HTML one time per build, which is great for webpages where each visitor should see the same content. In contrast, SSR is great when the webpage may be different for each visitor, and would be to render the custom HTML for each individual HTTP request.

For example, SSG is ideal for a blog or docs site, where all the content should be the same for each visitor. While SSR may work fine for a blog, it may be an unncessary strain for your HTTP servers to render the blog content for every visitor, even though they'd all end up seeing the same HTML.

However, an account dashboard would commonly have different content for each signed-in user. In this setup, each user should get their own rendered HTML with their account information, rather than everyone seeing the example same content. This is where SSR would be preferred.

Ideally, the more you can do with static site generation the better, since that'll have less costs to your servers and faster response times.

With Qwik City however, the decision to use SSG or SSR, does not have to be one or the other decision. Instead, your own implementation can choose to have some route paths use SSG, while some other pages use SSR. It's entirely up to you and your requirements.