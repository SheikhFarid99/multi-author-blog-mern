const articleModel = require('../../models/articleModel')
module.exports.getArticleDetails = async (req, res) => {
    const { articleSlug } = req.params;
    try {
        const read_article = await articleModel.findOne({ slug: articleSlug })
        const related_article = await articleModel.aggregate([{
            $match: {
                $and: [{
                    category_slug: {
                        $eq: read_article.category_slug
                    }
                }, {
                    slug: {
                        $ne: articleSlug
                    }
                }]
            }
        },
        {
            $sample: {
                size: 3
            }
        }
        ])

        const readMore = await articleModel.aggregate([{
            $match: {
                $and: [{
                    category_slug: {
                        $eq: read_article.category_slug
                    }
                }, {
                    slug: {
                        $ne: articleSlug
                    }
                }]
            }
        },
        {
            $sample: {
                size: 1
            }
        }
        ])
        const moreTag = await articleModel.distinct('tag_slug', {
            tag_slug: {
                $ne: read_article.tag_slug
            }
        })
        res.status(200).json({
            related_article,
            readMore: {
                title: readMore.length > 0 ? readMore[0].title : "",
                slug: readMore.length > 0 ? readMore[0].slug : "",
            },
            read_article,
            moreTag
        })
    } catch (error) {
        res.status(500).json({ errorMessage: { error: "Iternal server error" } })
    }
}

module.exports.like_dislike_get = async (req, res) => {
    const { articleSlug } = req.params
    const { userId, userName, role } = req

    try {
        const get = await articleModel.findOne({ slug: articleSlug }).select({ like: 1, dislike: 1, like_dislike: 1 })
        const check_user = get.like_dislike.find(u => u.like_disliker_id === userId)
        if (check_user) {
            if (check_user.like_or_dislike === 'like') {
                res.status(200).json({
                    like_status: 'like',
                    dislike_status: '',
                    like: get.like,
                    dislike: get.dislike
                })
            } else {
                res.status(200).json({
                    like_status: '',
                    dislike_status: 'dislike',
                    like: get.like,
                    dislike: get.dislike
                })
            }
        } else {
            res.status(200).json({
                like_status: "",
                dislike_status: "",
                like: get.like,
                dislike: get.dislike
            })
        }
    } catch (error) {
        console.log(error.message)
    }

}