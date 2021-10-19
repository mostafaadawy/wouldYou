<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://miro.medium.com/max/1200/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MyReads: A Book Lending App</h3>

  <p align="center">
    project_description
    
</p>


fwd-fend-sec-proj App is simple web site for practicing react js and redux, it is simply act as a polling game where you have to make your own poll and voting for existing polls and upon youtr share you get your score which defines who is the winner and the order of the users score.this project is second project as a requirement to the nanodegree course presented by udicity

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Design Methodology">Design Methodology</a></li>
      </ul>
    </li>
    <li>
      <a href="#Redux Thinking">Redux Thinking</a>
      <ul>
        <li><a href="#Store state slicing">Store state slicing</a></li>
        <li><a href="#Reducers">Reducers</a></li>
        <li><a href="#Actions">Actions</a></li>
        <li><a href="#Middlware">Middleware</a></li>
      </ul>
    </li>
    <li><a href="#RoodMap">RoadMap</a></li>   
    <li><a href="#C#hallenges">Challenges</a></li>
    <li><a href="#useful-site">Useful Site</a></li>
    <li><a href="#testing-using-npm-test">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# Design Methodology 
Building components child to parent individually, while build relation up down

# Redux Thinking
## Store state slicing
note we restricted by rubric data signature for database from server _DATA.js but we want to discuss another way of data signatures that can be used also as follows
To slice up our store state we have to classify every reusable object that we need so that every slice signature looks like the follows:
State = {
AuthID:null,
Questions: {QID: {A:’’, B:’’, CNTA: 0, CNTB: 0},}
Users: {UID: {name:’’, username:’’, pw:’’, avatar:’’, CNTQ: 0, CNTANS: 0},}
UQPivot: [{creatorId:’’, QID:’’, respondID:’’, Ans:’’},]
}
this signatures may add some feature as follows:
 1- I see that it is more healthy to the database to be built upon many to many relationship in database i.e using pivot table that allow many to many relations
 2-Separating database tables to simulate real database
 3- It is by default facilitates the logic functions required to fetch or decode/dispatch database functions 
Note I tried many signature and every time I checked it with dispatching actions to check its compatibility till get this object signature
 other data signature but we would like

## Reducers
From state slices we need reducers to deal with every state slice in order to apply the effect of every action on its state slice that means we have authUser, Questions, users, and Pivot reducers and certainly we need combiner to combine them all in index.js file

## Actions
According to the application nature we have asyncrouns where it deals with API lets list it as follows:
1-	Get users name and password for login  action.type =GET_CREDINTIALS
2-	Save user name, username, pw for signup action.type=SET_NEWUSER
3-	Getting all data users, questions, and pivot  after login action.type=RECEIVE_DATA
4-	Add new question  action.type=ADD_QUESTION
5-	Answering question action.type=ANSWER_QUESTION
Every one of these action affect more than one reducer in same time i.e. change different state slice where next table shows every asyncrouns action and its affect in different state slice

# RoodMAp

API promises and state update handled by two different methods 1- user experience where in fetching data credentials or adding new user or question we use loading bar to give and indication for user that there are action in progress in background, while in answering questions we use optimistic update to put the result at once on our store and sync it considering catch errors if occurred 

# Middle wares 
For security issues we get data two time 
First time just username and pw to put it in the select of user login, although username should be submitted not selected but we just did it to fulfill project requirements
Once we are logged in we get all server state to update our store
Although for security issues I made a middleware to check if authUser is not null to be checked in every action that accessed the store where if it is null it return alert message you are not allowed to access the store 
We also use THUNK middleware to allow us use asyncrouns actions thanks to currying functions 
In addition to these middleware, logger is used to verify action and updated states

# Packages installed
From previous design it is very clear that we needed the following packages to handle our tasks:
*   React  components, 
*   React-domcomponents and render
*	Redux store, apply middleware, reducer combiner 
*	React-redux context provider and connect or consumer
*	React-router-dom router link push to history NAV link
*	node-sassfor avatar and inputImage sass css
*	yarn add react-bootstrap bootstrap
*	yarn add react-redux-loading
*	yarn add redux-thunk
*	import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
*   yarn add semantic-ui-react semantic-ui-css

After install, import the minified CSS file in your app's entry file:
index.js
import 'semantic-ui-css/semantic.min.css'
then import to required component 
ex: import { Progress } from 'semantic-ui-react'
if we want apply that bootstarp to only one comp[onent import the css and it component in one file which is component file



# Errors and solutions
inputImage component gives error ref to null where I was using it inside div while it is based form

# CSS Fonts
* @import url("https://fonts.googleapis.com/css?family=Luckiest+Guy");

# Useful links
* Useful link for icons https://icons8.com/icons/set/vote 
* Useful link for emoji https://fsymbols.com/
* https://vinicius73.github.io/gravatar-url-generator/#/robohash
* https://iconmonstr.com/?s=redux
* https://fsymbols.com/

