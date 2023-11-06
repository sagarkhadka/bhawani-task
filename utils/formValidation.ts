import * as yup from 'yup'

export const addProductValidation = yup.object().shape({
  product: yup
    .string()
    .required('This field is required')
    .matches(/^[a-zA-Z\s]+$/, 'Numbers are not allowed'),
  batch: yup.string().required('This field is required'),
  warehouse: yup.string().required('This field is required'),
  quantity: yup
    .number()
    .required('This field is required')
    .positive('Must be positive'),
  rate: yup
    .number()
    .required('This field is required')
    .positive('Must be positive'),
  discount: yup.number().required('This field is required'),
  amount: yup.number().optional(),
  tax: yup.number().optional()
})
