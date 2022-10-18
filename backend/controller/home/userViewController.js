const date = require('date-and-time')
const userViewModel = require('../../models/userViewModel')
const userViewController = async (req, res) => {
    const { userVisite } = req.cookies

    try {
        const time = date.format(new Date(), 'YYYY/MM/DD').split('/')
        const year = time[0]
        const month = time[1]

        const checkYear = await userViewModel.findOne({ year })
        if (checkYear) {
            const uniqeViewer = checkYear.uniqeViewer;
            const checkCookie = uniqeViewer.find(c => c === userVisite)
            if (checkCookie && checkCookie !== undefined) {
                let monthArray = checkYear.monthArray
                const checkViewer = monthArray[month - 1].uniqeViewer.find(c => c === userVisite)
                if (!checkViewer) {
                    monthArray[month - 1].viewer = monthArray[month - 1].viewer + 1
                    monthArray[month - 1].uniqeViewer = [...monthArray[month - 1].uniqeViewer, userVisite]
                    await userViewModel.updateOne({
                        year
                    }, {
                        monthArray
                    })
                    res.status(200).json({ message: "success" })
                }
            } else {
                let monthArray = checkYear.monthArray;
                const makeCookie = Math.floor(Math.random() * 50000000 + 5434374) + Date.now();
                const cookieString = makeCookie.toString()
                monthArray[month - 1].viewer = 1 + monthArray[month - 1].viewer;
                monthArray[month - 1].uniqeViewer = [...monthArray[month - 1].uniqeViewer, cookieString]

                await userViewModel.updateOne({
                    year
                }, {
                    viewer: checkYear.viewer + 1,
                    monthArray,
                    $push: {
                        uniqeViewer: cookieString
                    }
                })
                const option = {
                    expires: new Date(Date.now() + 366 * 24 * 60 * 60 * 1000)
                }
                return res.status(201).cookie('userVisite', cookieString, option).json({ successMessage: 'success' })
            }
        } else {
            let monthArray = [];
            for (let i = 0; i < 12; i++) {
                monthArray.push({
                    viewer: 0,
                    month: i + 1,
                    uniqeViewer: []
                })
            }
            const makeCookie = Math.floor(Math.random() * 50000000 + 5434374) + Date.now();
            const cookieString = makeCookie.toString()
            monthArray[month - 1].month = month
            monthArray[month - 1].viewer = 1
            monthArray[month - 1].uniqeViewer = [cookieString]

            await userViewModel.create({
                viewer: 1,
                year,
                monthArray,
                uniqeViewer: [cookieString]
            })
            const option = {
                expires: new Date(Date.now() + 366 * 24 * 60 * 60 * 1000)
            }
            return res.status(201).cookie('userVisite', cookieString, option).json({ successMessage: 'success' })
        }
    } catch (error) {
        return res.status(500).json({ errorMessage: 'Internal server error' })
    }
}

module.exports = userViewController