let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    password: "1234",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    password: "1234",
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    password: "1234",
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }),0);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

export function _getUsersCred () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const cred = Object.values(users).map((user) => {
        return { username: user.id, password: user.password };
      });
      res(cred)
    },1000)
  })
}


function formatQuestion (info) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author:info.author,
    optionOne: {
      votes: [],
      text: info.optionOne,
    },
    optionTwo: {
      votes: [],
      text: info.optionTwo,
    }
  }
}

export function _saveQuestion (info) {
  return new Promise((res, rej) => {
    const author = info.author;
    const formattedQuestion = formatQuestion(info);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [author]: {
          ...users[author],
          questions: users[author].questions.concat([formattedQuestion.id])
        }
      }
      res(formattedQuestion)
    }, 500)
  })
}

export function _saveQuestionAnswer ({ authUser, QID, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [QID]: answer
          }
        }
      }

      questions = {
        ...questions,
        [QID]: {
          ...questions[QID],
          [answer]: {
            ...questions[QID][answer],
            votes: questions[QID][answer].votes.concat([authUser])
          }
        }
      }

      res()
    }, 500)
  })
}



function formatUser (info) {
  return {
    id: info.id,
    name: info.name,
    password: info.password,
    avatarURL: info.imageUrl,
    answers: {},
    questions: []
  }
}
export function _saveUser (info) {
  return new Promise((res, rej) => {
    const formatUserObj = formatUser(info);
    setTimeout(() => {
      users = {
        ...users,
        [info.id]: formatUserObj
      }

      res(formatUserObj)
    }, 1000)
  })
}
