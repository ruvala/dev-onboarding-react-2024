/**
 * This function generates the HelloPage which is rendered
 * when a user navigates to the / route (the homepage)
 */

/*
 * In order to use React-specific "hooks" that aren't defined
 * in this file, we'll need to import them first! In this case,
 * we're importing the useState hook from React. 
 */
import { useState } from "react"

export default function HelloPage() {

  /**
   * Here we're defining how we'll keep track of the current count
   * of our counter. Using the useState function, we've defined a 
   * read-only variable called `count` and a function that allows
   * us to modify `count` called `setCount`.
   * 
   * The initial value of `count` is 0 and is set when the page
   * is loaded.
   */
  const [count, setCount] = useState(0);

  /**
   * In a React component function, JSX (HTML + CSS + JS)
   * is returned which generates our webpage!
   */
  return (
    <>
      {
        /**
         * This is the header for the HelloPage
         * 
         * The <h1> tag creates a large header on the page
         * 
         * The className property allows us to add some stylistic effects 
         * to the header. `text-center` centers the text horizontally,
         * `text-4xl` increases the font size of the header to `4xl`, 
         * `my-4` adds some spacing above and below the header.
         */
      }
      <h1 className="text-center text-4xl font-bold my-4">
        Hello JumboCode Developers!
      </h1>

      {
        /**
         * This is a <div> which allows us to divide a webpage
         * into different sections. In simple terms, <divs> draw
         * boxes around sections of a webpage. By default, the
         * boxes are invisible. Try adding a border class to the 
         * <div> to see what it looks like!
         */
      }
      <div className="flex justify-center my-8">
        {
          /**
           * This is a button. Like the <div> and <h1>, buttons can be styled
           * to look a specific way (green with rounded edges and white text).
           * 
           * We can also attach functions to them which trigger when they are
           * clicked. What happens when this button is clicked? 
           * 
           * Try playing around with the button. Can you make the counter count
           * faster or change in an interesting way?
           */
        }
        <button
          className="p-3 mx-8 rounded border-green-500 bg-green-500 hover:bg-green-600 text-white"
          onClick={() => setCount(currentCount => currentCount + 1)}
        >
          Current Count: {count}
        </button>

        {
          /**
           * Here's another button! There's something wrong with it,
           * can you fix the issue?
           */
        }
        <button
          className="p-2 mx-8 rounded border bg-gray-100 hover:bg-gray-200"
          onClick={() => setCount(100)}
        >
          Reset Count
        </button>
      </div>


    </>
  )
}