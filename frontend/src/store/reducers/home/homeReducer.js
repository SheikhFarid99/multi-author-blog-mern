const initState = {
    allArticle: [],
    countArticle: 0,
    allTag: [],
    allCategory: [],
    oldArticle: [],
    recentArticle: [],
    parPage: 0,
    related_article: [],
    readMore: "",
    read_article: '',
    moreTag: []
}

export const homeReducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === "HOME_ARTICLE_GET_SUCCESS") {
        return {
            ...state,
            allArticle: payload.articles,
            countArticle: payload.countArticle,
            parPage: payload.parPage
        }
    }
    if (type === 'HOME_CATEGORY_TAG_GET_SUCCESS') {
        return {
            ...state,
            allCategory: payload.allCategory,
            allTag: payload.allTag
        }
    }
    if (type === 'GET_OLD_REACT_ATICLE_SUCCESS') {
        return {
            ...state,
            recentArticle: payload.recentArticle,
            oldArticle: payload.oldArticle
        }
    }
    if (type === 'CATEGORY_ARTICLE_GET_SUCCESS') {
        return {
            ...state,
            allArticle: payload.categoryArticle,
            countArticle: payload.countCateArticle,
            parPage: payload.parPage
        }
    }
    if (type === 'TAG_ARTICLE_GET_SUCCESS') {
        return {
            ...state,
            allArticle: payload.tagArticle,
            countArticle: payload.countTagArticle,
            parPage: payload.parPage
        }
    }
    if (type === 'READ_ARTICLE_GET_SUCCESS') {
        return {
            ...state,
            readMore: action.payload.readMore,
            read_article: action.payload.read_article,
            moreTag: action.payload.moreTag,
            related_article: action.payload.related_article
        }
    }
    return state;
}