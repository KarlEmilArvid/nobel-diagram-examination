import { countryType, winnerType } from '../types/types'
import awards from './json_award.json'
import laureates from './json_laureates.json'

/* Top winners data */
const winnerData: winnerType[] = laureates.map((winner) => ({
    name: winner.knownName != undefined ? winner.knownName.en : winner.orgName.en,
    wins: winner.nobelPrizes.length,
}))

winnerData.sort((a, b) => (a.wins < b.wins ? 1 : b.wins ? -1 : 0))

const winnersArray = []
const namesArray = []

for (let i = 0; i < winnerData.length; i++) {
    if (winnersArray.length < 10) {
        winnersArray.push(winnerData[i].wins)
        namesArray.push(winnerData[i].name)
    }
}

const totalWins = laureates.map((laureate) => laureate.nobelPrizes)
const totalWinners: string[] = []

totalWins.forEach((winner) => {
    winner.forEach((win: { category: { en: string } }) => {
        totalWinners.push(win.category.en)
    })
})

totalWinners.sort()

const Top10Data = {
    labels: namesArray,
    datasets: [
        {
            label: "Top 10 most awarded",
            data: winnersArray,
            backgroundColor: [
                '#3C5C06',
                '#ADE153',
                '#91DB0F',
                '#475C22',
                '#6FA80C',
                '#A84900',
                '#5C371C',
                '#DB5F00',
                '#E18844',
                '#5C2800'
            ],
        }
    ]
}

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
const prizeAmount = awards.map(({ awardYear, prizeAmount }) => ({
    x: awardYear,
    y: prizeAmount,
}))

const PrizeData = {
    datasets: [
        {
            label: "Prize amount",
            data: prizeAmount,
            backgroundColor: [
                '#21A199'
            ],
            hoverOffset: 4,
        },
    ],
}

const prizeAmountAdjusted = awards.map(
    ({ awardYear, prizeAmountAdjusted }) => ({
        x: awardYear,
        y: prizeAmountAdjusted,
    })
)

const PrizeDataAdjusted = {
    datasets: [
        {
            label: "Prize amount adjusted with inflation",
            data: prizeAmountAdjusted,
            backgroundColor: [
                '#21A199'
            ],
            hoverOffset: 4,
        },
    ],
}

/* Awards per category data */
const categoryArray: string[] = awards.map((award: { category: { en: string } }) => award.category.en)
const categoryCount: any = {}

for (const category of categoryArray) {
    categoryCount[category] = categoryCount[category] ? categoryCount[category] + 1 : 1
}

const categoriesData = [
    { category: 'Chemistry', count: categoryCount['Chemistry'] },
    { category: 'Peace', count: categoryCount['Peace'] },
    { category: 'Literature', count: categoryCount['Literature'] },
    { category: 'Economic Sciences', count: categoryCount['Economic Sciences'] },
    { category: 'Physiology or Medicine', count: categoryCount['Physiology or Medicine'] },
    { category: 'Physics', count: categoryCount['Physics'] }
].map(({ category, count }) => ({ x: category, y: count }))

const CategoryData = {
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

/* Country Data */
const CountryData = {
    labels: totalCountryWins().map(e => e.country),
    datasets: [{
        label: 'Awards',
        data: totalCountryWins().map(e => e.times),
        backgroundColor: ['#5164D6'],
    }]
}

function totalCountryWins() {
    let countryWins: countryType[] = laureates.map((data) => {
        if (!data.birth) {
            return { country: "corrupt data", times: 0 }
        }
        return { country: data.birth.place.country.en, times: 0 }
    })

    let amountWon: countryType[] = countryWins.map((data) => {
        return countPerCountry(countryWins, data)
    })

    const uniqueArray: countryType[] = amountWon.filter((value, index) => {
        const _value: any = JSON.stringify(value)
        return index === amountWon.findIndex(obj => {
            return JSON.stringify(obj) === _value
        })
    })

    const overOneWin: countryType[] = uniqueArray.filter((data) => data.times > 1)
    let sortedArray: countryType[] = overOneWin.sort((countryOne: countryType, countryTwo: countryType) => {
        if (countryOne.times > countryTwo.times) {
            return 1
        }

        if (countryOne.times < countryTwo.times) {
            return -1
        }

        return 0
    })

    return sortedArray
}

function countPerCountry(array: countryType[], countryName: countryType) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].country === countryName.country) {
            count++
        }
    }

    return { times: count, country: countryName.country }
}

export { GenderData, CategoryData, CountryData, PrizeData, PrizeDataAdjusted, Top10Data }