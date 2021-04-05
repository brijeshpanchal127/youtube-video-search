# Answers to technical questions



### Ordered

1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I have spent around 3 hours in coding the assignment. If I had more time, I would add better styles and improve the design. I would improve the performance of the website. I would also add more refinement functionalities - for example: refine with time

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The latest version of React has introduces React hooks and I have used it in my assignment.

Code snippet:
```jsx
const [text, setText] = useState("");
const dispatch = useDispatch();
```

3.	How would you track down a performance issue in production? Have you ever had to do this?

I have had multiple performace issues in production in my previous projects. There was a requirement in which we had to display a table full of numerous records and the page was taking time to load. I solved the issues by adding lazy loading. As the user will scroll down, another request will be made which will fetch the next records and so on. Moreover, there was also an instancein which website was loading slowly in IE, I fixed by adding minified shim.js file.

4.	How would you improve the API that you just used?

The API that I used did not have links to the the youtube videos. If it had, I could have added a functionality through which user will be directed to youtube to watch the video. 
