import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import tw from 'twin.macro';
import { CompanyRegistrationFormValues } from '.';

const initialValues: CompanyRegistrationFormValues = {
  part1CompanyName: '',
  part1CompanyRegistrationNumber: '',
  part1CompanyMemoOfIncorporationNumber: '',
  part1IncludeArticlesOfAssociation: true
};

const Label = tw.label`
  font-bold
`;

const StyledInput = tw.input`
  block
  form-input
  mt-2
`;

const StyledCheckbox = tw.input`
  form-checkbox
  block
  mt-2
  h-4
  w-4
`;

const StyledForm = tw(Form)`
  block
  w-full
  grid
  grid-cols-1
  gap-8
`;

type CompanyRegistrationFormProps = {
  submitHandler: (values: CompanyRegistrationFormValues) => void;
};
const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: CompanyRegistrationFormValues,
        { setSubmitting }: FormikHelpers<CompanyRegistrationFormValues>
      ) => {
        submitHandler(values);
        setSubmitting(false);
      }}
    >
      <StyledForm>
        <Label>
          Company Name
          <Field as={StyledInput} name="part1CompanyName" placeholder={`i.e. "ACME Inc."`} />
        </Label>

        <Label>
          Company registry No.
          <Field
            as={StyledInput}
            name="part1CompanyRegistrationNumber"
            placeholder={`i.e. "01293920"`}
          />
        </Label>

        <Label>
          Company memorandum of incorporation register No.
          <Field
            as={StyledInput}
            name="part1CompanyMemoOfIncorporationNumber"
            placeholder={`i.e. "01293920"`}
          />
        </Label>

        <Label>
          Include Articles of Association?
          <Field as={StyledCheckbox} type="checkbox" name="part1IncludeArticlesOfAssociation" />
        </Label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};

export default CompanyRegistrationForm;
