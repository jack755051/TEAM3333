import React, {useState} from 'react'
import ForumList from '../componentForum/ForumList'
import CreatGameRoomInput from '../componentForum/CreatGameRoomInput'
import CreateGameRoomPopup from '../componentForum/CreateGameRoomPopup'
import {
    // Route,
    withRouter,
    // NavLink,
    // Switch,
    // matchPath,
    Link
  } from 'react-router-dom'

const forumItems = [
  {
    gameName:'風聲',
    articleTitle:'遊戲角色不平衡問題如何改善',
    articleType:'遊戲討論',
    userName:'Leo9527',
    launchTime:'2021-07-09 17:12',
  },
  {
    gameName:'拉密',
    articleTitle:'拿到的色違版的牌組，顏色意外好看',
    articleType:'遊戲分享',
    userName:'Leo9527',
    launchTime:'2021-07-09 17:12',
  },
    {
    gameName:'阿瓦隆',
    articleTitle:'減少囚徒困境',
    articleType:'遊戲攻略',
    userName:'Leo9527',
    launchTime:'2021-07-09 17:12',
  },
  {
    gameName:'閃靈快手',
    articleTitle:'盜版名字叫『快手鬼鬼』',
    articleType:'遊戲討論',
    userName:'Mike68962',
    launchTime:'2021-07-09 17:12',
  },
  {
    gameName:'拉密',
    articleTitle:'這遊戲可以算牌嗎？',
    articleType:'遊戲討論',
    userName:'Luck77',
    launchTime:'2021-07-09 17:12',
  },
]
  
function Forum(){
    // const { auth } = props 
    const [buttonPopup ,setButtonPopup] = useState(false);

    return (
        <>
        <CreateGameRoomPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <CreatGameRoomInput />
        </CreateGameRoomPopup>
        
            <div className="flex justify-between">
                <p className="my-4 text-4xl font-bold text-black">遊戲討論區</p>
            </div>
            <div className="flex justify-between px-6 py-4 bg-gray-500">
              <div className="relative pt-2 text-gray-600">
                <input className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
                  type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            <div>
              <button  
                className="block w-32 h-12 text-lg bg-orange-400 rounded-md modal-open hover:bg-orange-600"
                onClick={()=>setButtonPopup(true)}>創建討論區
              </button>
            </div>
      </div>
      <ForumList forumItems={forumItems} />
      </>
    )
}

export default withRouter(Forum)

