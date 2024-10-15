test
react ke basic knowlege to hona zarori hai 
    + 
for website -> react dom
for app -> react native

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
=== MAKING THE PROJECT USING CREATE-REACT-APP === 
npx create-react-app 01basic
1. 
to intall libraries we use npm( node packet manager) -> npm
to execute libraries we use ( node packet executer) -> npx

2.
create-react-app -> application -> it is bulky utility

3.
name the application

=== then go to your folder ===
cd 01basic

=== then go to package.json file ===

===then write dir and check if package.json exists then we can run our start script===
npm run start

===then run build it will create a folder named build in which we have html css and js===
npm run build

package lock json mai dependencies ka aik stable version lock kar dia jata hai 
sara kaam source ya public folder kai andar ho raha hai
manifest wali mobille application mai kaam ati hai 
robot.txt search engine kai liyai oti hai

--- farq parta hai index.html sai ku kai yahi to page hai jo load hoga aur isi liye isai SPA (Single Page Application) kaha jata hai sara kaam isi mai hota hai DOM Manipulation isi mai kartai hain---

React apna aik khud ka dom banata hai called virtual dom aur phir wo usai asal dom sai compare karta hai and then compare kar kai wahi wahi changes karta hai jaha need hai 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
===CREATE-REACT-APP IS NOT CONSIDER AS GOOD NOWADAYS SO WE WILL MAKE PROJECT USING VITE ===
VITE is bundler -> react has many libraries 
npm create vite@latest

===in vite folder there will not be node folder like in create-react-app ===

=== dir check package.json ===

===  to install required files ===
npm install

=== start the project ===
npm run dev

=== then click the link to see project ===

=== u will mostly use src folder ====
=== delete the unnecessary files in create-react-app in src folder=== like setuptest.js , logo.svg , reportwebvital only index.js and app.js will be left

remove comments from index.js file 

=== then in the app function delete all the div and then write 
<h1> hello world </h1> ===

=== to run index.js file write npm run start ===

=== in vite in src folder only keep main.js and app.jsx === 

VITE mai script dependencies hoti he nahi hain 
wo direct script ko include karta hai 

===============================================================================
                        TAILWIND AND PROPS
props make the component resuable
COMPONENT MAI as a property hum object aur array dono pass karsaktai hain using curly braces
=====================================================================
                       CUSTOM REACT
at the end of the day react converts every element into an object tree like structure that has tag name, properties and children(what is wrtten inside that element) then jsx us ko aik container mai eject karwa daita hai (by babel)

method => it works because app bhi to aik method he hota hai
html => works
object => it will not beacuse syntax is different
createElement method => works beacuse it has specific syntax acceptable by react 

you can declare variable in react in curly braces {variableName} => which is called evaluated expression in jsx. You cannot write expression in it like if statement

=======================================================================
                       HOOKS
UI kai andar kia cheez kab update ho ge yai ap decide nahi kro gai react karai ga
hooks like usecallback,useeffect,usestate

import { useState } from 'react'
if u use simple variable instead of usestate then it will not propagate in UI so we dont use it
useState mai aik array pass kartai hain => let [variable,FunctionOnVariable]=useState(initialValue)
onclick={addvalue}

========================================================================
                    Virtual dom,fiber and reconciliation
we will discuss createRoot
it creates dom like structure => virtual dom it compares with actual dom aur wahi wahi changes karta hai
reload means dom wapis sai re paint ho raha hai

har UI ko instantly update karna zarori nahi hai => optimized versionby making algo

immediate update hona zarori nahi aik sath bulk mai updates hojana is better

animation ka update time ziyada hota hai

                    REACT FIBER ARCHITECTURE
- react uses fiber algorithm to update virtual dom
- key features are => abort,pause or reuse work agar koi new update ae hai to usai prioritize bhi kar saktai hain (iteration -> js enjecting)

                    RECONCILIATION
(differentiation algo) => it compares two trees and analyze what part needs to be changed
setState -> re-render
pehlai page load hota tha ab nahi hota

why keys are introduced in react? => stable predictable and unique

================================================================================
                    REACT INTERVIEW QUESTIONS ON COUNTER
bunch mai jati hain updates 

=================================================================================
for style use double curly braces like style={{backgroundColor="olive"}}

==================================================================================
                    useEffect,useRef and useCallback

useCallback => function ko aik cache mai rakh lo jab bar bar call wala scene aye to useCallback use karo

useCallback(fn,dependencies) 
- dependencies are passed in form of array

useRef => kisi bhi cheez ka refrence laina hota hai to useRef use kartai hain
is ko aik pehlai variavle banana parta hai
apas mai baat karwani hoti hai

usecallBack => optimize tareeqai sai karna hoto usecallBack jab function ko bar bar call karna ho

useEffect => jab dobara sai run karna ho 
useEffect(fn,dependencies)

useId => it gives unique value

============================================================================

agar ap ko performance lani hai loop kai andar elements ko repeat karni kai liyai jsx mai to key lazmi use karni ho ge

===========================================================================
                        react router
dont use <a> tag in react beacuse it reloads the page instead of this we use <link> tag

jab hum kisi link ko select kartai hain to us ka colour jo chane hota hai => us kai liyai hum className mai he callback pass kartai hain aur us ka parameter {isActive hota hai}
aur className mai yai pass kartai hain ${isActive ? "text-orange-700" : "text-gray-700"}

===========================================================================
                    context API => aik global variable jis mai sara data ja raha hoga

redux => to manage the state of data (jo information udhar sai idhar pass ho rahi hoti hai us ko handle karna REDUX kai under ata hai)

Libararies to handle *state management* :- 

react-Redux => use for react 

redux-toolkit (RTK) => easier version of redux

zustand => it is also easy library to handle state management 

const value = useContext(someContext)

STEPS
- make context folder under src folder 
- under context make files like userContext.js , productContext.js , loginContext.js etc  => pure js file hai
- React.createContext() use this method and store it in some variable 
- then export that variable 
- har aik context provider hota hai like 
<userContext>
    <card/>
    <login>               ab in sab ko usercontext(global) ka access mil jae ga
        <product/>        jo jo is userContext kai andar hai un sab ko access mil jae ga 
    <login/>
<userContext/>

- make a jsx file for provider like userContextProvider.jsx
- in this file import react and userContext
- make a method userContextProvider ,export this method , give parameter {childern} =>prop jo bhi araha us ka waisay he pass kar do
- in return write 
    <>
    {children} //jo bhi araha usai aisy he likh do
    </>

- context kai sath provider use hota hai like userContext.Provider
- kon se value ka access dai rahai ho us ko hum as a prop daitai hain value kai andar value={{}}
- import userContextProvider in app.jsx , then warp it , ab ap jo bhi component app mai lo gai us component kai pas directly access milai ga

- data context mai bhejna(add) karna hai like login => use hooks useState and useContext
const {setAnything}=useContext(ContextName)

- ab data fetch karna hai like profile mai show karwana hai  => import useContext and context
const {Anything}=useContext(ContextName)

================================================================================
                        to do list 
- createContext and useContext 
The createContext function is used to create a new context.
It can hold and manage data that can be accessed by multiple components in a React application.
By using createContext, you can store data (like a to-do list) in one place and access it from any component, avoiding "prop drilling" (passing props through many layers).


- export context 
- use hook to useContext 
This is a custom hook that makes it easier to access the todocontext inside any component.
The useTodo hook makes it easy to reuse context in different components. You don't need to call useContext directly every time.


- export provider 
The Provider is used to wrap components that need access to the context. It supplies the context data to those components.

the to dos are an array in which every to do is an element and has some unique id that we will generate like date,random strings,numbers etc 
the to do will have id, title and completed(is it completed or not)

=================================================================================
                            local storage 
The localStorage object allows you to save key/value pairs in the browser.
- aik masla yai hai kai it is converted into string so we convert it into json to keep the structure 

                        key         val
localStorage.setItem("lastname", "Smith");

localStorage.getItem("lastname");
                        key

- set kartai time batana hota hai key value kia rakho gai 
- it is converted into string 

================================================================================
                            REDUX 
- redux is independent state management library 
REACT -> react-dom and react-native 
REDUX -> react-redux 

react and redux ke wiring karnai kai liyai we use react-redux

first arch:-
Flux -> [data flow - data aik he tarah sai store aur use ho is ka aik structure hona chahiye
use context mai hum nai spread kia tha agar mai bhool jao usai yai cheez apnai ap ho jae ] , ccentral data  

- flux data flow was not too good 

second :-
REDUX -> better version of flux 
1. single source of truth 
2. you should never modify/mutate your state 
3. changes should be made through functions/reducers only 
4. everything should be done through proper mechanism 

JS ke libraries kai sath redux kafi achai sai stick up ho raha tha 
redux is independent library yai vue kai sath bhi chalti aur kisi bhi fremwork kai sath lagana chaho to lag jati hai that is why it is called A PREDICTABLE STATE CONTAINER FOR JS APPS 

THEN COMES redux thunk,redux saga,middlewares everone has some defects and benefits 
then comes redux-toolkit 
1. it has abstraction 
2. built in middlewares 
3. simple flow 
4. it handles internally eerything 
5. reducers ko kaisay rakho slicing 

CONCEPTS OF REDUX TOOLKIT/REDUX :-
1. Store -> single src of truth 
2. reducers -> (object) functionality wala part reducers kai thriugh he jata hai
two methods 
1. useSelector -> jab koi value select karni hai store sai 
3. useDispatch -> jab koi value mujhe bhejni hai 

Store.js 
1. import configureStore 
import reducer here 
2. export it , configureStore is an object 
    add reducer in it

Features 
    todoSlice.js
        1. import createSlice and nonoId(for random id)
        2. declare initial state 
        3. export slice 
         a. name
         b. initial state => object 
         c. reducers => object 
            every reducer has parameters of state (abhi kia situation hai) and action (agar koi value chahiye ho ge )
            properties + functions

            There are two ways to export reducers:-
            1. export const {functions}=sliceName.actions
                in components, we want individual reducer so first one is better

            2. export default sliceName.reducer \\ it will help in store


Components 
    componentName1.jsx
        \\ if u want to imprt dispatch then do like this 
            import {useDispatch} from 'react-redux'
            const dispatch = useDispatch()
                dispatch => aik reducer ko use kartai huai store mai changes karta hai
                dispatch kai andar he required reucer ko call kia jata hai aur us reducer kai parameter mai ap ka input khud ba khud ajata hai

    componentName2.jsx
        \\ if u want to imprt selector then do like this
            import {useSelector} from 'react-redux'
                use selector has some state in its prametre
                    const variable = useSelector(state => state.reqVar)

* there is also a provider in redux toolkit
    1. in main.jsx import the following 
        import { Provider } from 'react-redux'
        import { store } from './App/store.js'
    2. now wrap <provider></provider>




SUMMARY :- 
1. make store (only one) => sigle source of truth
    import configureStore to make store it consist of object(key-value) that can be multiple
features ko slice boltai hain 

