// import React from 'react'
// import ForumList from '../componentForum/ForumList'
// import {
//     // Route,
//     withRouter,
//     // NavLink,
//     // Switch,
//     // matchPath,
//     Link
//   } from 'react-router-dom'

// const forumItems = [
//   {
//     gameName:'風聲',
//     articleTitle:'遊戲角色不平衡問題如何改善',
//     articleType:'遊戲討論',
//     userName:'Leo9527',
//     launchTime:'2021-07-09 17:12',
//   },
//   {
//     gameName:'拉密',
//     articleTitle:'拿到的色違版的牌組，顏色意外好看',
//     articleType:'遊戲分享',
//     userName:'Leo9527',
//     launchTime:'2021-07-09 17:12',
//   },
//     {
//     gameName:'阿瓦隆',
//     articleTitle:'減少囚徒困境',
//     articleType:'遊戲攻略',
//     userName:'Leo9527',
//     launchTime:'2021-07-09 17:12',
//   },
//   {
//     gameName:'閃靈快手',
//     articleTitle:'盜版名字叫『快手鬼鬼』',
//     articleType:'遊戲討論',
//     userName:'Mike68962',
//     launchTime:'2021-07-09 17:12',
//   },
//   {
//     gameName:'拉密',
//     articleTitle:'這遊戲可以算牌嗎？',
//     articleType:'遊戲討論',
//     userName:'Luck77',
//     launchTime:'2021-07-09 17:12',
//   },
// ]
  
// function Forum(props) {
//     const { auth } = props 
    
//     return (
//         <>
//             <div className="flex justify-between">
//                 <p className="my-4 text-4xl font-bold text-black">遊戲討論區</p>
//             </div>
//             <div className="flex justify-between px-6 py-4 bg-gray-500">
//         <div className="relative pt-2 text-gray-600">
//           <input className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
//             type="search" name="search" placeholder="Search" />
//           <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
//             {/* <svg className="w-4 h-4 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
//               viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
//               width="512px" height="512px">
//               <path
//                 d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//             </svg> */}
//           </button>
//         </div>
//         <div>
//           <button className="block w-32 h-12 text-lg bg-orange-400 rounded-md modal-open hover:bg-orange-600">創建討論區</button>
//         </div>
//       </div>

//       <table className="border-collapse">
//         <thead className="h-20 text-lg text-white ">
//           <tr className="my-6 bg-navy-900">
//             <th className="w-1/5 p-2">遊戲名稱</th>
//             <th className="w-1/4 p-2">文章標題</th>
//             <th className="p-2 w-1/10">文章<br/>類型</th>
//             <th className="p-2 w-1/10">發文者</th>
//             <th className="w-1/4 p-2">發文時間</th>
//             <th className="p-2 w-1/10">狀態</th>
//           </tr>
//         </thead>
        
//         <tbody className="text-center ">
//           <tr className="border-b-2 border-gray-200 h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black" >
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">風聲</td>
//             <td className="-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               遊戲角色不平衡問題如何改善
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//                 遊戲<br/>討論
//             </td>

//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block hover:text-white">Leo9527</Link>
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               2021-07-09 17:12
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="./forumFile/forum1.html" className="block">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>  
//               </Link>
//             </td>
//           </tr>

//           <tr className="border-b-2 border-gray-200 h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black" >
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">拉密</td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">              
//               拿到的色違版的牌組，顏色意外好看
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//                 遊戲<br/>分享
//             </td>

//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block hover:text-white">Kiki33201</Link>
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               2021-07-09 17:12
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>  
//               </Link>
//             </td>
//           </tr>

//           <tr className="border-b-2 border-gray-200 h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black" >
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">阿瓦隆</td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">              
//               減少囚徒困境
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//                 遊戲<br/>攻略
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block hover:text-white">Mike68982</Link>
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               2021-07-09 17:12
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>  
//               </Link>
//             </td>
//           </tr>

//           <tr className="border-b-2 border-gray-200 h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black" >
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">閃靈快手</td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">              
//               盜版名字叫『快手鬼鬼』
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//                 遊戲<br/>討論
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block hover:text-white">Mike68982</Link>
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               2021-07-09 17:12
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>  
//               </Link>
//             </td>
//           </tr>

//           <tr className="h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black">
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">拉密</td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">              
//               這遊戲可以算牌嗎？
//             </td>
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//                 遊戲<br/>討論
//             </td>

//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block hover:text-white">Lucky77</Link>
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               2021-07-09 17:12
//             </td>
            
//             <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
//               <Link to="#/" className="block">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>  
//               </Link>
//             </td>
//           </tr>

//         </tbody>
//       </table>
//         </>
//     )
// }

// export default withRouter(Forum)

