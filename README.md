## HLPR
<kbd align="center"> Amit Sheth, Marvin Lambert, and Estefani Baughman </kbd> <br>
<br>
<span> Planning on Miro: https://miro.com/app/board/uXjVOV9Debo=/?invite_link_id=155435545598 <span>

<img align="center" alt="Logo" style= "width: 100%, height: 50%;"  src= https://github.com/HLPR-APP/HLPR/blob/main/public/volodymyr-hryshchenko-KZocXyI3kRo-unsplash.jpg />

<p align = "center">This project focus is to find people to help with everyday tasks. </br>
Problem Domain: Hard to find good help. </br>
How we are addressing this: Building an app to help people find verified helpers.</p>

<p>Semantic versioning, beginning with version 1.0.0 </p>
</br>
<p>Libraries, Frameworks, Packages: </br>
React, Node, Supabase, Chakra </p>


User Flow: </br>
<ol>
  <li>Sign Up/Login</li> 
  <li>See a list of tasks</li> 
  <li>Go to Profile, see task offered and task posted</li> 
  <li>Can offer tasks or post tasks.</li>
 </ol>
</br>
To Run locally: </br>
<ol>
  <li> Clone repo </li> 
  <li> Run npm i </li>
  <li> Run npm i react-router-dom@5 </li>
  <li> Run npm i --save @supabase/supabase-js </li>
  <li> npm i react-slick --save</li>
  <li> npm i react-icons --save</li>
  <li> Run npm start </li> 
</ol> 
 </br>
Endpoints: Create, Read, Update, Delete using Supabase </br>

Database Schemas:
<ul>
<li>Supabase </li>
<li>Tables: Users, Tasks w/primary key and foreign key for user auth table, Offers w/foreign key for tasks and foreign key for users </li>
</ul>
