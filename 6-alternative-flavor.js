module.exports.items = ['items', 'items 1', 'items 2']

const person = {
    job: 'designer',
    age: 21,
    name: 'bob',

    calcAge: () => {
        return 2021 - parseInt(this.age)
    }
}

module.exports.singlePerson = person