import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import Loading from '../components/Loading';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    const getPosts = async()=>{
        setLoading(true);
        await appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }).finally(()=>{
            setLoading(false);
        })
    }
    useEffect(() => {
        getPosts();
    }, [])

    if(loading){
        return <Loading/>
    }else{
        return (
            <div className='w-full min-h-[244px] py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.length===0? (<h1 className="text-2xl text-center font-bold hover:text-gray-500 w-full ">
                                        No Blog added yet
                                    </h1>) : (
                                        posts.map((post) => (
                                            <div key={post.$id} className='p-2 w-1/4'>
                                                <PostCard {...post} />
                                            </div>
                                        ))
                                    )}
                        
                    </div>
                    </Container>
            </div>
        )
    }
  
}

export default AllPosts