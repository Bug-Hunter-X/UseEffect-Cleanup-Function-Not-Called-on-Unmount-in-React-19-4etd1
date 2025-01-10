# React 19 useEffect Cleanup Function Issue

This repository demonstrates a problem where the cleanup function in a React 19 `useEffect` hook is not being called when the component unmounts.  This is unexpected behavior and can lead to memory leaks or other issues. 

## Problem Description

The `useEffect` hook includes a cleanup function designed to perform actions when a component is unmounted or when the effect is replaced by another. In this specific case, the cleanup function logs a message, but this message does not appear when the component is unmounted. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs. You'll see the effect run and the count update.  When you unmount the component (e.g., navigate away from the page), the cleanup function's log message should appear, but it does not.  This indicates the cleanup function is not being called.

## Solution

The provided solution involves making changes to ensure the cleanup function is called appropriately.