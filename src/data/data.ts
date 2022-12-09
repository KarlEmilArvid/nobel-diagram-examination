import { countryType, priceType } from '../types/types';
import awards from './json_award.json';
import laureates from './json_laureates.json';

/* Gender data */
const GenderData = {
    labels: ['Men', 'Women'],
    datasets: [{
        label: 'Awards',
        data: [laureates.filter((data) => data.gender !== "female").length, laureates.filter((data) => data.gender !== "male").length],
        backgroundColor: [
            '#7E89F2',
            '#F27EF2'
        ],
    }]
}

/* Prize money data */
const priceData = {
    labels: priceAverage().map(e => e.year),
    datasets: [{
        label: 'SEK',
        data: priceAverage().map(e => e.price),
        backgroundColor: [
            '#21A199'
        ]
    }]
}

function priceAverage() {
    let allPrices: priceType[] = awards.map((data) => {
        return { year: data.awardYear, price: data.prizeAmount }
    })
    const uniqueArray = allPrices.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === allPrices.findIndex(obj => {
            return JSON.stringify(obj) === _value
        })
    })

    return uniqueArray
}

/* Awards per category data */
const categoryArray: string[] = awards.map((award: { category: { en: string; }; }) => award.category.en);
const categoryCount: any = {};

for (const category of categoryArray) {
    categoryCount[category] = categoryCount[category] ? categoryCount[category] + 1 : 1;
}

const categoriesData = [
    { category: 'Chemistry', count: categoryCount['Chemistry'] },
    { category: 'Peace', count: categoryCount['Peace'] },
    { category: 'Literature', count: categoryCount['Literature'] },
    { category: 'Economic Sciences', count: categoryCount['Economic Sciences'] },
    { category: 'Physiology or Medicine', count: categoryCount['Physiology or Medicine'] },
    { category: 'Physics', count: categoryCount['Physics'] }
].map(({ category, count }) => ({ x: category, y: count }))

const categoryData = {
    datasets: [{
        label: 'Amount of awards',
        data: categoriesData,
        backgroundColor: [
            '#5164D6',
            '#36373D',
            '#4E86A3',
            '#AF9380',
            '#D67451',
            '#D644A9'
        ],
    }]
}

/* --------------------------------- Country Data */

const CountryData = {
    labels: sumCountryWinners().map(e => e.country),
    datasets: [{
        label: 'Awards',
        data: sumCountryWinners().map(e => e.times),
        backgroundColor: ['#5164D6'],
    }]
}

function sumCountryWinners() {
    let countryWins: countryType[] = laureates.map((data) => {
        if (!data.birth) {
            return { country: "corrupt data", times: 0 }
        }
        return { country: data.birth.place.country.en, times: 0 }
    })

    let timesWon: countryType[] = countryWins.map((data) => {
        return countInArrayCountry(countryWins, data)
    })

    const uniqueArray: countryType[] = timesWon.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === timesWon.findIndex(obj => {
            return JSON.stringify(obj) === _value
        })
    })

    const overOne: countryType[] = uniqueArray.filter((data) => data.times > 1)
    let sortedArray: countryType[] = overOne.sort((obj1: countryType, obj2: countryType) => {
        if (obj1.times > obj2.times) {
            return 1
        }

        if (obj1.times < obj2.times) {
            return -1
        }

        return 0
    })

    return sortedArray
}

function countInArrayCountry(array: countryType[], what: countryType) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].country === what.country) {
            count++
        }
    }

    return { times: count, country: what.country }
}

export { GenderData, priceData, CountryData, categoryData }