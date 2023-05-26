import React from 'react';
import firstlogo from '../assets/All Images/Vector.png'
import shondlogo from '../assets/All Images/Vector-1.png'

const Blog = () => {
    return (
        <>
            <div className='bg-gray-50 text-center pt-10 '>
                <img className='absolute top-0 right-0 w-48 ' src={shondlogo} alt="" />
                <h1 className='text-3xl font-bold -mb-16'>Blog</h1>
                <img className='relative top-0 left-0 w-48' src={firstlogo} alt="" />
            </div>
            <div className='w-[95vw] md:w-[50vw] mx-auto my-10'>
                <div className='p-4 bg-gray-50 m-4 rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold mb-2'>When should you use context API?</h1>
                    <p>We should use the Context API in React when you need to share data or state across multiple components, passing props down becomes cumbersome, or you need to update the state in one component and reflect the change in multiple other components. However, it's not a replacement for more complex state management solutions, and you should be mindful of performance implications.</p>
                </div>
                <div className='p-4 bg-gray-50 m-4 rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold mb-2'>What is a custom hook?</h1>
                    <p>A custom hook is a reusable function in React that encapsulates common logic used across multiple components. It allows you to abstract away complex logic and use it across different parts of your application. Custom hooks start with the prefix "use" and can be used to manage state, fetch data, or perform other actions. They provide a simple and intuitive way to share logic between components without the need for higher-order components, render props, or other complex patterns.</p>
                </div>
                <div className='p-4 bg-gray-50 m-4 rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold mb-2'>What is useRef?</h1>
                    <p>useRef is a built-in hook in React that provides a way to create a mutable object that persists across component renders. It returns a ref object that can be used to reference an element in the DOM or to store any mutable value that needs to persist across renders. The value of a ref can be accessed and modified without causing a re-render of the component. useRef is commonly used for accessing DOM elements, managing focus, or keeping track of previous values of props or state.</p>
                </div>
                <div className='p-4 bg-gray-50 m-4 rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold mb-2'>What is useMemo?</h1>
                    <p>useMemo is a built-in hook in React that provides a way to memoize a function's return value and prevent unnecessary re-renders of a component. It takes a function and a dependency array as input and returns a memoized value that only changes when the dependencies change. useMemo is useful for expensive calculations or operations that don't need to be re-run on every render. By memoizing the value, you can improve the performance of your application by avoiding unnecessary computations.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;