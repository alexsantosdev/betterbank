import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <ButtonNativeBase background='blue.500' borderRadius={50} padding={5} _pressed={{background: 'blue.100'}} {...rest}>
            <Text color='white'>{title}</Text>
        </ButtonNativeBase>
    )
}