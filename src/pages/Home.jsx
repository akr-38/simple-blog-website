import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])

    let authStatus = useSelector((state)=>state.auth.status); 

    useEffect(() => {
        ;
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
        return (
            <div className="w-full h-[227px] py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Welcome to .blogs
                            </h1><br />
                            {authStatus ? (<h2>Read, Create, Edit, or Delete your blogs..</h2>) : (<h2>
                                Login / Sign Up to continue...
                            </h2>) }
                        </div>
                    </div>
                </Container>
            </div>
        )
    //else{
    // return (
    //     <div className='w-full py-8'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 w-1/4'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )
    // }
}

export default Home