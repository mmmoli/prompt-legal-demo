import tw, { styled } from 'twin.macro';

export type ButtonProps = {
  buttonVariant?: 'primary' | 'outlined' | 'text';
} & React.HTMLProps<HTMLButtonElement>;

const baseStyles = tw`
  border
  border-transparent
  duration-200
  ease-out
  focus:outline-none
  inline-block
  px-5
  py-1
  rounded-full
  transition
`;

const Button = styled.button<ButtonProps>`
  ${baseStyles}
  
  ${({ buttonVariant, disabled }) => {
    switch (buttonVariant) {
      case 'primary':
        return [tw`border-none bg-primary text-white`, !disabled && tw`hover:(bg-primary-light)`];

      case 'outlined':
        return [
          tw`bg-transparent text-primary border-primary`,
          !disabled && tw`hover:(bg-primary text-white) active:(bg-primary-light text-white)`
        ];

      case 'text':
        return [tw`text-primary`, !disabled && tw`hover:underline active:(text-primary-light)`];
      default:
        return null;
    }
  }}

  ${({ disabled }) => disabled && tw`cursor-not-allowed opacity-25`}
`;

Button.defaultProps = {
  buttonVariant: 'secondary',
  disabled: false
};

export default Button;
