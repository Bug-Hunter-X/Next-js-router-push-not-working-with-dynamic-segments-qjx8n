# Next.js router.push issue with dynamic segments

This repository demonstrates a bug encountered when using `router.push` in Next.js to navigate to a route containing dynamic segments. The issue is that the navigation does not work as expected.

## Bug Description

The original code uses `router.push('/my-page/[id]')` to navigate to a route. This fails, and no navigation takes place.

## Solution

The solution involves correctly specifying the dynamic segment in the `router.push` method. The `id` segment must be supplied as a parameter to the function, like this: `router.push('/my-page/[id]', `/my-page/123`)`.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Notice that no navigation occurs.

## How to test the solution

1. Navigate to `bugSolution.js`
2. Run `npm run dev`
3. Click the button. Notice that the navigation works correctly.
