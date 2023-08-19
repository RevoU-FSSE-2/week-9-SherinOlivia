import express from 'express'
const userrouter = express.Router()
import UserDataController from '../controllers/UserDataController';

// get all user data
userrouter.get('/', UserDataController.getAllUserData);

// get user data per id
userrouter.get('/:id', UserDataController.getUserData);

export default userrouter