export { default as CompanyRegistrationForm } from './CompanyRegistrationForm';
export * from './CompanyRegistrationForm';

export interface CompanyRegistrationFormValues {
  part1CompanyName: string;
  part1CompanyRegistrationNumber: string;
  part1CompanyMemoOfIncorporationNumber: string;
  part1IncludeArticlesOfAssociation: boolean;
}
