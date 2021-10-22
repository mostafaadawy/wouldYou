<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
     <img src="https://user-images.githubusercontent.com/43582900/138351772-40bbbd25-9a97-4c29-b999-ca6db47447ac.png" alt="Logo" >
  </a>

  <h3 align="center">Would You Rather App </h3>

  <p align="center">
    Project Description
    
</p>

This project is simply a polling and voting game, it just begins such as any application by logging for saved users or registration for the new gamer, the main dashboard is the home page which includes two tabs open in default in unanswered questions or required polls for voting, while the other tab includes the answered  or voted questions. Simply you can redirect to the vote to make or to result to see which option you selected before and the percentage of the polling or votes for every option. The highest score is reserved for the user who make many polls and vote for many polls. Logout redirect you and remove saved credentials that was authenticated for the current or recently logged out user


https://user-images.githubusercontent.com/43582900/138363304-6ed1244e-8d95-4e2c-9696-1d9f76c8af0d.mp4


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-this-project">About this project</a></li>
<li><a href="#user-credentials">User Credentials</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#how-to-install">How to install</a></li>
<li><a href="#dependencie">Dependencies</a></li>
<li><a href="#app-UI">App UI</a>
 <ul>
        <li><a href="#login-page">Login page</a></li>
		<li><a href="#register-page">Register page</a></li>
		<li><a href="#home-page">Home page</a></li>
		<li><a href="#new-question">New Question</a></li>
		<li><a href="#pol-and-vote">Pol and vote</a></li>
		<li><a href="#error-page">Error Page</a></li>
		<li><a href="#leader-board-page">Leader Board page</a></li>
 </ul>
</li>
<li><a href="#design-considerations">Design Considerations</a></li>
<li><a href="#design-methodology ">Design Methodology </a>
 <ul>
        <li><a href="#login-page">Login page</a></li>
		<li><a href="#register-page">Register page</a></li>
		<li><a href="#home-page">Home page</a></li>
 </ul>
</li> 
<li><a href="#styling-cSS">Styling CSS</a></li>
<li><a href="#must-consider-that">Must consider that</a></li>
<li><a href="#important-code-snippets">Important Code Snippets</a></li>
<li><a href="#useful-sites-and-references">Useful Sites and References </a></li>
<li><a href="#shaking-tree-and-making-clean-code">Shaking Tree and making clean code</a></li>
<li><a href="#udacity-review-and-modifications">Udacity Review and Modifications</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#refrenceces">Refrenceces</a></li>
</ol>
</details>


## About this Project

This project is a requirement for the free FWD-UDACITY Advanced Front-End Web Development Nanodegree Program. Its implementation criteria is restricted and wrapped with the described rules from this program’s project According to the [rubric](https://review.udacity.com/#!/rubrics/1567/view) reference. Another work frame that we are followed was the [starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) project which include just server database simulator file _DATA.js and readme which described the data signature. According to the course the very correlated base project introduced by the tutor of the course was [chirper](https://github.com/oahmaro/chriper-app) or tweeter clone 

## User Credentials
Although credentials can be easily obtained by just checking _DATA.js file which simulates backend server, we want to notify readers that default `password` is `1234` while users are listed in select you don’t need it. 
## Prerequisites 
All our used packages are JavaScript or  [costumed](https://github.com/oahmaro/chriper-appand)  all of it included where all packages are added to `package.json` file. That means we just need to have npm installed on our machine and vcode or any editor to work with our project. 
Experiences required are some knowledge about `JavaScript` `ES6`, `react`, and `REDUX` and may be `CSS`

## How to install
Just begging by cloning our project WouldYou then install and start it
```sh
git clone https://github.com/mostafaadawy/wouldYou.git
npm install 
npm start
```
## Dependencies
Dependencies are just default packages that are required in same applications that are based `react` and `REDUX`. Packages such as react is used for virtual dom, compositional component, and controlled functions. `REDUX` is used for storing predictable unmuted states. `REACT-REDUX` concerns with connecting store state with presentational component through context. `react-router-dom` basically used to link redirect and route paths, while some CSS, icon packages, and so on are installed using npm or added using yarn and the following steps show you the installation process step by step, in case you don’t want to use our json which is not recommended where json conations the versions that was compatible to each other. 
*	Basics:
```sh
yarn add react redux react-redux react-router-dom
``` 
*	To use avatar and inputImage SASS CSS
```sh
yarn add node-sass
``` 
*	To use react bootstrap
```sh
yarn add react-bootstrap bootstrap
```
*	To use Loadingbar
```sh
yarn add react-redux-loading
```
*	To use asynchronous action creator that allows you to  get set data through APIs
```sh
yarn add redux-thunk
```
*	to use progress bar component from semantic which acts as bootstrap install it first, in order you can import the minified `CSS` file import `semantic-ui-css/semantic.min.css` in your app's entry file: just as index.js which affect all children component style, or you can just use it in certain component with the importation of the required component `import { Progress } from 'semantic-ui-react'` if we want apply that bootstrap to only one component import the CSS and it component in one file which is component file
```sh
yarn add semantic-ui-react semantic-ui-css
```
*	To install `react-tabs` where after installation you can import its component as load bar and your costumed component from `import { Tab, Tabs, TabList, TabPanel }` from `'react-tabs'`;
```sh
yarn add react-tabs
```
*	To install loading bar with its actions and reducer
```sh
yarn add react-redux-loading
```
*	To install prop types to check the internal props and state validations
```sh
yarn add prop-types
```
## App UI

### Login and Register page

![image](https://user-images.githubusercontent.com/43582900/138358615-9eb6a1e5-c9dc-4a87-b2aa-37393ede59c4.png)
Application begins with login and registration, login select from existing users and register link to open register form all forms prevented from propagation event.preventDefault() and instead it dispatch some actions to set or get to store and simulation server. 
1. Required fields are shown and disappear only when you fill its field
2. Event handling or firing action triggers are disabled until all required fields are met the condition (login component)
3. Previous point 1 and 2 are considered in all application’s forms where in registration we requires photo as required field (register component)

### Home page 

![image](https://user-images.githubusercontent.com/43582900/138358800-a1a18937-d282-443a-8b4b-0597ffc2ab63.png)

4.	Navigation bar component 
5.	Footer component
6.	Questions list component
7.	Question component
8.	Is switch tab second tab

### New Question Pol and vote 

![image](https://user-images.githubusercontent.com/43582900/138359914-c1c57d1b-a0ef-42bd-b51f-ed7b4b57f02b.png)

9.	Vote component with back button allows back to unanswered question
10.	When pressing vote it dispatch its action and then makes history.push or redirects to the result vote-Result component
11.	Vote Result component that shows number of who selected option one and who selected option two and clearly represents your choice and we can press back to answered pols.
12.	As show the author user selection is clear with percentage
13.	Authorized user can make new question and add it to the poling game

### Error Page Leader Board page

![image](https://user-images.githubusercontent.com/43582900/138360000-4e0d8c0e-46d2-4684-9e44-612963afcfa6.png)

14.	At the end of this game we get evaluated in this page where sorting is considered and winners are clearly displayed in order while looser are shown also but in different marks
15.	If wrong URL or something wrong happen we do not stuck but application redirected you to error page and allowing you to skip that error 

## Design Considerations

You may find that project more simple if we just restricted by UDACITY requirements for this project, but you will find this project a little bit complicated than what is required, and that is intentionally done, where I want from the first step designing this project, to make some custom feature to test knowledge and what I learned and to practice more functionalities. This extra work can be listed as follows:
*	three- step data fetching while the requirements was to fetch all data in one step, I made this to separate requiring data before we have authentication, I think that getting all data is not considered secure transmission, actually this makes a lot of complications. Where it makes dispatching action conditioned and requires custom routing based on different statuses.
*	Custom CSS file to give a good UI and UX
*	Adding registration form and adding password to fully implement logging form
*	Keeping server side represented in simulation` _DATA.js` file with its promises function without modification and only affect your store

## Design Methodology 

Our methodology is based on [think react](https://reactjs.org/docs/thinking-in-react.html)  but we added some extra thinking points as will be described in detail in the next sections, but briefly it all beginning with 
*	Drawing or digital drawing using mockups that can be considered our APP UI section then convert this draw to HTML and CSS using fixed data without any states, props, or function not even vanilla. 
*	Building REACT component with fixed data without any dynamic considerations 
*	On same time find out where states live
*	Find the necessarily required props for every component, i.e. that must get this value from only its direct parent for example question and question list
*	Consider the only required part to be send as props for example do not send all question through parent while the id is enough.
*	Based on previous steps you will find that at certain child and I claim it will be 90% the leaves of the tree or the end descendant at that point or in case of props propagation discontinuity think of the store 
*	Store state slicing: To slice up our store state we have to classify every reusable object that we need so that every slice signature fulfill the easiest accessibility. (i.e. can easily get sub-object from it)
*	Accurately define events functions and classify which of these store dispatching methods actions or asynchronous actions and which of these functions are just handlers for dynamic changes or state changes.
*	On the same way we define the internal states, for example registration form, especially its input fields it is only inside the register component until it meets the requirement which is observed by internal event handler, that watch input fields, and then dispatch a synchronous action to save it in server side using API, and save it also in store using action creator. 
* in this example also we can distinguish between asynchronous action creator that is dispatch API and action that dispatch store and only event handler that uses with-Route  props from react-router-dom to redirect to another url that sync this url with its right route.

All these are applied in the next section to clarify every point

### Thinking redux react

Next table applies the previous methodology considerations, where we apply thinking react from defining components and states live and exceeds this to contain REDUX store slices in next section and required data in the next table

![image](https://user-images.githubusercontent.com/43582900/138360385-4cd4b801-6f68-4ec6-a9c9-c5b7bafaee7f.png)

Note that not all pages has redirect in case of store connection undefined error that is because all URL links are exact match so if it doesn’t exist it redirects to error page from outside before entering any component causing error, this thanks to custom routing component high order function, this case applied to all except for handling question where it has question id that is variable and we can’t match exactly, in this case it is designed in custom routing to come after all exact paths to not stuck in it if it was in the first cases of the switch for, and we make handling function to deal with it separately. 

### Store State Slices data signature
From our previous sections we can guess the required data signature where we are in need to have the following states or state slices in our store:
*	Status: to set where we are and to help custom routing where to route in signing in up pages or in authorized pages, dtat received or stuck , URL exist or not
*	Cred: To save username and passwords for users
*	Users: according to [starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) project format _DATA.js
*	Questions: according to [starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) project _DATA.js

Note that if I wasn’t restricted by the [starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) project I could use Pivot table to allow many - many relation, but in this project we work on the allowed signature. Next table shows how we export reducers and actions for store from the concept of store state slicing. 

![image](https://user-images.githubusercontent.com/43582900/138360198-92f2454b-745f-49ad-9432-2135fadf3911.png)

### Code structure – rails style 

Our code structure very high correlated to rails style, but also we take all function used with connect and make it in separate file and also other higher order function such as custom Controlling function to make our code very close to Duck style that separates presentational component from functional component Which shows how far we are from modularity and compositional concepts. Next image shows our code structure

![image](https://user-images.githubusercontent.com/43582900/138360478-613623ee-e873-426f-a179-dd282987c29b.png)

From code structure and store state our store reducers, action and middle ware ca be described as follows: 

#### Reducers: 

From state slices we need reducers to deal with every state slice in order to apply the effect of every action on its state slice that means we have AUTHUSER, Questions, users, status, and Cred Reducer and certainly we need combiner to combine them all in index.js file

#### Actions: 

According to the application nature we have asynchronous actions, where it deals with API lets list it as follows:
* Set App status --> 0 or undefined: loading-getting cred, 1: logged, 2: loading-all data, 3: ready and authorized
* Get users name and password for login --> `action.type =GET_CREDINTIALS`
* Save user name, username, pw for signup --> `action.type=SET_NEWUSER`
* Getting all data users, questions, login --> `action.type=RECEIVE_DATA`
* Add new question --> `action.type=ADD_QUESTION`
* Answering question --> `action.type=ANSWER_QUESTION`

Every one of these action affect more than one reducer in same time i.e. change different state slice where previous table shows every asynchronous action and its affect in different state slice

#### API promises and state update:

handled by two different methods 

1. user experience where in fetching data credentials or adding new user or question we use loading bar to give an indication for user that there are action in progress in background, while in answering questions 
2. we use optimistic update to put the result at once on our store and sync it considering catch errors if occurred 

#### Middleware:

 For security issues we get data many time. First time just username and pw to put it in the select of user login, although username should be submitted not selected but we just did it to fulfill project requirements. Once we are logged in we get all server state to update our store.

Although for security issues I made a middleware to check if AUTHUSER is not null to be checked in every action that accessed the store where if it is null it return alert message you are not allowed to access the store. We also use THUNK middleware to allow us use asynchronous actions thanks to currying functions. In addition to these middleware, logger is used to verify action and updated states

## Styling CSS

Google font for gaming match is used in CSS as follows: @import url("https://fonts.googleapis.com/css?family=Luckiest+Guy");
Although application style is totally costumed, but it is inspired by many sites and some little part of class-Names are used after modifications, here are some of the references that I used to style my app    

## Must consider that 

-	Rendering is only updated when component state or props changed and this change related to some functionality inside the presentational component (such as short-circuit environment conditions that toggle components) so never ever check variables or depend on change only affect connect function 
-	WRT inputImage component gives error ref to null where I was using it inside div while it is based form
-	Adding autoComplete to input type password removes warning messages.
-	`${url}`: this format is required for using URL, where we can’t use URL in single quote the only way we can use it in between back ticks and $ variable symbol
-	I was making map of array of JSX component but warning missing keys is required, although I was sure that I applied it but I figured out the my components was wrapped by dis class-Name row tag and the right way is to but keys on the items component itself not on its outer tag
-	When using match-params-QID to get id or the part after last / or after : we restricted to use the symbol or the variable   name that is passed to Route component not what we pushed or redirect or linked
-	Note that: (this props history push):that post link in URL, or (match params “variable”) that gets after /: parameter, or( this props location pathname) all these methods take its props from withRoute function, and this function to work right especially to get match params we need to path the link then receive it through Route and the component that we get between start and end tag of Route must be wrapped  by withRoute   
-	To use some component from react we have to install it first for example  to use tabs component install react-tabs (yarn add react-tabs) then import { Tab, Tabs, TabList, TabPanel } from 'react-tabs' inside the file that we want to use and we can import  'react-tabs/style/react-tabs.css' inside the same parent component to add its effect inside this component only or we can put it in index.js to set the styles in all the components

## Important Code Snippets
*  to return more than object or more than function calling it should be called through run time function
```sh
()=>{ return {} }
```
*  outside function, inside class object should be called using this
```sh
this.object
```
*  you have to prevent working on object depends on promise return untill responce is received dont forget return for function that is not void dont forgrt if there are more than one return in same function not child functions cause neglecting other returns espicialy if it is not conditioned 
```sh
function asynchrounousFunctionParent(args) {
    return (dispatch) => {
      dispatch(ShowLoading());
      return asynchrounousFunCallApi(args)
      .then((args) => {
        dispatch(synchronous1(args));
        dispatch(synchronous2(args));
        dispatch(synchronous3(args))
        dispatch(hideLoading())
      }).catch(e){
        alret()
        console.log()
      }
    }
  }
```
*  previous snippet for UI updating while optimistic update, do the action if error redo it again and inform 
```sh
function asynchrounousFunctionParent(args) {
    return (dispatch) => {
      dispatch(doAction()));
      return asynchrounousFunCallApi(args)
      .then((args) => {
        
      }).catch(e){
        removeActionEffect()
        alret()
      }
    }
  }
```

*  dont forget using undefined to chk in we indextion by null

```sh
const id match..param.id //if not exist
notFound=questions[id] === undefined // in that case it will be true
```
*  to get the following props you must wrape your connect function with Route and then withRoute

```sh
this.props.location.pathName
math.params.objectId
this.props.push('/link')
```
*  to link outsid our URL 
```sh
<Link to={{pathname: "https://link"}}  target='_blank'></Link>
```
*  use return redirect in reder function in case of expected error triggered by undfined object found
```sh
<Redirect to='/'>
```
* img source default url in public folder not in source 
```sh
 <img src="/image.ext" alt='altNAme'/>
```

*  nice generic set values to its key using []
```sh
  const Value=event.target.value
  const Name=event.target.name
  this.setState({ [Name]: Value });}
```

* button disabled untill input is enterd  
```sh
 <button disabled={!this.state.optionOne || !this.state.optionTwo}>Create Question</button>
```

*  Route path for the next code must not contain exact or it won't match the link ever
```sh
<NavLink exact to={`/objectss/${objectId}`}>
  <button>Click Me</button>
</NavLink>
```

* the way style inside component tag called `URL` external link or image object such as optained from `imageInput`
```sh
style={{backgroundImage : `URL(${item.avatar})`}}
```

*  Emojje can be copy past as text
```sh
👋😎 
```

*  to limit number and formate its output dtring to short length usge
```sh
{Op1Percentage.toFixed(2)} // length after point will be 2
```
*  svg is vector and can be modified
```sh
<svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
</svg>
```

*  middleware thunk function is curry function that must be the first in the queue of middleware to only pass objects not function to reducer
```sh
export default applyMiddleware(
    thunk,logger,logging
)
```
*  reducer combiner is amust to wrape up all state slices in one store
```sh
export default combineReducers({
  status,
  users,
  questions,
  authUser,
  cred,
  loadingBar: loadingBarReducer,
});
```
*  reducer signature
```sh
export default function fnc(state = {}, action) {
  switch (action.type) {
    case a:
      return { modified state slice}
    case b:
      return { modified state slice}
    case SAVE_ANS:
      .
      .
    default:
      return state;
  }
}
```
* spreading symbol ... is used to spread object content in other obect and it can be used for modifing or filter object by calling subobject.key while spread the other as shwon in popup or filter object of objects    
```sh
obj1= [...obj1, item.key]
```
*  dont forget to use next declaratives on arrays or arrays of objects 
```sh
arr.map((element,index)=> .....)
arr.filter((element)=> ....condition...)
arr.sort((element1, element2)=> .....true condition on both....)
arr.reduce((container,element)=>) //can be used  for sum
```
*  on object but first convert to arrays
```sh
Object.Values(object)
Object.Keys(object)
Object.entries(object)
```
*  dont forget Object assign
```sh
Object.assign(target, source)
Object.assign({}, {source}, modifiedElement.key);
```
*  to conver object to string to be send with url
```sh
JSON.stringify(obj1)
```
*  to recover it again
```sh
JSON.parse(stingfiedObject)
```
*  lslicing array or string
```sh
array.slice(0,-1)  // removes first and last element
array.slice(0,-2)  // removes first and last 2 elements
```
* make promise 
```sh
function FnName () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      obj
      })
      res(obj)
    },1000)
  })
}
```
*  oject formating using `...` 
```sh
items = {
        ...items,
        [item id]: {
          ...items[item id],
          [internal key]: {
            ...items[item Id][internal key],
            ...and so on
          }
        }
      }
```
* calling many promise function
```sh
  function callManyPromise() {
    return Promise.all([promFn1(), promFn2()])
    .then(([res1, res2]) => ({res1,res2}));
  }
```
*  run time fns
```sh
()=>() //return one commend
()=>{obj} //return one obj
()=>{()=>{}}//return other function 
```
* to work with events and handlers functions should be called and that is my fav
```sh
const fnName=()=>{}
fnName=()=>{}
```
* Top leel of my custom routing
```sh
export function controlRouting(status, locationUrl){
    switch (status){    
        case 0: return signRouting(locationUrl) // cred uploaded  auth none         
        case 1: return <CustomLoading/>// logged waiting fetch data exited from login submission   
        case 2: return landingRouting(locationUrl) // all data uplooaded        
        default: return <CustomLoading/> // initialized
    }
} 

```

## Useful Sites and References 

-	Useful link for icons https://icons8.com/icons/set/vote
-	Useful link for emoji https://fsymbols.com/
-	https://vinicius73.github.io/gravatar-url-generator/#/robohash
-	https://iconmonstr.com/?s=redux
-	https://fsymbols.com/


## Shaking Tree and making clean code

After I finished implementation and testing my code I reviewed it and shake the code tree to get rid of unused shriveled leaves, and also removing comments and codes used for debugging. And now the code is truly clean and structured even it has custom functions

## Udacity Review and Modifications

After first submission I got a wonderful [review](https://review.udacity.com/#!/reviews/3229190) but with 5 requirements actually all of them was very light while the first one required to rebuild the high percentage of the react component the fallowing is the required points with my comments on it 
-	Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
-	The order in which the polls are arranged in the unanswered category should be reversed.
-	The polls should be available at questions/:question_id instead of vote/:question_id.
-	Upon voting a poll, the user should be taken to the (vote-result) rather than the home page.
-	The form should be available at /add instead of /new-question

I resolved all of these requirements where majority was just changing path name or adding some data but third one just require to change the structure of building where I combined two component together vote and vote result in one component to give them one path.

The first bug actually related to what is called store persist where every time an error happen in connect function it rests the store and this happens because of multi data fetching time and different statues that I make my own ghost but any way to solve this I get two solution . 

* The first solution is to use local storage to save my store and if problem happens I get the data locally store as described [here](https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js).
* Second solution was to solve this routing and different status issue by making custom routing function that can be considered high order component that conditionally upon status make different routes and returning f required components with its props right. Second solution was harder but I prefer it and I did it. 

* i also get sugesstion to use component unstead of class in some cases we dont need class when and and advantages of component are listed [here](https://blog.logrocket.com/react-functional-components-3-advantages-and-why-you-should-use-them-a570c83adb5e/)

## Contact

* https://github.com/mostafaadawy
* https://web.facebook.com/mostafa.adawy.96/
* mailto:mostafa_adawy@ymail.com
* https://www.linkedin.com/in/%E2%80%ABmostafa-adawy%E2%80%AC-%E2%80%AB-11b937125/

## Refrenceces 
* [Web Design & UI Inspiration with Code Snippets](https://codemyui.com/)
* [Home To 213313 Gifs](https://gifs.alphacoders.com/)
* [CodePen example error page](https://codepen.io/Navedkhan012/pen/vrWQMY)
* [CodePen Example scary error page](https://codepen.io/shaylonh/pen/eGRKXR)
* [Road Map What you need to draw your study map](https://roadmap.sh/)
* [React-Redux connect functions signatures](https://react-redux.js.org/api/connect)
* [how to use This Props History Push](https://codesource.io/how-to-use-this-props-history-push-on-your-react-project/)
* [JavaAcript Online Compiler](https://www.programiz.com/javascript/online-compiler/)
* [Avatar URL Generator](https://vinicius73.github.io/gravatar-url-generator/#/robohash)
* [React ND Project 2 - Would You Rather](https://james-priest.github.io/reactnd-project-would-you-rather/)
* [Icons generator](https://iconmonstr.com/)
* [CodePen Home React Responsive Navbar](https://codepen.io/codebucks27/details/yLMvOPX)
* [Symbols-Emoji](https://fsymbols.com/)
* [React Tabs](https://www.npmjs.com/package/react-tabs)
* [Starter Project Would You](https://github.com/udacity/reactnd-project-would-you-rather-starter)
* [W3 School](https://www.w3schools.com)
* [Our Respected Tutor Toddy](https://github.com/HossamAbubakr/Toddy/tree/B3.advanced-routing)
* [Digital Drawing Moqups](https://app.moqups.com/)
