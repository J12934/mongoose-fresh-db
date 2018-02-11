const { createNewDatabase, dropDatabase } = require('mongoose-fresh-db');

const Cat = require('./cat');

beforeEach(createNewDatabase);
afterEach(dropDatabase);

test('can write to database', async () => {
    await Cat.create({
        name: 'Findus',
    });

    const [cat, ...cats] = await Cat.find({});

    expect(cat.name).toBe('Findus');
    expect(cats).toEqual([]);
});

test('has a clean db instance', async () => {
    const cats = await Cat.find({});

    expect(cats).toEqual([]);
});
