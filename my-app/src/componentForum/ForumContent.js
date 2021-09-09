import React from 'react'


function ForumContent(props){
    const{gameName,articleTitle,articleType,userName,launchTime}=props
    return (
        <>
            <tbody className="mx-2 text-center ">
            <tr className="border-b-2 border-gray-200 h-14 bg-navy-900 hover:bg-indigo-300 hover:text-black" >
            <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">{gameName}</td>
            <td className="-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
                {articleTitle}
            </td>
            <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
                {articleType}
            </td>

            <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
              <a href="#/" className="block hover:text-white">{userName}</a>
            </td>
            
            <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
              {launchTime}
            </td>
            
            <td className="p-2 xl:w-64 lg:w-56 md:w-48 sm:w-44">
              <a href="./forumFile/forum1.html" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </td>
          </tr>
          </tbody>
        </>
    )
}


export default ForumContent
