let { Repository } = require("./solution.js");
let {expect} = require('chai');

describe("Repository …", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let newEntity = {
        name: 'Ivo',
        age: 12,
        birthday: new Date(2010, 12, 22)
    }

    let invalid1 = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
        lola: 'palula'
    };
    
    let invalid2 = {
        name: "Pesho",
        age: 22
    };

    let invalid3 = {
        name: "Pesho",
        age: '22',
        birthday: new Date(1998, 0, 7),
    };

 

    describe("Ctor", function () {
        it("When a repo is initialized - data is empty, props are correct",  () =>  { 
            let repo = new Repository(properties);
            expect(repo.data).to.deep.equal(new Map());
            expect(repo).to.have.property('data');
            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal({
                name: "string",
                age: "number",
                birthday: "object"
            });
        });
    });

    describe("Count", () =>  {
        it('returns number of entries', () => {
            let repo = new Repository(properties);
            expect(repo.count).to.equal(0);
            repo.add(entity);
            repo.add(entity);
            expect(repo.count).to.equal(2);
            repo.add(entity);

            expect(repo.count).to.equal(3);
        });
    });

    describe("Add", () => {
        it('correct entity adds to data', () => {
            let repo = new Repository(properties);
            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);
       
        });

        it('stores valid entity', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(repo.data.get(0)).not.to.be.undefined;
            expect(repo.data.get(0)).to.deep.equal(entity);       
        });

        it('incorrect entity throws error', () => { 
            let repo = new Repository(properties);                     
            expect(() => repo.add(invalid1)).to.throw('is not of correct');
            expect(() => repo.add(invalid2)).to.throw('missing');
            expect(() => repo.add(invalid3)).to.throw('is not of correct');
        });

    });

    describe("getId", () =>  {
        it('correct id returns entity',  () => {
            let repo = new Repository(properties);
            let id = repo.add(entity);

            expect(repo.getId(id)).to.deep.equal(entity);
        });

        it('incorrect id throws an error',  () => {
            let repo = new Repository(properties);

            expect(() => repo.getId(-1)).to.throw('does not exist');
            expect(() => repo.getId(-1.5)).to.throw('does not exist');
            expect(() => repo.getId(3)).to.throw('does not exist');
        });
    });

    describe("Update", function () {
        it('all data correct replaces old entity with new one',  () => {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.update(0, newEntity);

            expect(repo.getId(0)).to.deep.equal(newEntity);
            expect(repo.data.get(0)).to.have.property('name').that.equals('Ivo');
            expect(repo.data.get(0)).to.have.property('age').that.equals(12);
        });

        it('incorrect id throws error', () => {
            let repo = new Repository(properties);
            expect(() => repo.update(0, newEntity)).to.throw('does not exist');
        });

        it('invalid entity throws error', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.update(0, invalid1)).to.throw('is not of correct');
            expect(() => repo.update(0, invalid2)).to.throw('is missing');
            expect(() => repo.update(0, invalid3)).to.throw('is not of correct');
        });
    });

    describe("Delete", () => {
        it('deletes when entity is correct', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity);

            repo.del(1)
            expect(repo.count).to.equal(1);
        });

        it('throws error when incorrect id', () => {
            let repo = new Repository(properties);
            expect(() => repo.del(0)).to.throw('does not exist');
            expect(() => repo.del(-1)).to.throw('does not exist');
            expect(() => repo.del(1.4)).to.throw('does not exist');
            repo.add(entity);
            repo.add(entity);
            repo.add(entity);
            expect(() => repo.del(4)).to.throw('does not exist');
        });
    });
});
