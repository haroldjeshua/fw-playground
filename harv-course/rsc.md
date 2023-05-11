# RSC

pros:

- load faster - don't have to wait for JS to load
- smaller client bundle size
- SEO friendly
- access to resources the client can't access
- hide sensitive data from the client
- more secure against XSS attacks
- improved DX

just like with anything else, there are also disadvantages
cons:

- not as interactive
- no component state, we can not use the `useState` hook
- no component lifecycle methods, we cannot use the `useEffect` hook
