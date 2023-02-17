const mongoose = require('mongoose');
const slugify = require('slugify');

const exampleSchema = new mongoose.Schema({

    example_Name:{

    },

    example_number:{

    },

    example_descriptions:{

    },

});

const Example = mongoose.model('example', exampleSchema);

module.exports = Example;