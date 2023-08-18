import express from 'express'
const userrouter = express.Router()
import UserDataController from '../controllers/UserDataController';

// get all user data
userrouter.get('/', UserDataController.getAllUserDataLocal);

// get user data per id
userrouter.get('/:id', UserDataController.getUserDataLocal);

export default userrouter