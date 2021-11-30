const express = require('express');
const {registerUser, loginUser, authorizeUser, signoutUser, updateUser, addInterest, searchUser} = require('../controllers/userControllers');
const { CreateLog, AddtoLog, GetUserFromLog} = require('../controllers/callControllers');
const { LoggedInRequired } = require('../middlewares/authMiddleware');
const router = express.Router();

//Routes for different functions
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/authorize').get(LoggedInRequired, authorizeUser);
router.route('/logout').get(LoggedInRequired, signoutUser);
router.route('/update_profile').patch(LoggedInRequired, updateUser);
router.route('/add_interest').post(LoggedInRequired, addInterest);
router.route('/search').get(LoggedInRequired, searchUser);
router.route('/call/CreateCallLog').post(CreateLog);
router.route('/call/AddUsertoLog').patch(AddtoLog);
router.route('/call/GetCallLog').get(LoggedInRequired, GetUserFromLog);

module.exports=router