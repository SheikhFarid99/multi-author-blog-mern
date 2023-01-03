const articleModel = require('../../models/articleModel')
module.exports.home_article_get = async (req, res) => {

    let { currentPage, searchValue } = req.query;

    currentPage = parseInt(currentPage);
    const parPage = 5;
    const skipPage = parseInt(currentPage - 1) * parPage;
    let articles = [];

    try {
        const countArticle = await articleModel.find({}).countDocuments();
        if (searchValue) {

        } else {
            articles = await articleModel.find({}).skip(skipPage).limit(parPage).sort({ createAt: -1 });
        }
        return res.status(200).json({
            articles,
            parPage,
            countArticle
        })
    } catch (error) {
        return res.status(500).json({
            errorMessage: {
                error: "Internal server error"
            }
        })
    }
}
module.exports.home_tag_category_get = async (req, res) => {
    try {
        const getCategory = await articleModel.aggregate([
            {
                $match: {
                    category: {
                        $not: {
                            $size: 0
                        }
                    }
                }
            },
            {
                $unwind: "$category"
            },
            {
                $group: {
                    _id: "$category",
                    count: {
                        $sum: 1
                    }
                }
            }
        ])
        const getTag = await articleModel.distinct('tag');
        return res.status(200).json({
            allCategory: getCategory,
            allTag: getTag
        })
    } catch (error) {
        return res.status(500).json({
            errorMessage: {
                error: "Internal server error"
            }
        })
    }
}

module.exports.old_react_article = async (req, res) => {
    try {
        const oldArticle = await articleModel.aggregate([
            {
                $match: {}
            },
            {
                $sample: {
                    size: 3
                }
            }
        ])
        const recentArticle = await articleModel.find({}).limit(3).sort({
            createdAt: -1
        })
        return res.status(200).json({ oldArticle, recentArticle })

    } catch (error) {
        return res.status(500).json({
            errorMessage: {
                error: "Internal server error"
            }
        })
    }
}

module.exports.category_article_get = async (req, res) => {
    let { currentPage, categorySlug } = req.query;

    currentPage = parseInt(currentPage);
    const parPage = 2;
    const skipPage = parseInt(currentPage - 1) * parPage;

    try {
        const countArticle = await articleModel.find({ category_slug: categorySlug }).countDocuments();
        const articles = await articleModel.find({ category_slug: categorySlug }).skip(skipPage).limit(parPage).sort({ createAt: -1 });
        return res.status(200).json({
            categoryArticle: articles,
            parPage,
            countCateArticle: countArticle
        })
    } catch (error) {
        return res.status(500).json({
            errorMessage: {
                error: "Internal server error"
            }
        })
    }
}

module.exports.tag_article_get = async (req, res) => {
    let { currentPage, tagSlug } = req.query;

    currentPage = parseInt(currentPage);
    const parPage = 2;
    const skipPage = parseInt(currentPage - 1) * parPage;

    try {
        const countArticle = await articleModel.find({ tag_slug: tagSlug }).countDocuments();
        const articles = await articleModel.find({ tag_slug: tagSlug }).skip(skipPage).limit(parPage).sort({ createAt: -1 });
        return res.status(200).json({
            tagArticle: articles,
            parPage,
            countTagArticle: countArticle
        })
    } catch (error) {
        return res.status(500).json({
            errorMessage: {
                error: "Internal server error"
            }
        })
    }
}