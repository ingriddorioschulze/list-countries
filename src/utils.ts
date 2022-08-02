import axios from "axios"

export type CountriesData = {
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string
  topLevelDomain: Array<string>
  currencies: Array<{name: string}>
  languages: Array<{name: string}>
  borders: Array<string>
  flag: string
}

export default async function getAllCountries() : Promise<CountriesData[]> {
const response = await axios.get<CountriesData[]>('https://restcountries.com/v2/all')
  return response.data
}
