'use strict'

const { expect } = require('chai')
const logic = require('.');
const Gnomes = require('./gnomes')

describe('logic', () => {

    describe('search gnomes by professions', () => {

        it('search all gnomes with same profession', () =>
            logic.searchGnomesByProfession('Metalworker')
                .then(gnomes => {
                    expect(gnomes).to.be.an('array');
                    expect(gnomes).to.have.lengthOf(193);
                    expect(gnomes[0].name).to.equal('Tobus Quickwhistle');
                    expect(gnomes[0].hair_color).to.equal('Pink');
                })
        )
    })

    describe('sort gnomes by age', () => {

        const randomNum = Math.floor(Math.random() * 1336)  
        const randomPlusOne = randomNum + 1

        expect(Gnomes.Brastlewark[0].age).to.equal(306)

        it('sort by age', () =>
            logic.sortByAge(Gnomes.Brastlewark)
                .then(gnomes => {
                    expect(gnomes).to.be.an('array');
                    expect(gnomes).to.have.lengthOf(1337);
                    expect(gnomes[0].age).to.not.equal(306);
                    expect(gnomes[0].age).to.be.at.most(gnomes[1].age);
                    expect(gnomes[randomNum].age).to.be.at.most(gnomes[randomPlusOne].age);
                })
        )
    })

    describe('sort gnomes by height', () => {

        const randomNum = Math.floor(Math.random() * 1336)  
        const randomPlusOne = randomNum + 1

        expect(Gnomes.Brastlewark[0].height).to.equal(107.75835)
        
        it('sort by height', () =>
        
        logic.sortByHeight(Gnomes.Brastlewark)
        .then(gnomes => {
            expect(gnomes).to.be.an('array');
            expect(gnomes).to.have.lengthOf(1337);
            expect(gnomes[0].height).to.not.equal(107.75835);
            expect(gnomes[0].height).to.be.at.least(gnomes[1].height);
            expect(gnomes[randomNum].height).to.be.at.least(gnomes[randomPlusOne].height);
        })
        )
    })
    
    describe('sort gnomes by weight', () => {

        const randomNum = Math.floor(Math.random() * 1336)  
        const randomPlusOne = randomNum + 1

        expect(Gnomes.Brastlewark[0].weight).to.equal(39.065952)

        it('sort by weight', () =>
            logic.sortByAge(Gnomes.Brastlewark)
                .then(gnomes => {
                    expect(gnomes).to.be.an('array');
                    expect(gnomes).to.have.lengthOf(1337);
                    expect(gnomes[0].weight).to.not.equal(39.065952);
                })
        )
    })
})
