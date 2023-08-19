# Week 9 Assignment Overview

For Week 9's Assignment, the main focus are:
- Create table(s) in database (MySQL)
- Connect NodeJS (REST API Server) to MySQL RDBMS to perform CRUD operations

As part of the assignment, we will create a simple REST API Server using Express.js, Typescript, and Node.js, which will be deployed through Railway.

- Start the project by creating necessary folders: `mkdir dist src controllers assets config router`
- And or files with: `touch app.ts .gitignore`, etc.
- Move `controllers`,`config`, and `router` folders inside src folders (along with their respective ts files.)
- Create a package.json file that will be used to describe your app: `npm init -y`
- Install all the needed dependencies (general): `npm i dotenv body-parser express mysql2` 
- Install all the needed dependencies for development side (DevDependencies): `npm i -D @types/body-parser @types/dotenv @types/express @types/nodes concurrently nodemon typescript`

## API Endpoints
<p align="center">
<a href="https://week9sherin-apidb-prod.up.railway.app/">week9sherin-apidb-prod.up.railway.app/</a>
</p>

<div align="center">

| Name  | HTTP Method | Endpoint | 
| ----------- | ----------- | ----------- |
| **Homepage** | `GET` |[/](https://week9sherin-apidb-prod.up.railway.app/)
| **List All Transaction Data** | `GET` | [/transaction](https://week9sherin-apidb-prod.up.railway.app/transaction)
| **Get Transaction Data by ID** | `GET` | [/transaction/:id](https://week9sherin-apidb-prod.up.railway.app/transaction/1) |
| **Create New Transaction Data** | `POST` | [/transaction](https://week9sherin-apidb-prod.up.railway.app/transaction) |
| **Update Whole Transaction Data by ID** | `PUT` | [/transaction/:id](https://week9sherin-apidb-prod.up.railway.app/transaction/1) |
| **Delete Transaction Data by ID** | `DELETE` | [/transaction/:id](https://week9sherin-apidb-prod.up.railway.app/transaction/1) |
</div>

## Syntax used to Create Database Table
- user table:
`create table user (`
`    id int not null auto_increment,`
`    name varchar(100) not null,`
`    address varchar(255) not null,`
`    primary key(id) )`

- transaction table:
`create table transaction (`
    `id int not null auto_increment,`
    `user_id int not null,`
    `type enum('income','expense') not null,`
    `amount double(10,2) not null,`
    `primary key(id) )`
    
![syntax-](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/syntax-createtable.webp)

## API Contract
- **GET** /user/:id
  
![get-method](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/get-userid-method.webp)
- **POST** /transaction
  
![post-method](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/post-method.webp)
- **PUT** /transaction/:id
  
![put-method](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/put-method.webp)
- **DELETE** /transaction/:id
  
![delete-method](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/delete-method.webp)


## MySQL Connection with API (NodeJS)
![MySQL-connected](https://raw.githubusercontent.com/RevoU-FSSE-2/week-9-SherinOlivia/main/documentation/mysql-connected.webp)

### Contact Me:

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOChronicle@gmail.com](mailto:SOChronicle@gmail.com) [Personal]

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOlivia@gmail.com](mailto:SOlivia198@gmail.com) [Work]

[![Roo-Discord](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-discord.svg)](https://discord.com/users/shxdxr#7539)[![Roo-Instagram](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-instagram.svg)](https://instagram.com/shxdxr?igshid=MzRlODBiNWFlZA==)[![Roo-LinkedIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-linkedin-circled.svg)](https://www.linkedin.com/in/sherin-olivia-07311127a/)
