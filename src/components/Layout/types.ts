import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface LayoutProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}
