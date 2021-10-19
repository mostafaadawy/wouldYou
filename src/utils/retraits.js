export function decideStatus({cred, authUser}){
  let status =0; //0-no data-1-author is setted up-2-logged in 3-error404
  if(authUser===undefined){
      status=0;
  }else if(authUser==='NONE'){
      if(cred.length>0){
          const userList = cred.map(c=>c.username)
          if(userList.includes(authUser)){
              status=2;
          }else{
              status=1;
          }
      }else{
          status=1;
      }  
  }else if(cred.length>0){
      const userList = cred.map(c=>c.username)
      if(userList.includes(authUser)){
          status=2;
      }else{
          status=1;
      }
  }
  return{
      status,
  }
}