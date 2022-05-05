import Joi from "joi";

const Event = Joi.object({
  name: Joi.string().required(),
  start_time: Joi.date(),
  end_time: Joi.date(),
  focus: Joi.number(),
});

export default Event;
