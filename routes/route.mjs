import express from 'express';
const router = express.Router();
import {
    createMentor, fetchMentor, removeMentor, updateMentors, fetchAllMentors
} from '../app/service'


router.post('/postMentors', createMentor)
router.get('/getMentors/:mentor_id', fetchMentor)
router.get('/fetchAllMentors', fetchAllMentors)
router.delete('/deleteMentors/:mentor_id', removeMentor)
router.patch('/updateMentors/:mentor_id', updateMentors)


export default router;
