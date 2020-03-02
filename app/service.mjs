import MentorModel from './domain/mentor'

async function createMentor(request, response) {
  const modelToPersist = await new MentorModel(request.body);
  const result = await modelToPersist.save()
  response.send(result);

}

async function fetchMentor(request, response) {
  const result = await MentorModel.findOne(
    { mentorID: request.params.mentor_id }
  );
  response.send(result);
}

async function fetchAllMentors(request, response) {
  const result = await MentorModel.find();
  response.send(result);


}
async function removeMentor(request, response) {

  const id = request.params.mentor_id;
  const result = await MentorModel.findOneAndDelete({ mentorID: id })
  response.send(result);
}

async function updateMentors(request, response) {
  const id = request.params.mentor_id;
  const result = await MentorModel.findOneAndUpdate({ mentorId: id }, request.body, { new: true }).lean().exec();
  response.send(result)
}


export {
  createMentor,
  fetchMentor,
  removeMentor,
  updateMentors,
  fetchAllMentors
}

