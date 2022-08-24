import React from 'react';
import classes from './Post.module.css';
import { useSelector } from 'react-redux';
import IconsInPost from './IconsInPost';

const Post = () => {
    const users = useSelector(state => state.postReducer)
    return (
        <div className={classes.container}>
            {users.map((el, i) => (
                <div className={classes.post} key={el.key}>
                    <div className={classes.header}>
                        <img className={classes.authorImg} src={el.avatar} alt="фотка автора"/>
                        <div className={classes.headerText}>
                            <p className={classes.authorName}>{el.name}</p> 
                            <span className={classes.nickname}>{el.nickName}</span>
                            <span className={classes.date}>{el.date}</span>
                        </div>  
                        <span className={classes.text}>{el.textPublication}</span>  
                    </div> 
                    <div className={classes.main}>
                        <img className={classes.contentImage} src={el.imagePublication} alt="картинка континенту"/>
                    </div> 
                    <div>
                        <div className={classes.footer}>
                            <IconsInPost 
                                likeValue={el.valueLike}
                                likesElement={i}
                                likesPost={el.likes}
                                repostElement={i}
                                repostPost={el.repost}
                                repostValue={el.valueRepost}
                                commentsElement={i}
                                commentsPost={el.comments}
                                commentsValue={el.valueComments}
                            />
                    </div>          
                </div>
            </div>
            ))}
        </div>
    )
}

export default Post;