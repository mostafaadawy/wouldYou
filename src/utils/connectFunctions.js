export function homeHandleProps({questions, authUser},{isAns}){
    let answeredQuestions=[]
    let unAnsweredQuestions=[]
    try{
      const sortedQuestions = Object.values(questions).sort((a,b)=> b.timestamp -a.timestamp)
      const allIds= sortedQuestions.map(c=>c.id)
       answeredQuestions=sortedQuestions.filter(question => (question.optionOne.votes.includes(authUser)) || (question.optionTwo.votes.includes(authUser)))
      .map(que=>que.id)
  
      unAnsweredQuestions=allIds.filter(id => !answeredQuestions.includes(id))
    }catch(e){ 
    alert('Extraction error',e)}
    
    return{answeredQuestions, unAnsweredQuestions,isAns}
}

export function leaderHandleProps({authUser, users}){
    const medal=[
        "https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png",
        "https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png",
        "https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png",
        "https://img.icons8.com/color/96/000000/unlucky.png",
    ]
const scoreList = Object.values(users).map((user)=>{
return{ id:user.id,answers: Object.values(user.answers).length, 
questions:user.questions.length,
avatar:user.avatarURL,
name:user.name,
score:Object.values(user.answers).length+user.questions.length,
}
}).sort((a, b) => b.score - a.score)

return{
    authUser,
    scoreList,
    medal,
}
}

export function questionHandleProps({questions, users},{isAnswered,questionId}){
    try{
        return{
          error404:false,
          isAnswered,
          userName: users[questions[questionId].author].name,
          userAvatar: users[questions[questionId].author].avatarURL,
          optionOne: questions[questionId].optionOne.text,
          optionTwo: questions[questionId].optionTwo.text,
        }
      }catch(e){}
      return{
        error404:true,
      }
}

export function voteHandleProps({users,questions,authUser},{match}){
    const qlist=Object.keys(questions)
    const QID = match.params.questionId
    const notFound = !qlist.includes(match.params.questionId)
    if(notFound){
      return {notFound:true, }
    }
    const Quest  = questions[QID]
    const user = users[Quest.author]
    return {
      notFound,
      id:Quest.id,
      userName:user.name,
      userAvatar:user.avatarURL,
      optionOne:Quest.optionOne.text,
      optionTwo:Quest.optionTwo.text,
      authUser:authUser,
      qlist:Object.keys(questions),
    }
}

export function voteResultHandleProps ({users, questions, authUser,},{match}){
    const QID= match.params.questionId
    const Quest = questions[QID]
    if(Quest === undefined){
        return{
            notFound:true
        }
    }else{
        const amIansweredOptionOne = Quest.optionOne.votes.includes(authUser)
        const amIansweredOptionTwo = Quest.optionTwo.votes.includes(authUser)
        const Op1=Quest.optionOne.votes.length
        const Op2=Quest.optionTwo.votes.length
        const totalVotes=Op1+Op2
        const Op1Percentage = (Op1*100)/totalVotes
        const Op2Percentage = (Op2*100)/totalVotes
        const name=users[Quest.author].name
        const avatar = users[Quest.author].avatarURL
        const voteIcon = "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-vote-voting-justicon-lineal-color-justicon.png"
        return{
            totalVotes,
            amIansweredOptionOne,
            amIansweredOptionTwo,
            Op1Percentage,
            Op2Percentage,
            Op1,
            Op2,
            name,
            avatar,
            voteIcon,
            notFound:false,
        }  
        }
}