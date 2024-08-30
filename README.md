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