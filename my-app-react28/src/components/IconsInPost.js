import { useDispatch } from "react-redux";
import styled from "styled-components";
import React from "react";

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const IconImage = styled.img`
    height: 35px;
    width: 35px;
    padding-left: 62px;
    cursor:pointer;
`;

const IconText = styled.div`
    width: 40px;
    color: #020202;
    padding: 10px;
    margin: -8px;
    font-size: 24px;
`;

const likeImg = 'https://cdn-icons-png.flaticon.com/512/126/126473.png'
const comments = 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png'
const share = 'https://cdn-icons-png.flaticon.com/512/3580/3580382.png'
const IconsInPost = ({likesElement, likesPost, likeValue, repostValue, repostPost, repostElement, commentsValue, commentsElement, commentsPost,}) => {
    const dispatch = useDispatch();
    function changeLike(e) {
        if (likeValue) {
           dispatch({type: "REMOVE_LIKE", payload: likesElement});
        } else {
            dispatch({type: "ADD_LIKE", payload: likesElement});
        }
    }
    function changeRepost(e) {
        if (repostValue) {
            dispatch({type: "REMOVE_REPOST", payload: repostElement});
        } else {
            dispatch({type: "ADD_REPOST", payload: repostElement});
        }
    }
    function changeComments(e) {
        if (commentsValue) {
            dispatch({type: "REMOVE_COMMENT", payload: repostElement});
        } else {
            dispatch({type: "ADD_COMMENT", payload: repostElement});
        }
    }
    return (
        <IconsContainer>
            <IconImage
                alt="лайки"
                src={likeImg}
                onClick={changeLike}
                likesElement={likesElement}
                likeValue={likeValue}
            />
            <IconText>{likesPost}</IconText>
            <IconImage
                alt="репости"
                src={share}
                onClick={changeRepost}
                RepostElement={repostElement}
                repostValue={repostValue}
            />
            <IconText>{repostPost}</IconText>
            <IconImage
                alt="коментарі"
                src={comments}
                onClick={changeComments}
                CommentsElement={commentsElement}
                CommentsValue={commentsValue}
            />
            <IconText>{commentsPost}</IconText>
        </IconsContainer>
    );
};

export default IconsInPost;