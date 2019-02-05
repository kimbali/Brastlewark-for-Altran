const gnomes = require('./gnomes');

const logic = {

    professions(gnomes) {
        let professions = []
        gnomes.forEach(gnome => {
            professions = professions.concat(gnome.professions)
        })

        const uniqueProfessions = [...new Set(professions)]

        return uniqueProfessions
    },

    searchGnomesByProfession(profession) {
        return Promise.resolve()
            .then(() => {
                let matchedWorkers = []
                gnomes.Brastlewark.forEach(gnome => {
                    return gnome.professions.map(currentProfession => {
                        if (currentProfession === profession) {
                            return matchedWorkers.push(gnome)
                        }
                    })
                })
                return matchedWorkers
            })
    },

    sortByAge(incomeGnomes) {
        return Promise.resolve()
            .then(() => {
                return incomeGnomes.sort((a, b) => a.age - b.age)
            })
    },

    sortByHeight(incomeGnomes) {
        return Promise.resolve()
            .then(() => {
                return incomeGnomes.sort((a, b) => b.height - a.height)
            })
    },

    sortByWeight(incomeGnomes) {
        return Promise.resolve()
            .then(() => {
                return incomeGnomes.sort((a, b) => a.weight - b.weight)
            })
    },

    bestWarriors(incomeGnomes) {
        return Promise.resolve()
            .then(() => {
                let warriors = []
                incomeGnomes.forEach(gnome => {
                    if (gnome.height > 85 && gnome.weight > 40 && gnome.age < 50) {
                        return warriors.push(gnome)
                    }
                })
                return warriors
            })
    }
}

export default logic