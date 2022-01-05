# Front end mocks and practice

# React is the client html render

docker run -d -e REACT_APP_API='http://localhost:8082' -e REACT_APP_TOKEN='123' -p8080:80 rwlltt/frontend  


    "dev": "concurrently --kill-others \"npm run start\" \"npm run dev-api\" \"npm run check-types\"",
    "@typescript-eslint/eslint-plugin": "^4.23.0",
    "@typescript-eslint/parser": "^4.23.0",