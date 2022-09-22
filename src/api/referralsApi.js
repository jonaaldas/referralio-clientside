import axios from 'axios'


// const url = 'http://localhost:5015/api/'
const url = 'https://referral-io.adaptable.app/api/'

// get all referrals
export const getAllReferralsRequest = async (token) =>{
  try {
    return await axios.get(url + 'getreferrals', { headers: {"Authorization" : `Bearer ${token}`}})
  } catch (error) {
    return error
  }
}

// get a single referral
export const getOneReferralRequest = async(referralId, token) => {
  try {
    return await axios.get(url + `getsinglereferral/${referralId}`, { headers: {"Authorization" : `Bearer ${token}`}}) 
  } catch (error) {
    return error
  }
}

// add a referral to data base
export const createReferralRequest=(referral, token)=>{
  try {
    return axios.post(url + 'createreferral', referral, { headers: {"Authorization" : `Bearer ${token}`}})
  } catch (error) {
    return error
  }
}

// update a referral
export const editReferralRequest = async (token, client, referralId) =>{
  try {
    return await axios.put(url + `updatereferral/${referralId}`, client,  { headers: {"Authorization" : `Bearer ${token}`}})
  } catch (error) {
    return error
  }
}

// delete referal
export const deleteReferralRequest = async (token, referralId) => {
  try {
    return await axios.delete(url + `deletereferral/${referralId}`, { headers: {"Authorization" : `Bearer ${token}`}})
  } catch (error) {
    return error
  }
}