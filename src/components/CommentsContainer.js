import React from 'react'

const commentsData = [
    {
        name: "Shweta Yadav 1",
        text:"random text is added",
        replies:[

        ]
    },
    {
        name: "Shweta Yadav2",
        text:"random text is added",
        replies:[
            {
                name: "Shweta Yadav 2.1",
                text:"random text is added",
                replies:[
                    
                ]
            },
            {
                name: "Shweta Yadav 2.2",
                text:"random text is added",
                replies:[
                    {
                        name: "Shweta Yadav 2.2.1",
                        text:"random text is added",
                        replies:[
                            
                        ]
                    },
                     {
                        name: "Shweta Yadav 2.2.2",
                        text:"random text is added",
                        replies:[
                            {
                                name: "Shweta Yadav 2.2.2.1",
                                text:"random text is added",
                                replies:[
                                    {
                                        name: "Shweta Yadav 2.2.2.1.1",
                                        text:"random text is added",
                                        replies:[
                                            
                                        ]
                                    }, {
                                        name: "Shweta Yadav 2.2.2.1.2",
                                        text:"random text is added",
                                        replies:[
                                            
                                        ]
                                    }, {
                                        name: "Shweta Yadav 2.2.2.1.3",
                                        text:"random text is added",
                                        replies:[
                                            {
                                                name: "Shweta Yadav 2.2.2.1.3.1",
                                                text:"random text is added",
                                                replies:[
                                                    
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: "Shweta Yadav 2.2.3",
                        text:"random text is added",
                        replies:[
                            
                        ]
                    },
                ]
            },
            {
                name: "Shweta Yadav 2.3",
                text:"random text is added",
                replies:[
                    
                ]
            },
        ]
    },
    {
        name: "Shweta Yadav 3",
        text:"random text is added",
        replies:[
            
        ]
    },
    {
        name: "Shweta Yadav 4",
        text:"random text is added",
        replies:[
            
        ]
    },
    {
        name: "Shweta Yadav 5",
        text:"random text is added",
        replies:[
            
        ]
    },
    {
        name: "Shweta Yadav 6",
        text:"random text is added",
        replies:[
            
        ]
    },
]
const Comment = ({data})=>{
    const {name, text, replies} =data;
        return(
          <div className='flex bg-gray-500 p-2 rounded my-2' >
            <img className='w-8 h-8 '  src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user" />
            <div className='px-3'>
                <p className='bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
        )
}
const CommentsList = ({comments}) => {
    return comments.map( (comment, index) => 
    <div>
        <Comment key={index} data={comment} />
        <div className='pl-5 ml-5 border-l-2'>
            <CommentsList comments={comment.replies}/>
        </div>
    </div>
    )          
}
const CommentsContainer = () => {
  return (

    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'> Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
