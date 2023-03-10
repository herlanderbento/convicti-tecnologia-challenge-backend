import * as Yup from 'yup';

export const createSchemaValidate = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  unit_id: Yup.string().required(),
});
