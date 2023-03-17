- NPM:
    - Project scope
        - npm install react react-dom => dependencies
        - npm i react react-dom => dependencies

        - npm install --save-dev react react-dom => devDependencies
        - npm i --save-dev react react-dom => devDependencies

        - npm uninstall react react-dom
    - Global scope
        - npm i --global create-react-app
        - npm i -g create-react-app
#1. useEffect Hook
>----------------------------------------------------------------
> Events: Add / remove event listener
> 1. useEffect(callback)
>  - Gọi callback mỗi khi component re-render
>  - Gọi callback sau khi component thêm element vào DOM
> 2. useEffect(callback, [])
>  - Chỉ gọi callback 1 lần sau khi component mounted
> 3. useEffect(callback, [deps])
>  - Callback sẽ được gọi lại mỗi khi deps thay đổi
> ---------------------
> 1. Callback luôn được gọi sau khi component mounted
> 2. Cleanup function luôn được gọi trước khi component unmounted
> 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ mounted)
> ----------------------------------------------------------------


#2. useLayoutEffect Hook
