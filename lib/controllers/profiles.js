import { Router } from 'express';
import Profile from '../models/Profile.js';
import ProfileService from '../services/ProfileService.js';

export default Router()
  .post('/api/v1/profiles', (req, res, next) => {

    Profile.insert(req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  })

  .get('/api/v1/profiles/:id', (req, res, next) => {
    ProfileService.getByIdWithBalance(req.params.id)
      .then((profile) => res.send(profile))
      .catch(next);
  });
