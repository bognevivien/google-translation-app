0. install extensions ES7 snippet 
1. Initialize the build app with all default `bun create next-app@latest`
2. initialize shadcn with all default `bun shadcn-ui@latest init`
3. add all components to the build app `bun shadcn-ui@latest add` and then select all
4. set up clerk authentication
    - create account with supported auth client
    - create the .env and and the credential --> do not forget to put the .env to .gitignore
    - install clerk `bun add @clerk/nextjs`
    - add the provider and create/init middleware with every single routes protected.
    - upgrade to clerk 2 with `bun add @clerk/nextjs@beta` and `bun add  @clerk/upgrade` 
    - documentations  here 

5. Adding header
 - logo
 - signinbutton and userbutton (clerks)
6. use workspace version node module crtl+shift+P > Typescrip version. it will fix some issues related to nextjs fast
7. add the languages endpoints. "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
8. building form component