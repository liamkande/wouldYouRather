
let users = {

  mikew: {
    id: 'mikew',
    name: 'Mike Wolfe',
    avatarURL: 'https://www.picsofcelebrities.com/celebrity/chet-allen-actor/pictures/large/best-pictures-of-chet-allen-actor.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  
  jenniferq: {
    id: 'jenniferq',
    name: 'Jennifer Quartner',
    avatarURL: 'http://www.ez-photography.com/blog/wp-content/uploads/2011/08/grace-luthern-2-1.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },

  oumouk: {
    id: 'oumouk',
    name: 'Oumou Kande',
    avatarURL: 'http://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2015/11/25/Telah_Anderson_533x800_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['sdzhweuklhsudrhf234534', '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },

  yujiez: {
    id: 'yujiez',
    name: 'Yujie Zhou',
    avatarURL: 'https://i.pinimg.com/originals/80/63/70/806370f5453f7c98e7aaa38bafb24c31.jpg',
    answers: {
      "437trz36frg435zue6e644": 'optionTwo',
      "er7z3r437zrzr723zrwr43": 'optionOne'
    },
    questions: ['er7z3r437zrzr723zrwr43']
  },

  fabior: {
    id: 'fabior',
    name: 'Fabio Rodrigez',
    avatarURL: 'https://kinoafisha.ua/upload/2016/02/persons/9368/src_1456214610riko-rodriges.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "437trz36frg435zue6e644": 'optionTwo',
      "sdzhweuklhsudrhf234534": 'optionOne'
    },
    questions: ['437trz36frg435zue6e644']
  },

  juliao: {
    id: 'juliao',
    name: 'Julia Ocampo',
    avatarURL: 'http://lh3.googleusercontent.com/D0xuO85FDv5sh4EjOm9RBtowTYliuVNDkQt9FnN9SQD3oo3Jn-hAi4buqnZiKtG98z10ShUqGmbfF4rLcnYq2A=s285-c',
    answers: {
      "sdzhweuklhsudrhf234534": 'optionOne',
      "ivxt8hdrkzyaxrtsz3p7": 'optionOne'
    },
    questions: ["ivxt8hdrkzyaxrtsz3p7"]
  },

  jasonm: {
    id: 'jasonm',
    name: 'Jason Mandela',
    avatarURL: 'http://worldhelp.net/wp-content/uploads/2015/06/Sponsor-a-child-in-Africa-World-Help.jpg',
    answers: {
      "sdzhweuklhsudrhf234534": 'optionTwo',
      "awdfaw74rzshuhfw4urhwu": 'optionOne'
    },
    questions: ['awdfaw74rzshuhfw4urhwu']
  }
}

let questions = {
  "sdzhweuklhsudrhf234534": {
    id: 'sdzhweuklhsudrhf234534',
    author: 'oumouk',
    timestamp: 1467166872633,
    optionOne: {
      votes: ['fabior', 'juliao'],
      text: 'never eat candy again'
    },
    optionTwo: {
      votes: ['jasonm'],
      text: 'never eat ice cream again'
    }
  },
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'oumouk',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['oumouk', 'fabior'],
      text: 'homework by yourself'
    },
    optionTwo: {
      votes: [],
      text: 'with your friends'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'jenniferq',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['oumouk', 'jenniferq'],
      text: 'play video games'
    },
    optionTwo: {
      votes: [],
      text: 'play outside with your friends'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'oumouk',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'create a new toy'
    },
    optionTwo: {
      votes: ['oumouk'],
      text: 'create a new game'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'mikew',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be good at sports'
    },
    optionTwo: {
      votes: ['oumouk'],
      text: 'get excellent grades in school'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'mikew',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['mikew'],
      text: 'become 10 years older '
    },
    optionTwo: {
      votes: ['jenniferq'],
      text: 'become 10 years younger'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'jenniferq',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['jenniferq'],
      text: 'give up burgers'
    },
    optionTwo: {
      votes: ['mikew'],
      text: 'pizza'
    }
  },
  "437trz36frg435zue6e644": {
    id: '437trz36frg435zue6e644',
    author: 'fabior',
    timestamp: 629924400000,
    optionOne: {
      votes: [],
      text: 'be the most popular kid in school'
    },
    optionTwo: {
      votes: ['fabior','yujiez'],
      text: 'be the smartest kid in school'
    }
  },
  "er7z3r437zrzr723zrwr43": {
    id: 'er7z3r437zrzr723zrwr43',
    author: 'yujiez',
    timestamp: 1527076641000,
    optionOne: {
      votes: ['yujiez'],
      text: 'visit an amusement park'
    },
    optionTwo: {
      votes: [],
      text: 'a zoo'
    }
  },
  "awdfaw74rzshuhfw4urhwu": {
    id: 'awdfaw74rzshuhfw4urhwu',
    author: 'jasonm',
    timestamp: 1528284451000,
    optionOne: {
      votes: ['jasonm'],
      text: ' go skiing '
    },
    optionTwo: {
      votes: [],
      text: 'go swimming'
    }
  },
  "ivxt8hdrkzyaxrtsz3p7": {
    id: 'ivxt8hdrkzyaxrtsz3p7',
    author: 'juliao',
    timestamp: 1528434560179,
    optionOne: {
      votes: ['juliao'],
      text: 'never be able to text your friends'
    },
    optionTwo: {
      votes: [],
      text: 'never be able to play games'
    }
  }
}


function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    author,
    timestamp: Date.now(),
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  }
}

function formatUser({ id, name, avatarURL }) {
  return {
    id,
    name,
    avatarURL,
    answers: {},
    questions: []
  }
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// #endregion

// #region export

export function _getUsers() {
  return new Promise(res => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions() {
  return new Promise(res => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _saveQuestion(question) {
  return new Promise(res => {
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise(res => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

export function _saveUser(user) {
  return new Promise((res, rej) => {
    const formattedUser = formatUser(user)

    users.hasOwnProperty(formattedUser.id)
      ? rej('This user already exists!')
      : setTimeout(() => {
        users = {
          ...users,
          [formattedUser.id]: formattedUser
        }

        res(formattedUser)
      }, 1000)
  })
}
