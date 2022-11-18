import * as yup from 'yup';

export const schema = yup.object({
  title: yup.string().required('O nome da tecnologia é obrigatório'),
  status: yup.string().required('O nível é obrigatório'),
});

export const editSchema = yup.object({
  status: yup.string().required('O nível é obrigatório'),
});
