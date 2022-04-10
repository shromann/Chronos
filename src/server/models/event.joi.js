import Joi from 'joi';

const Event = Joi.object({
  title: Joi.string().required(),
  event_time: Joi.date(),
});

export default Event;
