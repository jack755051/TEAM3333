import React from 'react'
import ForumContent from './ForumContent'

function ForumList(props){
    const { forumItems } = props
    return (
        <>
        <table className="border-collapse">
            <thead className="h-20 text-lg text-white">
                <tr className="my-6 bg-navy-900">
                    <th className="w-2/12 p-2">遊戲名稱</th>
                    <th className="w-3/12 p-2">文章標題</th>
                    <th className="w-2/12 p-2">文章<br/>類型</th>
                    <th className="w-1/12 p-2">發文者</th>
                    <th className="w-3/12 p-2">發文時間</th>
                    <th className="w-1/12 p-2">狀態</th>
                </tr>
            </thead>
            {forumItems.map((forumItem,index)=>(
                <ForumContent 
                    key={index}
                    gameName={forumItem.gameName}
                    articleTitle={forumItem.articleTitle}
                    articleType={forumItem.articleType}
                    userName={forumItem.userName}
                    launchTime={forumItem.launchTime}
                    />
            ))}
            </table>
        </>
    )
}
export default ForumList
