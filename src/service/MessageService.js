import axios from 'axios'

export default class CountryService {

    getCountries() {
        return axios.get('data/messages.js').then(res => res.data.data);
    }
}
