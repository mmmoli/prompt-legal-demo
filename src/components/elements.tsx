import tw from 'twin.macro';
import { Form } from 'formik';

export const Label = tw.label`
  font-medium
  text-base
`;

export const RadioLabel = tw(Label)`
  flex
  items-center
  space-x-2
  mb-1
`;

export const StyledInput = tw.input`
  block
  form-input
  mt-2
`;

export const StyledRadios = tw.input`
  block
  form-radio
  mr-3
`;

export const StyledForm = tw(Form)`
  block
  w-full
  grid
  grid-cols-1
  gap-8
`;
