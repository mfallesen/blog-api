const mongoose = require('mongoose');
const dayjs = require('dayjs');
const blogPost = require('../models/blogpost')

describe('Test Blog Post for proper implementation', () => {

    test(('has Author', () => {
        expect(blogPost.author)
    }))

    test(('has a Title', () => {
        expect(blogPost.title)
    }))
    
    test(('has a Date', () => {
        expect(blogPost.date)
    }))
    test(('has a Date Formatted Correctly', () => {
        expect(blogPost.date)
    }))
    
    
    test(('has a Main Body', () => {
        expect(blogPost.mainBody)
    }))
    



})