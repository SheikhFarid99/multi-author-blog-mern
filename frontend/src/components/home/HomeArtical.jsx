import React, { useEffect } from 'react';
import {useParams } from "react-router-dom";
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux'
import { get_all_article } from '../../store/actions/home/homeAction'
import Article from './Article.jsx'

const HomeArtical = () => {
    const dispatch = useDispatch()
    const { currentPage } = useParams();

    const { allArticle, parPage, countArticle } = useSelector(state => state.homeReducer)

    useEffect(() => {
        dispatch(get_all_article(currentPage ? currentPage.split('-')[1] : 1, ""));

    }, [currentPage])
    return (
        <>
            <div className="home-articals">
                {
                    allArticle.length > 0 ? allArticle.map((art, index) =>
                        <Article key={index} art={art} />
                    ) : <h3>Article not found</h3>
                }
            </div>
            {
                parPage < countArticle ?
                    <Pagination
                        pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                        parPage={parPage}
                        itemCount={countArticle}
                        path='/article'
                    /> : null
            }
        </>
    );
};

export default HomeArtical;
