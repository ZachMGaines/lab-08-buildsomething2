import Profile from '../models/Profile.js';


export default class ProfileService {
  static async getByIdWithBalance(id) {
    const profile = await Profile.findById(id);

    const balance = await getBalance(profile.accountId);

    return {
      ...profile,
      balance,
    };
  }
}
