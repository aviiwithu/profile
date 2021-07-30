(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{63:function(e,n,t){},64:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var i,a,c,r,o,s,l,d,p,h,j,x,m,g,b,u,f,O,w,v,y,k,N,S,I,R,C=t(0),J=t.n(C),z=t(13),F=t.n(z),H=(t(63),t(64),t(4)),A=t(53),M=t(5),U=[{title:"Plant Shop",features:["real time cart update","stripe payment integration","feedback on error and sucess"],description:"E-commerce web app for plants. A user can purchase product by adding to cart and making card payment online.",techUsed:["ReactJs","React router","Stripe test API","useReducer Hook","Node Js","express","REST API"],link:{github:"https://github.com/aviiwithu/reactPlantShop",site:"http://editogram.in"},image:"/image/plant-store.png"},{title:"Article App",features:["animation","only authenticated user can post article","ask user to login if not logged in","sign up and save data in database","REST API","password encryption"],description:"Full Stack web app with CRUD operations. User can create account and start posting articles, posted articles can be seen by any user. User can only edit and delete their own posted articles.",techUsed:["ReactJs","styled-components","React-router","JWT Auth","Framer Motion","Redux","NodeJs","ExpressJs","mongoDB"],link:{github:"https://github.com/aviiwithu/fatmug",site:"http://fatmug.netlify.app"},image:"/image/articles.png"},{title:"Recipe Finder",features:["get real time details from external source","populate data in UI","getting data with authentication"],description:"A recipe searching app, can search any recipe and data is populated in UI. Edamam api is used to build the app",techUsed:["ReactJs","CSS3","REST API","React Hooks"],link:{github:"https://github.com/aviiwithu/recipe-app",site:"https://recipi.netlify.app/"},image:"/image/recipe.png"},{title:"Tesla",features:["scroll animation","re-usable components","sidebar display"],description:"Tesla electric car website clone, added animation with react reveal",techUsed:["ReactJs","CSS3","Styled-Components","React Hooks","React Reveal"],link:{github:"http://google.com",site:"https://tsla.netlify.app/"},image:"/image/tesla.png"},{title:"File Sharing",features:["upload file and generate link for download","auto delete files after 24 Hours","drag and drop","upload progress bar","copy to clipboard","mobile responsive","scheduled crown job"],description:"file sharing with generated link, link expires in 24 Hours",techUsed:["ReactJs","CSS3","React Hooks","Node Js","axios","express","multer","MongoDB","nodemailer"],link:{github:"https://github.com/aviiwithu/file-sharing",site:"http://file.kavinash.me/"},image:"/image/file-sharing.png"}],T=M.a.button(i||(i=Object(H.a)(["\n        padding: 13px 72px;\n        border: 2px solid var(--mainColor);\n        border-radius: 6px;\n        cursor: pointer;\n        /* margin: 10px 8px; */\n        font-size: 16px;\n        font-weight:600;\n        width: 100%;\n        color: ",";\n        background-color: "," ;\n        transition:all 0.3s ease-in-out;\n        :hover{\n            background: ",";\n            color: ",";\n        }\n"])),(function(e){return e.color||"#e85c30"}),(function(e){return e.bgColor||"white"}),(function(e){return e.color}),(function(e){return e.bgColor})),E=t(9),P=t(106),B=t(105),D=t(107),L=t(51),_=t.n(L),G=t(1),K=function(){return Object(G.jsx)(W,{children:Object(G.jsxs)(E.Fade,{cascade:!0,children:[Object(G.jsxs)("div",{className:"projectIntro",children:[Object(G.jsx)("h2",{className:"projectHeading",children:"Projects"}),Object(G.jsx)("p",{className:"projectInfo",children:"Have a look at some of my projects."})]}),U.map((function(e,n){return Object(G.jsxs)(Z,{children:[Object(G.jsx)(q,{src:e.image}),Object(G.jsxs)(Q,{children:[Object(G.jsx)("h2",{className:"title",children:e.title}),Object(G.jsx)("p",{className:"description",children:e.description}),Object(G.jsxs)(P.a,{children:[Object(G.jsx)(D.a,{expandIcon:Object(G.jsx)(_.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(G.jsx)(V,{children:Object(G.jsx)("p",{children:"Features"})})}),Object(G.jsx)(B.a,{className:"featuresDetails",children:e.features.map((function(e,n){return Object(G.jsxs)("li",{children:[" \u2b50 ",e," "]},n)}))})]}),Object(G.jsxs)("div",{className:"techUsed",children:["Tech used:",e.techUsed.map((function(e,n){return Object(G.jsxs)("p",{className:"tech",children:["#"+e," "]},n)}))]}),Object(G.jsxs)("div",{className:"links",children:[Object(G.jsx)("a",{href:"http://github.com",target:"_blank",rel:"noreferrer",children:Object(G.jsx)(T,{color:"white",bgColor:"var(--mainColor)",children:" GitHub"})}),Object(G.jsx)("a",{href:e.link.site,target:"_blank",rel:"noreferrer",children:Object(G.jsx)(T,{color:"var(--mainColor)",bgColor:"white",children:"Website"})})]})]})]},n)}))]})})},W=M.a.div(a||(a=Object(H.a)(["\n        margin: 8px auto;\n        width:100%;\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    .projectIntro{\n        text-align: center;\n        margin:15px 0;\n        padding:20px;\n        \n        .projectHeading{\n            font-size: 32px;\n        }\n        .projectInfo{\n            font-size: 20px;\n            font-weight: 500;\n            color: #808080bf;\n        }\n    }\n"]))),Z=M.a.div(c||(c=Object(H.a)(["\n    display:flex;\n    gap:20px 30px;\n    /* border:2px solid yellow; */\n    margin:18px 0;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),q=M.a.img(r||(r=Object(H.a)(["\n    height:300px;\n    border: 4px solid #e85b3037;\n    border-radius: 8px;\n    @media only screen and (max-width: 600px) {\n        width:90%;\n        object-fit: cover;\n        \n    }\n"]))),Q=M.a.div(o||(o=Object(H.a)(["\ndisplay:flex;\nflex-direction: column;\ngap:18px;\npadding:8px 12px;\nwidth:min-content;\n.title{\n    font-size: 34px;\n}\n.description{\n    font-size: 20px;\n    font-weight: 500;\n    color: gray;\n}\n.techUsed{\n    font-weight: 700;\n    display:flex;\n    gap:2px;\n    flex-wrap: wrap;\n    font-size: 20px;\n    color: #000000d6;\n    .tech{\n        border-right:2px solid var(--mainColor);\n        font-weight: 500;\n        color: #524d4d;\n        padding: 0 8px;\n        }\n    }\n.links{\n    display:flex;\n    a{\n        border:none;\n        margin:8px 12px;\n    }\n}\n.MuiAccordion-root{\n    box-shadow:none;\n    \n}\n.MuiAccordionSummary-root{\n    border-radius: 4px;\n    :hover{\n        background-color: lightgray;\n        \n    }\n}\n.featuresDetails{\n    display:block;\n    li{\n        list-style: none;\n        padding:10px 0;\n        text-transform: capitalize;\n        border-bottom: 1px solid #80808045;\n    }\n}\n"]))),V=M.a.div(s||(s=Object(H.a)(["\n    p{\n        font-size: 22px;\n        font-weight: 500;\n        color: #716565;\n    }\n    \n"]))),X=[{name:"HTML5",image:"/image/html5.png"},{name:"CSS3",image:"/image/css3.png"},{name:"JavaScript(ES5/ ES6)",image:"/image/js.svg"},{name:"React JS",image:"/image/react.svg"},{name:"Redux",image:"/image/redux.svg"},{name:"Node Js",image:"/image/nodejs.svg"},{name:"Express Js",image:"/image/expressjs.svg"},{name:"MongoDB",image:"/image/mongodb.png"},{name:"Material UI",image:"/image/material-ui.svg"},{name:"Bootstrap",image:"/image/bootstrap.svg"},{name:"JWT Auth",image:"/image/jwt.svg"},{name:"React Router",image:"/image/react-router.svg"},{name:"Photoshop",image:"/image/photoshop.svg"},{name:"Figma",image:"/image/figma.svg"},{name:"Styled-components",image:"/image/styled-components.svg"}],Y=function(){return Object(G.jsx)($,{children:Object(G.jsxs)(E.Fade,{cascade:!0,children:[Object(G.jsxs)("div",{className:"info",children:[Object(G.jsx)("h2",{children:"Skills"}),Object(G.jsx)("p",{children:"Languages and Technologies that I use for my projects."})]}),Object(G.jsx)("div",{className:"skills",children:X.map((function(e,n){return Object(G.jsx)(ee,{children:Object(G.jsxs)(E.Fade,{bottom:!0,cascade:!0,children:[Object(G.jsx)("img",{src:e.image,alt:e.name,className:"skillImg"}),Object(G.jsxs)("p",{className:"skillName",children:[e.name," "]})]})},n)}))})]})})},$=M.a.div(l||(l=Object(H.a)(["\n    width:80%;\n    margin:auto;\n    .info{\n        text-align: center;\n        padding:50px 0;\n        h2{\n            font-size:32px;\n        }\n        p{\n            font-size: 20px;\n            font-weight:500;\n            color:#16151591;\n            padding:10px 0;\n        }\n    }\n    .skills{\n        display:flex;\n        flex-wrap: wrap;\n        gap: 57px 100px;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n"]))),ee=M.a.div(d||(d=Object(H.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    .skillImg{\n        width: 120px;\n        height: 120px;\n        object-fit: contain;\n        /* border:2px solid black; */\n    }\n    .skillName{\n        font-size: 17px;\n        font-weight: 500;\n        padding:20px 0;\n    }\n\n"]))),ne=function(){return Object(G.jsx)(te,{children:Object(G.jsxs)(E.Fade,{children:[Object(G.jsxs)(ie,{children:[Object(G.jsx)("h2",{className:"title",children:"About Me"}),Object(G.jsx)("p",{className:"subTitle",children:"Have a look about me"})]}),Object(G.jsx)(E.Fade,{children:Object(G.jsxs)(ce,{children:[Object(G.jsx)(ae,{src:"/image/dp.png"}),Object(G.jsx)(re,{children:Object(G.jsxs)(E.Fade,{children:[Object(G.jsx)("h3",{className:"title",children:"Hey!"}),Object(G.jsx)("p",{className:"description",children:"I am a full stack developer who lives in Faridabad, India. I work on React Js and Node Js as primary language for web development. Apart from that I work on MongoDB, Bootstrap, Material UI and many other popular technologies."}),Object(G.jsx)("p",{className:"description",children:"I started coding recently during Covid-19 lockdown and found it exciting, later got myself enrolled in online course on Udemy( a Online learning and teaching marketplace)."}),Object(G.jsx)("p",{className:"description",children:"I started Learning HTML, CSS and JavaScript. Later i picked React JS as a front end library and started doing projects. Later on I turned into full stack development with MERN (MongoDB Express React Node) stack."}),Object(G.jsx)("p",{className:"description",children:"I always look for learning as much as I can with new and scalable technologies. Keep trying problem solving and look for new ideas into development."}),Object(G.jsx)("p",{className:"description",children:"However, at the moment I am looking to work with commitment in a company to gain more experience into Front End / Full Stack development. I really want to work on big projects, fix bugs and grow with the team."}),Object(G.jsx)("p",{className:"description",children:"My goal in the future is to learn and work on different technologies with time, then start helping others to grow."})]})})]})})]})})},te=M.a.div(p||(p=Object(H.a)(["\n  width: 80%;\n  margin: 10px auto;\n  @media only screen and (max-width: 900px) {\n      width:100%;\n  }\n"]))),ie=M.a.div(h||(h=Object(H.a)(["\n  text-align: center;\n  padding: 15px 0;\n  .title {\n    font-size: 30px;\n    padding: 10px;\n  }\n  .subTitle {\n    font-size: 18px;\n    font-weight: 500;\n    color: grey;\n  }\n"]))),ae=M.a.img(j||(j=Object(H.a)(["\n  width: 340px;\n  border-radius: 12px;\n  object-fit: cover;\n"]))),ce=M.a.div(x||(x=Object(H.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap:20px;\n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    width:100%;\n  }\n"]))),re=M.a.div(m||(m=Object(H.a)(["\n  width: 50%;\n  padding: 0 10px;\n  .title {\n    font-size: 28px;\n  }\n  .description {\n    padding: 10px 0;\n    font-size: 17px;\n    line-height: 1.3;\n    font-style: italic;\n    color: #161616e0;\n  }\n  @media only screen and (max-width: 720px) {\n      width:90%;\n  }\n"]))),oe=function(){return Object(G.jsx)(se,{children:Object(G.jsxs)(E.Fade,{cascade:!0,children:[Object(G.jsxs)(le,{children:[Object(G.jsx)("h2",{className:"title",children:"Contact Me"}),Object(G.jsx)("p",{className:"subTitle",children:"Call or send me an email."})]}),Object(G.jsxs)(de,{children:[Object(G.jsx)("a",{href:"mailto:aviiwithu@gmail.com",className:"email",children:"Email: aviiwithu@gmail.com"}),Object(G.jsx)("a",{href:"tel:+91 8468846290",className:"phone",children:"Phone: +91 8468846290"})]})]})})},se=M.a.div(g||(g=Object(H.a)(["\n    padding:15px 0;\n"]))),le=M.a.div(b||(b=Object(H.a)(["\n    text-align:center;\n    .title{\n        font-size: 28px;\n    }\n    .subTitle{\n        font-size:18px;\n        font-weight: 500;\n        color:gray;\n        padding:10px 0;\n    }\n"]))),de=M.a.div(u||(u=Object(H.a)(["\n    padding:20px 0;\n    display:flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    a{\n        text-decoration:none;\n        font-size: 20px;\n        color:black;\n        padding:9px;\n        margin: 17px 35px;\n        font-weight: 600;\n    }\n"]))),pe=function(){var e=Object(C.useState)(0),n=Object(A.a)(e,2),t=n[0],i=n[1];return Object(G.jsxs)(he,{children:[Object(G.jsxs)(je,{children:[Object(G.jsx)("li",{onClick:function(){return i(0)},className:0===t?"active":null,children:"projects"}),Object(G.jsx)("li",{onClick:function(){return i(1)},className:1===t?"active":null,children:"skills"}),Object(G.jsx)("li",{onClick:function(){return i(2)},className:2===t?"active":null,children:"about"}),Object(G.jsx)("li",{onClick:function(){return i(3)},className:3===t?"active":null,children:"contact"})]}),Object(G.jsxs)(xe,{children:[0===t&&Object(G.jsx)(K,{}),1===t&&Object(G.jsx)(Y,{}),2===t&&Object(G.jsx)(ne,{}),3===t&&Object(G.jsx)(oe,{})]})]})},he=M.a.div(f||(f=Object(H.a)(["\nmargin:0 auto;\n\n"]))),je=M.a.div(O||(O=Object(H.a)(["\n    display:flex;\n    justify-content: space-between;\n    list-style:none;\n    width:80%;\n    margin:auto;\n    li{\n        padding: 10px 25px;\n        text-transform: uppercase;\n        font-weight: 500;\n        cursor: pointer;\n        transition: all 0.3s ease-in-out;\n        :hover{\n            background-color:#d5d5d573;\n            border-radius: 3px 3px 0px 0px;\n            border-bottom: 3px solid black;\n        }\n    }\n    .active{\n        border-bottom: 3px solid black;\n    }\n    @media only screen and (max-width: 600px) {\n        width:100%;\n    }\n"]))),xe=M.a.div(w||(w=Object(H.a)(["\n    width:100%;\n    margin:auto;\n"]))),me=t(52),ge=t.n(me),be=function(){return Object(G.jsx)(ue,{children:Object(G.jsxs)(E.Fade,{children:[Object(G.jsx)(fe,{children:Object(G.jsx)("p",{children:Object(G.jsx)("a",{href:"/",children:" Avinash Kumar"})})}),Object(G.jsx)(Oe,{children:Object(G.jsx)("a",{href:"http://github.com/aviiwithu/",target:"_blank",rel:"noreferrer",children:Object(G.jsxs)("li",{children:[Object(G.jsx)(ge.a,{})," GithHub"]})})})]})})},ue=M.a.div(v||(v=Object(H.a)(["\n    display:flex;\n    justify-content: space-between;\n    padding: 20px 25px;\n    \n"]))),fe=M.a.div(y||(y=Object(H.a)(["\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    font-size:30px;\n    font-weight:700;\n    color: var(--mainColor);\n"]))),Oe=M.a.div(k||(k=Object(H.a)(["\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    display:flex;\n    align-items: center;\n    li{\n        list-style:none;\n        padding:5px 10px;\n        display: flex;\n        align-items: center;\n        gap: 5px;\n    }\n"]))),we=function(){return Object(G.jsx)(ve,{children:Object(G.jsxs)(E.Fade,{children:[Object(G.jsx)(E.Zoom,{children:Object(G.jsx)(ye,{src:"/image/dp2.jpg"})}),Object(G.jsxs)(ke,{children:[Object(G.jsx)("p",{children:"Hey,"}),Object(G.jsx)("h2",{className:"name",children:"I'm Avinash Kumar"}),Object(G.jsx)("p",{className:"description",children:"I'm a Full stack developer, I enjoy coding and making web applications. Love working with React JS, NodeJs and other latest technologies."})]}),Object(G.jsxs)(Ne,{children:[Object(G.jsx)("a",{href:"http://github.com/aviiwithu",target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)(T,{color:"white",bgColor:"var(--mainColor)",children:" Github"})}),Object(G.jsx)("a",{href:"http://localhost:3001/resume",children:Object(G.jsx)(T,{color:"var(--mainColor)",bgColor:"white",children:" Resume"})})]})]})})},ve=M.a.div(N||(N=Object(H.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    justify-content: center;\n    margin:3rem auto;\n    @media only screen and (max-width: 600px) {\n        width:90%;\n    }\n"]))),ye=M.a.img(S||(S=Object(H.a)(["\nwidth:200px;\nheight:200px;\nborder-radius: 50%;\n"]))),ke=M.a.div(I||(I=Object(H.a)(["\n.name{\n    color: var(--mainColor);\n    font-size: 35px;\n}\n.description{\n    font-size: 18px;\n    color: #6e6e6eb8;\n    font-weight: 500;\n    padding:15px 0;\n}\n"]))),Ne=M.a.div(R||(R=Object(H.a)(["\n    a{\n        border:none;\n        margin:8px 12px;\n    }\n    display:flex;\n    width:100%;\n    justify-content: center;\n    \n"])));var Se=function(){return Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(be,{}),Object(G.jsx)(we,{}),Object(G.jsx)(pe,{})]})};F.a.render(Object(G.jsx)(J.a.StrictMode,{children:Object(G.jsx)(Se,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.5bbc5bc8.chunk.js.map