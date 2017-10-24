const express = require('express')
const { catchErrors } = require('../handlers/errorHandlers')
const { getCourses, getCourse, getLesson, getCoursesByCategory } = require('./courses')
const { getSettings, postSettings } = require('./settings')
const { getSitemap } = require('./sitemap')
const { getLandingPage } = require('./landingPage')
const router = express.Router()

/* GET the home landing page. */
router.get('/', catchErrors(getLandingPage))

/* Courses Routes */
router.get('/courses', catchErrors(getCourses))
router.get('/courses/categories/:category', catchErrors(getCoursesByCategory))
router.get('/courses/:slug', catchErrors(getCourse))
router.get('/courses/:slug/lessons', catchErrors(getCourse))
router.get('/courses/:cslug/lessons/:lslug', catchErrors(getLesson))

/* Settings Routes */
router.get('/settings', catchErrors(getSettings))
router.post('/settings', catchErrors(postSettings))

/* Sitemap Route */
router.get('/sitemap', catchErrors(getSitemap))

/* About Route */
router.get('/about', catchErrors(getLandingPage))

module.exports = router
