const tagModel = require('../../models/tagModel');
module.exports.tag_add = async (req, res) => {
    const { tagName, tagDes } = req.body;

    const error = {};

    if (!tagName) {
        error.tagName = 'Please provide tag name';
    }
    if (!tagDes) {
        error.tagDes = 'Please provide tag description'
    }
    if (Object.keys(error).length == 0) {
        const tagSlug = tagName.trim().split(' ').join('-');
        try {
            const chaekTag = await tagModel.findOne({ tagSlug });
            if (chaekTag) {
                res.status(404).json({
                    errorMessage: {
                        error: 'Already added tag'
                    }
                })
            } else {
                await tagModel.create({
                    tagName: tagName.trim(),
                    tagSlug,
                    tagDes
                })
                res.status(201).json({
                    successMessage: 'tag add successfull'
                })
            }
        } catch (error) {
            res.status(500).json({
                errorMessage: {
                    error: 'Internal server error'
                }
            })
        }
    } else {
        res.status(404).json({ errorMessage: error });
    }
}
module.exports.tag_get = async (req, res) => {
    const { page, searchValue } = req.query;

    const parPage = 2;
    const skipPage = parseInt(page - 1) * parPage;
    if (searchValue === 'undefined' || !searchValue) {
        try {
            const tagCount = await tagModel.find({}).countDocuments();
            const getTag = await tagModel.find({}).skip(skipPage).limit(parPage).sort({ cateatedAt: -1 });
            res.status(200).json({
                allTag: getTag,
                parPage,
                tagCount
            })
        } catch (error) {
            res.status(500).json({
                errorMessage: {
                    error: 'Internal server error'
                }
            })
        }
    } else {
        try {
            const tagCount = await tagModel.find({}).countDocuments();
            let getTag = await tagModel.find({});
            getTag = getTag.filter(c => c.tagName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1)
            res.status(200).json({
                allTag: getTag,
                parPage,
                tagCount
            })
        } catch (error) {
            res.status(500).json({
                errorMessage: {
                    error: 'Internal server error'
                }
            })
        }
    }
}

module.exports.tag_delete = async (req, res) => {
    const tagId = req.params.tagId;

    try {
        await tagModel.findByIdAndDelete(tagId);
        res.status(200).json({
            successMessage: 'Tag delete success'
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }
}


module.exports.tag_edit = async (req, res) => {
    const { tagSlug } = req.params;

    try {
        const editTag = await tagModel.findOne({ tagSlug });

        res.status(200).json({
            editTag
        })

    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }
}


module.exports.tag_update = async (req, res) => {

    const { tagId } = req.params;
    const { tagName, tagDes } = req.body;
    const error = {};

    if (!tagName) {
        error.tagName = 'Please provide tag name';
    }
    if (!tagDes) {
        error.tagDes = 'Please provide tag description'
    }
    if (Object.keys(error).length == 0) {
        const tagSlug = tagName.trim().split(' ').join('-');
        try {
            await tagModel.findByIdAndUpdate(tagId, {
                tagName: tagName.trim(),
                tagSlug,
                tagDes
            })
            res.status(200).json({
                successMessage: 'Tag update successfull'
            })
        } catch (error) {
            res.status(500).json({
                errorMessage: {
                    error: 'Internal server error'
                }
            })
        }
    } else {
        res.status(400).json({ errorMessage: error });
    }
}