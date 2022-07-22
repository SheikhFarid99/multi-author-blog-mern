module.exports.article_validator = (data, file) => {
    const { title, category, slug, tag, text } = data;
    let error = {};

    if (!title) {
        error.title = 'Please provide article title'
    }
    if (!category) {
        error.category = 'Please provide article category'
    }
    if (!slug) {
        error.slug = 'Please provide article slug'
    }
    if (!tag) {
        error.tag = 'Please provide article tag'
    }
    if (!text) {
        error.text = 'Please provide article text'
    }

    if (file) {
        if (Object.keys(file).length === 0) {
            error.image = 'Please provide article image'
        }
    }

    if (Object.keys(error).length === 0) {
        return {
            validated: true
        }
    } else {
        return {
            validated: false,
            error: error
        }
    }
}
