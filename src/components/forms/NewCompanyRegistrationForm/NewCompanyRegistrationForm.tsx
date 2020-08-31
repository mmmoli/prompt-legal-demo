import React from 'react';
import { Formik, Field, FormikHelpers, FieldArray } from 'formik';
import { AddressForm, Address } from '../AddressForm';
import { Label, RadioLabel, StyledForm, StyledInput, StyledRadios } from '../../elements';
import { Button } from '../../Button';
import tw from 'twin.macro';

enum OfficeType {
  HEAD = 'head',
  BRANCH = 'branch'
}

type Premises = {
  officeType: OfficeType;
  address: Address;
};

export interface NewCompanyRegistrationFormValues {
  part1CompanyNameTH: string;
  part1CompanyNameEN: string;
  premises: Premises[];
}

const initialValues: NewCompanyRegistrationFormValues = {
  part1CompanyNameTH: '',
  part1CompanyNameEN: '',
  premises: []
};

type NewCompanyRegistrationFormProps = {
  submitHandler: (values: NewCompanyRegistrationFormValues) => void;
};
const NewCompanyRegistrationForm: React.FC<NewCompanyRegistrationFormProps> = ({
  submitHandler
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: NewCompanyRegistrationFormValues,
        { setSubmitting }: FormikHelpers<NewCompanyRegistrationFormValues>
      ) => {
        submitHandler(values);
        setSubmitting(false);
      }}
    >
      {({ values, isValid }) => (
        <StyledForm>
          <Label>
            Company Name (Thai)
            <Field
              as={StyledInput}
              required
              name="part1CompanyNameTH"
              placeholder={`i.e. "ACME Inc."`}
            />
          </Label>

          <Label>
            Company Name (English)
            <Field as={StyledInput} name="part1CompanyNameEN" placeholder={`i.e. "ACME Inc."`} />
          </Label>

          <FieldArray name="premises">
            {({ remove, push }) => (
              <div>
                {values.premises.map((_, index) => (
                  <div>
                    <div tw="flex flex-col items-stretch">
                      <RadioLabel>
                        <Field
                          as={StyledRadios}
                          type="radio"
                          checked
                          name={`premises.${index}.officeType`}
                          value="head"
                        />
                        Head Office
                      </RadioLabel>

                      <RadioLabel>
                        <Field
                          as={StyledRadios}
                          type="radio"
                          name={`premises.${index}.officeType`}
                          value="branch"
                        />
                        Branch
                      </RadioLabel>
                    </div>

                    <AddressForm index={index} onCancel={() => remove(index)} />
                  </div>
                ))}
                <Button type="button" buttonVariant="text" onClick={() => push({})}>
                  Add Premises
                </Button>
              </div>
            )}
          </FieldArray>

          <Button buttonVariant="primary" disabled={!isValid} type="submit">
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default NewCompanyRegistrationForm;
