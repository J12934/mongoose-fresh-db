# mongoose-fresh-db

Create a connection to a brand new MongoDB Database before each test.

## How it works

This pacakge exports two functions:

### createNewDatabase

Creates a new mongoose connection to `mongodb://localhost/test_database_${randomnumber}`.
This function is supposed to be run _before_ every test which is using the databse.

This ensure a few things:

* Every test is run in complete isolation
* Test can be run in parralel
* No need to reset the db after each test as every test starts with a clean db.

### dropDatabase

Drops the database from the default mongoose connection.
Supposed to be run _after_ each test.

## Installation

```bash
npm install --save-dev mongoose-fresh-db
```

## Usage

Currently only tested with [jest](https://facebook.github.io/jest/).

**This package assumes that the tested code itself doesn't create a mongoose connection!**

```js
import { createNewDatabase, dropDatabase } from 'mongoose-fresh-db';

beforeEach(createNewDatabase);
afterEach(dropDatabase);

test('this test will have a shiny new db instance', () => {});
```

For a more detailed example you can check out the tests of this package.
