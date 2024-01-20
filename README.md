# Micro-frontends
### This is a sample project to demonstrate micro-frontends using single-spa

# Dependencies
1. Nodejs v20.x.x
2. Docker
3. Docker-compose

### Steps to run the project using docker
1. Clone the project 
2. Run docker-compose up --build -d
3. Open http://localhost:3000 in browser
4. To stop the project run docker-compose down

### Steps to run the project without docker
1. Clone the project
2. cd micro-frontends
3. cd host-app
4. npm install
5. cd ../todo-components
6. npm install
7. cd ../host-app
8. npm run build && npm run preview
9. cd ../todo-components
10. npm run build && npm run preview 
11. Open http://localhost:3000 in browser

example inspired from https://dev.to/abhi0498/react-micro-frontends-using-vite-30ah