import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
    _getUsersCred,
    _saveUser,
  } from './_DATA.js'
  
  export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
      users,
      questions,
    }));
  }
  
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }


  export function getUsersCred () {
    return  _getUsersCred()
  }



  export function saveUser (info) {
    return _saveUser(info)
  }