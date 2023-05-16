This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Knowledge about NextJS:
## Routing
- Every page needs to be called page. For every Route we need a new folder with specific name.
- Nesting routes is made by nesting directories with pages inside them. For dynamic routes [] brackets needs to be added with slug keyword. 
- [...slug] catches all dynamic routes. 
- For routes grouping name of a directory must be placed inside of parenthetis (). The name of directory is now ignored by the router.
- Routes collisions are possible. For avoiding that we need to remeber which route was added first!
## Rendering
- Layout page is doing... layout for every page in the project.
- {children} is a reactNode object pass to layout to render the page. Page content is exported as children object.
- Soft navigation is a condition when router fetches the data that has been changed from cache rather than than the server. It helps to render page quicker. Link mechanism can do that, in oposite to anchor tag (re-rendering, re-fetching and reloading of everything). Just like going to the sidebar and typing everything.
- In React app all JavaScript will be in the browser, but in Next.js default component is a server component and pure html is going to the browser. That's why I'm able to add filesystem library from node.js in contact page.
- Programatic routing is only available with client components.
- SSR is when component is rendered on the server, and html is passed to the browser with data that is serialized. Then component needs to by hydrated in client mode.
- with Server components, they're not passed as SSR components. They're just passed in a streaming way. (Default components in next.js). This solution resolves waterfall problem, typical with client components.
- async function in server component can reload by taking cache. With react I wouldn't be allowed to make async function, because it only runs once and then hooks needs to be added, just for keeping track of some variables. 
