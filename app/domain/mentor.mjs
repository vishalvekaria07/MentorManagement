import Mongoose from 'mongoose';
const { model, Schema } = Mongoose;
import uuid from 'uuid/v4';


const mentorModelSchema = new Schema({
    mentorId: {
        type: String,
        default: uuid
    },
    mentorName: {
        type: String
    },
    mentorAge: {
        type: Number
    },
    tasks: {
       type: Array,
       property: {
            taskId:  {
                type: String
            },
            taskName: {
                type: String
            }
       }
    }   
}, {
    strict: true,
    timestamps: true
  })

export default model('mentorSchema', mentorModelSchema);